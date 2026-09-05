# Contact form and Resend setup

The contact form sends enquiries through the server-side route at `app/api/contact/route.ts`. The browser never receives the Resend API key.

## Included in the project

- Client- and server-side validation.
- Loading, success, and error feedback.
- HTML email with the visitor's address set as `Reply-To`.
- Escaping of user content before email rendering.
- Honeypot field for basic bot filtering.
- Shared Redis sliding-window rate limit: five requests per 15 minutes for one client identifier, enforced atomically across instances with automatic expiry.

## 1. Create a Resend API key

1. Create an account at [resend.com](https://resend.com/).
2. Open **API Keys** in the Resend dashboard.
3. Create and copy a server-side API key.

## 2. Configure the environment

Copy the example file, then fill in the values:

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL="Portfolio Contact <portfolio@yourdomain.com>"
UPSTASH_REDIS_REST_URL=https://your-database.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-server-token
```

| Variable            | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| `RESEND_API_KEY`    | Secret key used by the server route to send the message. |
| `CONTACT_EMAIL`     | Inbox that receives portfolio enquiries.                 |
| `RESEND_FROM_EMAIL` | Sender identity authorized by Resend.                    |

Create an Upstash Redis database and copy its REST URL and standard write token into `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. See the [Upstash REST API documentation](https://upstash.com/docs/redis/features/restapi). Every application instance must use the same database. The limiter uses one atomic Lua script and expires inactive client keys after 15 minutes. Missing configuration, timeouts, or store errors return HTTP 503 without sending email; there is no process-local fallback.

Do not commit `.env.local` or expose `RESEND_API_KEY` or `UPSTASH_REDIS_REST_TOKEN` in a variable prefixed with `NEXT_PUBLIC_`.

## 3. Verify the sending domain

For production, add the sending domain in **Resend → Domains**, publish the requested DNS records, and wait for verification. `RESEND_FROM_EMAIL` must use an address on that verified domain.

For current quotas, sender restrictions, and pricing, refer to the [Resend documentation](https://resend.com/docs) and [pricing page](https://resend.com/pricing), as these limits may change.

## 4. Test locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), go to the contact section, and submit the form. Then check:

- the success or error message in the form;
- the inbox configured in `CONTACT_EMAIL`;
- the Resend delivery logs;
- the development terminal if the request fails.

Restart the development server after changing `.env.local`.

## Production checklist

- Add all five variables to the hosting platform.
- Verify the production sending domain and sender address.
- Send a real message from the deployed site and test `Reply-To`.
- Confirm that secrets are absent from browser bundles and repository history.
- Configure the trusted hosting proxy to overwrite `x-real-ip` (preferred) or `x-forwarded-for` with the actual client IP; never pass client-supplied values through. Without either header, requests share an `unknown` bucket.
- Add monitoring if contact delivery is business-critical.

## Troubleshooting

### The form reports a configuration error

Check that all five variables are defined in the environment used by the server, then restart or redeploy the application.

### Resend rejects the sender

Confirm that the domain is verified and that `RESEND_FROM_EMAIL` exactly matches an authorized sender identity.

### The request succeeds but no message arrives

Check the Resend logs, spam folder, `CONTACT_EMAIL`, and the recipient status in Resend.

### Requests are rate-limited unexpectedly

The sixth request from the same client within 15 minutes returns HTTP 429 with the remaining wait in `Retry-After`. The limit persists across application restarts. Clients behind a shared IP share the limit. If unrelated clients are blocked together, check the trusted proxy IP headers. For HTTP 503, check both Redis credentials and store availability.
