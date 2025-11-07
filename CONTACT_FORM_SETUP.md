# Contact Form Setup Guide

The contact form on your ShinyBae website is configured to send emails to:
- sales@shinybae.com
- orolabisola@gmail.com

## Option 1: Using EmailJS (Recommended)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Setup Steps:

1. **Create an EmailJS account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (100 emails/month free)

2. **Create an Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
     ```
     Subject: New Contact Form Submission - {{subject}}
     
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - In the "To Email" field, you can use `{{to_email}}` as a variable (the code will send to both emails automatically)
   - Or set it to `sales@shinybae.com` (the code handles sending to both addresses)
   - Save the template
   
   **Note**: The contact form code automatically sends emails to both `sales@shinybae.com` and `orolabisola@gmail.com` when using EmailJS.

4. **Get your API keys**
   - Go to "Account" > "General"
   - Copy your Public Key
   - Go to "Email Services" and copy your Service ID
   - Go to "Email Templates" and copy your Template ID

5. **Add environment variables**
   - In your Netlify dashboard, go to Site settings > Environment variables
   - Add these variables:
     - `VITE_EMAILJS_SERVICE_ID` = Your Service ID
     - `VITE_EMAILJS_TEMPLATE_ID` = Your Template ID
     - `VITE_EMAILJS_PUBLIC_KEY` = Your Public Key
   - Redeploy your site

## Option 2: Using Netlify Forms

If you prefer to use Netlify Forms (already configured in the form):

1. **Configure form notifications in Netlify**
   - Go to your Netlify dashboard
   - Navigate to Site settings > Forms
   - Find your "contact" form
   - Click "Settings" > "Notifications"
   - Add email notifications for:
     - sales@shinybae.com
     - orolabisola@gmail.com

2. **Form submissions will be stored**
   - All form submissions are automatically stored in Netlify
   - You can view them in the Forms section of your dashboard

## Testing

After setup, test the contact form by:
1. Filling out the form on your website
2. Submitting it
3. Checking both email addresses for the notification

## Troubleshooting

- **Emails not sending**: Check that your environment variables are set correctly
- **EmailJS errors**: Verify your service, template, and public key are correct
- **Netlify Forms**: Check your Netlify dashboard Forms section for submissions

