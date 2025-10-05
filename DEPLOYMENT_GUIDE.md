# 🚀 ShinyBae Deployment Guide

Complete guide to deploying your ShinyBae store to production.

---

## 📋 Pre-Deployment Checklist

### 1. Configuration Files

- [ ] **Update `src/config/site.ts`**
  - [ ] Add real email addresses
  - [ ] Add real social media URLs
  - [ ] Update business information
  - [ ] Verify shipping threshold

- [ ] **Update SEO files in `/public`**
  - [ ] `robots.txt` - Update sitemap URL with your domain
  - [ ] `sitemap.xml` - Replace "yourdomain.com" with actual domain
  - [ ] `.htaccess` - Update domain in hotlinking protection (line 146)

- [ ] **Update `index.html`**
  - [ ] Replace "yourdomain.com" with actual domain (multiple places)
  - [ ] Update Twitter handle (@shinybae)
  - [ ] Add actual og-image.jpg and twitter-card.jpg files

- [ ] **Update `src/config/seo.ts`**
  - [ ] Set actual domain URL
  - [ ] Add verification codes (Google, Bing, etc.)
  - [ ] Add analytics IDs (GA4, Facebook Pixel, etc.)
  - [ ] Update business address and phone
  - [ ] Add actual social media URLs

### 2. Shopify Setup

- [ ] **Products Added**
  - [ ] All products uploaded to Shopify
  - [ ] Product images uploaded
  - [ ] Prices set correctly
  - [ ] Inventory quantities set

- [ ] **Shopify Settings**
  - [ ] Payment providers configured
  - [ ] Shipping zones and rates set
  - [ ] Tax settings configured
  - [ ] Checkout customization complete
  - [ ] Email notifications templates reviewed

### 3. Content & Media

- [ ] **Create Required Images**
  - [ ] `/public/og-image.jpg` (1200x630px) for Facebook/LinkedIn
  - [ ] `/public/twitter-card.jpg` (1200x675px) for Twitter
  - [ ] `/public/logo.png` for schema markup
  - [ ] Favicon updated (replace `/public/vite.svg`)

- [ ] **Test All Pages**
  - [ ] Home page loads correctly
  - [ ] Shop page displays products
  - [ ] Product detail pages work
  - [ ] Privacy Policy page
  - [ ] Terms & Conditions page
  - [ ] Cart functionality
  - [ ] Checkout redirect to Shopify

---

## 🏗️ Building for Production

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Project
```bash
npm run build
```

This creates a `dist` folder with your production files.

### Step 3: Test the Build Locally
```bash
npm run preview
```

Visit the preview URL and test:
- All pages load
- Images display
- Navigation works
- Add to cart works
- Checkout redirects to Shopify

---

## 🌐 Deployment Options

### Option A: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from your `.env` file:
     ```
     VITE_SHOPIFY_STORE_DOMAIN=https://dzfymv-7p.myshopify.com
     VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN=002313521393af1cbd1de0a61064fcc2
     VITE_SHOPIFY_COUNTRY=US
     VITE_SHOPIFY_LANGUAGE=en
     VITE_USE_SHOPIFY_CHECKOUT=true
     ```
   - Redeploy after adding variables

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS setup instructions

---

### Option B: Netlify

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect to GitHub
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Add Environment Variables**
   - Site Settings → Environment Variables
   - Add all your `.env` variables

4. **Add Redirect Rules**
   - Create `public/_redirects` file:
     ```
     /*    /index.html   200
     ```

---

### Option C: Traditional Hosting (cPanel, etc.)

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload entire `dist` folder contents to `public_html`
   - Make sure `.htaccess` is uploaded
   - Upload `robots.txt` and `sitemap.xml`

3. **Configure Environment**
   - Contact host support to add environment variables
   - Or use a server-side config file (varies by host)

4. **SSL Certificate**
   - Enable SSL/HTTPS in cPanel
   - Force HTTPS (already in .htaccess)

---

## 🔍 Post-Deployment Checklist

### Immediate Tests

- [ ] Visit your live URL
- [ ] Test all navigation links
- [ ] Add product to cart
- [ ] Click "Secure Checkout" - should redirect to Shopify
- [ ] Test on mobile device
- [ ] Check all social media links work
- [ ] Test email links (mailto:)
- [ ] Verify images load properly

### SEO & Performance

- [ ] **Google Search Console**
  - Add your site
  - Submit sitemap: `https://yourdomain.com/sitemap.xml`
  - Verify ownership

- [ ] **Google Analytics**
  - Create GA4 property
  - Add tracking code to `src/config/seo.ts`
  - Verify tracking works

- [ ] **Page Speed Test**
  - Test on [PageSpeed Insights](https://pagespeed.web.dev/)
  - Aim for 90+ score

- [ ] **Mobile Test**
  - Use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Social Media

- [ ] Test Open Graph tags on [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Card on [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Share test link on each platform

### Security

- [ ] SSL certificate active (https://)
- [ ] Security headers working (check with [securityheaders.com](https://securityheaders.com))
- [ ] Test checkout flow is secure
- [ ] Verify Shopify payment processing works

---

## 📊 Monitoring & Maintenance

### Regular Tasks

**Daily:**
- Check Shopify for new orders
- Monitor website uptime
- Respond to customer emails

**Weekly:**
- Review analytics data
- Check for broken links
- Update product inventory

**Monthly:**
- Review site performance
- Update content as needed
- Check for dependency updates

### Analytics to Track

- Visitors & page views
- Conversion rate
- Cart abandonment rate
- Most popular products
- Traffic sources
- Mobile vs desktop usage

---

## 🆘 Troubleshooting

### Issue: Products Not Loading

**Solution:**
- Check environment variables on hosting platform
- Verify Shopify API token is correct
- Check browser console for errors
- Ensure Shopify store is active

### Issue: Checkout Not Working

**Solution:**
- Verify `VITE_USE_SHOPIFY_CHECKOUT=true` in env vars
- Check Shopify store domain is correct
- Test Shopify checkout directly
- Clear browser cache

### Issue: Images Not Loading

**Solution:**
- Check image paths in Shopify
- Verify images are uploaded
- Check browser console for 404 errors
- Use absolute URLs in Shopify

### Issue: 404 Errors on Refresh

**Solution:**
- Ensure `.htaccess` is uploaded (Apache)
- Add `_redirects` file (Netlify)
- Configure redirects in hosting settings

---

## 🔄 Updating Your Site

### For Content Changes

1. Update files in `src/` folder
2. Run `npm run build`
3. Upload new `dist` folder contents
4. Or: Push to GitHub (auto-deploys on Vercel/Netlify)

### For Configuration Changes

1. Update `src/config/site.ts` or `src/config/seo.ts`
2. Rebuild and redeploy
3. Clear CDN cache if applicable

### For Shopify Updates

- Product changes reflect automatically
- No rebuild needed
- Just update products in Shopify admin

---

## 📞 Support Resources

- **Shopify Help:** [help.shopify.com](https://help.shopify.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **React Router:** [reactrouter.com](https://reactrouter.com)

---

## ✅ Launch Checklist

Final check before announcing your site:

- [ ] All links work
- [ ] Contact forms/emails work
- [ ] Checkout process tested end-to-end
- [ ] Site loads fast (< 3 seconds)
- [ ] Mobile responsive on all devices
- [ ] SEO meta tags correct
- [ ] Social media links work
- [ ] Privacy Policy & Terms live
- [ ] Analytics tracking
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Backup plan in place

---

## 🎉 You're Ready to Launch!

Once you've completed this checklist, your ShinyBae store is ready for customers!

**Next Steps:**
1. Announce launch on social media
2. Send email to your list
3. Start marketing campaigns
4. Monitor performance
5. Gather customer feedback

**Good luck! 🚀💄✨**