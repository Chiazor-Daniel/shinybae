# 🎯 How to Update Your Site Configuration

All your emails and social media links are now in **ONE PLACE** for easy updates!

## 📍 Location

Open this file: **`src/config/site.ts`**

## 🔧 What You Can Update

### 1️⃣ Contact Emails
```typescript
emails: {
  general: "hello@shinybae.com",      // Main contact email
  privacy: "privacy@shinybae.com",    // Privacy inquiries
  legal: "legal@shinybae.com",        // Legal questions
  returns: "returns@shinybae.com",    // Return requests
  support: "support@shinybae.com",    // Customer support
}
```

**Used in:**
- Footer (Contact section)
- Privacy Policy page
- Terms & Conditions page

---

### 2️⃣ Social Media Links
```typescript
social: {
  instagram: "https://instagram.com/shinybae",
  facebook: "https://facebook.com/shinybae",
  tiktok: "https://tiktok.com/@shinybae",
  youtube: "https://youtube.com/@shinybae",
  twitter: "https://twitter.com/shinybae",
}
```

**Used in:**
- Top bar (above header)
- Footer (social icons)

---

### 3️⃣ Business Information
```typescript
business: {
  name: "ShinyBae",
  tagline: "Handcrafted lip glosses that moisturize, shine, and empower.",
  copyright: "© 2024 ShinyBae. All rights reserved.",
  designer: "Chiazor",
}
```

**Used in:**
- Footer (brand section)
- Footer (copyright)
- Footer (designer credit)

---

### 4️⃣ Shipping Settings
```typescript
shipping: {
  freeShippingThreshold: 50,  // Free shipping over this amount
  currency: "USD",
}
```

**Used in:**
- Footer (shipping info)
- Cart (shipping messages)

---

## 🚀 How to Update

1. Open `src/config/site.ts`
2. Change any value you want
3. Save the file
4. Restart your dev server: `npm run dev`
5. Done! ✅

**Changes automatically apply everywhere on the site!**

---

## 📦 Shopify Configuration

Your Shopify settings are in the `.env` file:

```env
VITE_SHOPIFY_STORE_DOMAIN=https://dzfymv-7p.myshopify.com
VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN=002313521393af1cbd1de0a61064fcc2
VITE_SHOPIFY_COUNTRY=US
VITE_SHOPIFY_LANGUAGE=en
VITE_USE_SHOPIFY_CHECKOUT=true
```

**⚠️ Important:** After changing `.env`, restart your dev server!

---

## 🎨 Need More Changes?

**To change colors/design:** Edit `tailwind.config.js` and component files
**To add new pages:** Add routes in `src/AppWithShopify.tsx`
**To modify products:** They come from Shopify automatically

---

## 🏗️ Building for Production

```bash
npm run build
```

Then deploy the `dist` folder to your hosting platform.

**Remember to add your `.env` variables to your hosting platform!**

---

## 📝 Quick Checklist Before Going Live

- [ ] Update all emails in `src/config/site.ts`
- [ ] Update all social media links in `src/config/site.ts`
- [ ] Add your real Shopify products
- [ ] Test checkout flow
- [ ] Make sure `.env` is configured on your hosting
- [ ] Test on mobile devices
- [ ] Check all pages (Home, Shop, Privacy, Terms)

---

**Need help? Check `SHOPIFY_SETUP.md` for Shopify integration details.**