# Contact form

The [contact form](../app/components/sections/Contact/ContactForm.tsx) posts JSON to [`POST /api/contact`](../app/api/contact/route.ts). The server uses Resend to send enquiries to the configured inbox and sets the visitor's email address as `Reply-To`.

## Setup

From the repository root, copy the environment template if you do not already have a local environment file:

```bash
cp .env.example .env.local
```

Configure these five server-side variables in `.env.local` and in your hosting environment:

| Variable                   | Purpose                                                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`           | Resend API key used to send email. Required.                                                                                                                        |
| `CONTACT_EMAIL`            | Inbox that receives enquiries. Required.                                                                                                                            |
| `RESEND_FROM_EMAIL`        | Sender identity authorized by Resend. If unset, the route uses `Portfolio Contact <portfolio@samankassou.com>`; configure your own sender when deploying elsewhere. |
| `UPSTASH_REDIS_REST_URL`   | REST endpoint of the shared Upstash Redis database. Required.                                                                                                       |
| `UPSTASH_REDIS_REST_TOKEN` | Standard write token for that database. Required.                                                                                                                   |

Create an API key and configure your sending domain in Resend. Set `RESEND_FROM_EMAIL` to an authorized sender on that domain. Create an Upstash Redis database and use the same database for every application instance. The [environment template](../.env.example) contains the variable names and current sender default.

Keep `.env.local` out of version control and keep these variables server-side; do not prefix them with `NEXT_PUBLIC_`. Restart the development server or redeploy after changing them.

## Validation and delivery

The browser requires name, email, and message, checks the email input, and applies the same field length limits as the server. The server trims fields before validation:

| Field     | Requirement                                                 | Maximum length |
| --------- | ----------------------------------------------------------- | -------------- |
| `name`    | Nonempty string                                             | 100            |
| `email`   | Nonempty string matching the route's email pattern          | 254            |
| `subject` | Optional string; blank or omitted becomes `Project enquiry` | 150            |
| `message` | Nonempty string                                             | 5,000          |

The optional `website` string is a hidden honeypot. A nonempty value returns success without sending email. User content is escaped before insertion into the HTML email. A successful Resend submission clears the form and shows a success message; errors are displayed in the form. Success means the send request was accepted, so check delivery logs if the email does not arrive.

## Rate limiting

The [limiter](../lib/utils/contactRateLimit.ts) allows five requests per client identifier in a rolling 15-minute window. It runs after the JSON content-type check and before body parsing or validation, so invalid payloads, honeypot submissions, and failed sends consume a slot. Requests rejected by the limiter do not consume another slot or extend the window.

The client identifier is the trimmed `x-real-ip` header, otherwise the first trimmed `x-forwarded-for` entry, otherwise `unknown`. Configure the trusted hosting proxy to overwrite these headers with the actual client IP. Clients sharing an IP share a limit; requests without either header share the `unknown` bucket.

Redis executes the sliding-window check atomically using its own clock. Client keys contain a SHA-256 hash of the identifier and expire 15 minutes after the last allowed request. Limits persist across application restarts and apply across instances using the same database.

When all five slots are occupied, the route returns HTTP 429 with the number of seconds until a slot becomes available in `Retry-After`. Redis requests have a five-second timeout. Missing Redis configuration, timeouts, or store errors return HTTP 503 with `Retry-After: 60` and send no email; there is no in-memory fallback.

## Verify and troubleshoot

Run `npm run dev`, open [localhost:3000](http://localhost:3000), and submit a test enquiry from the contact section. Check the form response, the `CONTACT_EMAIL` inbox, Resend delivery logs, and the server terminal. Repeat the delivery check on the deployed site and confirm that replying addresses the visitor.

| Response | Meaning and next step                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `200`    | Accepted by Resend, or discarded by the honeypot. If mail is missing, check the recipient, spam folder, and delivery logs.         |
| `400`    | Invalid field types, empty required fields, excessive length, or invalid email. Correct the payload.                               |
| `415`    | The request's content type must include `application/json`.                                                                        |
| `429`    | The client's five-request limit is exhausted. Wait for `Retry-After`; inspect proxy headers if unrelated clients share a bucket.   |
| `502`    | Resend returned a send error. Check server logs, credentials, and the authorized sender identity.                                  |
| `503`    | Redis is unavailable or misconfigured, or `RESEND_API_KEY` / `CONTACT_EMAIL` is missing. Check server logs and environment values. |
| `500`    | Unexpected exception, including malformed JSON. Check the request and server logs.                                                 |

For service-specific setup, sender restrictions, and quotas, consult the [Resend documentation](https://resend.com/docs) and [Upstash REST API documentation](https://upstash.com/docs/redis/features/restapi).
