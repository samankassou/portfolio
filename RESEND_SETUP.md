# Resend Contact Form Setup Guide

## ✅ What's Already Done

- ✓ Resend package installed
- ✓ API route created at `/app/api/contact/route.ts`
- ✓ Contact form updated with state management
- ✓ Loading, success, and error states implemented
- ✓ Form validation added
- ✓ Environment files created

## 🚀 What You Need to Do

### Step 1: Get Your Resend API Key

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account
3. Navigate to **API Keys** in the dashboard
4. Click **Create API Key**
5. Copy your API key

### Step 2: Configure Environment Variables

Open `.env.local` and update it with your values:

```env
# Resend API Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Your email address where contact form submissions will be sent
CONTACT_EMAIL=your-actual-email@example.com
```

### Step 3: Update the "From" Email (Optional)

By default, the form uses Resend's test email: `onboarding@resend.dev`

**For production**, you should verify your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `yourdomain.com`)
4. Follow DNS verification steps
5. Update the API route at `app/api/contact/route.ts` line 24:

```typescript
from: "Portfolio Contact <contact@yourdomain.com>", // Your verified domain
```

### Step 4: Test the Form

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox (the email specified in `CONTACT_EMAIL`)

## 📧 Email Features

- **Reply-To**: Automatically set to the sender's email for easy replies
- **HTML Formatting**: Messages are formatted with proper HTML
- **Validation**: Email validation on both client and server
- **Error Handling**: Clear error messages for users
- **Success Feedback**: Confirmation message after successful submission

## 🔒 Security Notes

- API key is stored in `.env.local` (not committed to git)
- Server-side validation prevents invalid submissions
- Rate limiting can be added for production use

## 🎨 Form Features

- Real-time form state management
- Loading spinner during submission
- Success message (auto-dismisses after 5 seconds)
- Error message display
- Form reset after successful submission
- All fields required with HTML5 validation

## 📝 Free Tier Limits

Resend free tier includes:

- **100 emails per day**
- **3,000 emails per month**
- Perfect for portfolio contact forms!

## 🐛 Troubleshooting

**Form not sending?**

- Check if `.env.local` has correct values
- Restart dev server after changing environment variables
- Check browser console for errors
- Check server console/terminal for API errors

**Not receiving emails?**

- Verify `CONTACT_EMAIL` in `.env.local`
- Check spam/junk folder
- Verify Resend API key is valid
- Check Resend dashboard logs

## 🚀 Ready for Production

Before deploying:

1. ✓ Add environment variables to your hosting platform (Vercel/Netlify)
2. ✓ Verify your domain in Resend
3. ✓ Update the "from" email in the API route
4. Consider adding rate limiting (optional)

Enjoy your functional contact form! 🎉
