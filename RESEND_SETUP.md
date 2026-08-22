# Contact form and Resend setup

The contact form sends enquiries through the server-side route at `app/api/contact/route.ts`. The browser never receives the Resend API key.

## Included in the project

- Client- and server-side validation.
- Loading, success, and error feedback.
- HTML email with the visitor's address set as `Reply-To`.
- Escaping of user content before email rendering.
- Honeypot field for basic bot filtering.
- Best-effort in-memory rate limit: five requests per 15 minutes for one client identifier.

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
```

| Variable            | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| `RESEND_API_KEY`    | Secret key used by the server route to send the message. |
| `CONTACT_EMAIL`     | Inbox that receives portfolio enquiries.                 |
| `RESEND_FROM_EMAIL` | Sender identity authorized by Resend.                    |

Do not commit `.env.local` or expose `RESEND_API_KEY` in a variable prefixed with `NEXT_PUBLIC_`.

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

- Add all three variables to the hosting platform.
- Verify the production sending domain and sender address.
- Send a real message from the deployed site and test `Reply-To`.
- Confirm that secrets are absent from browser bundles and repository history.
- Replace the in-memory rate limiter with a shared store for multi-instance or higher-volume deployments.
- Add monitoring if contact delivery is business-critical.

## Troubleshooting

### The form reports a configuration error

Check that all three variables are defined in the environment used by the server, then restart or redeploy the application.

### Resend rejects the sender

Confirm that the domain is verified and that `RESEND_FROM_EMAIL` exactly matches an authorized sender identity.

### The request succeeds but no message arrives

Check the Resend logs, spam folder, `CONTACT_EMAIL`, and the recipient status in Resend.

### Requests are rate-limited unexpectedly

The included limiter is intentionally small and stored in application memory. It resets when the process restarts and is not synchronized between server instances. Use a shared store before relying on it as a production abuse-control layer.
