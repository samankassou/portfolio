import { createHash, randomUUID } from "node:crypto";

const WINDOW_MS = 15 * 60 * 1_000;
const MAX_REQUESTS = 5;

// Redis executes the complete sliding-window check atomically across instances.
// Use Redis time so application clock differences cannot affect the limit.
const RATE_LIMIT_SCRIPT = `
local clock = redis.call('TIME')
local now = tonumber(clock[1]) * 1000 + math.floor(tonumber(clock[2]) / 1000)
local window = tonumber(ARGV[1])
redis.call('ZREMRANGEBYSCORE', KEYS[1], '-inf', now - window)
if redis.call('ZCARD', KEYS[1]) >= tonumber(ARGV[2]) then
  local oldest = redis.call('ZRANGE', KEYS[1], 0, 0, 'WITHSCORES')
  return math.max(1, math.ceil((tonumber(oldest[2]) + window - now) / 1000))
end
redis.call('ZADD', KEYS[1], now, ARGV[3])
redis.call('PEXPIRE', KEYS[1], window)
return 0
`;

/** Returns retry delay in seconds, or zero when the request is allowed. */
export async function checkContactRateLimit(request: Request): Promise<number> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error("Missing contact rate-limit store configuration");
  }

  // The deployment proxy must overwrite these headers with the client's IP.
  const clientId =
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const clientHash = createHash("sha256").update(clientId).digest("hex");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      "EVAL",
      RATE_LIMIT_SCRIPT,
      1,
      `portfolio:contact:v1:${clientHash}`,
      WINDOW_MS,
      MAX_REQUESTS,
      randomUUID(),
    ]),
    cache: "no-store",
    signal: AbortSignal.timeout(5_000),
  });

  if (!response.ok) throw new Error("Contact rate-limit store unavailable");
  const data: unknown = await response.json();
  if (
    !data ||
    typeof data !== "object" ||
    "error" in data ||
    !("result" in data) ||
    typeof data.result !== "number" ||
    !Number.isInteger(data.result) ||
    data.result < 0 ||
    data.result > WINDOW_MS / 1_000
  ) {
    throw new Error("Invalid contact rate-limit response");
  }
  return data.result;
}
