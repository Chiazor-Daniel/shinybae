# 🛍️ ShinyBae + Shopify Integration Setup Guide

This guide will help you integrate your beautiful ShinyBae app with Shopify's real commerce capabilities in just a few steps!

## 📋 Prerequisites

- A Shopify store (free 14-day trial available)
- Basic knowledge of environment variables
- Your ShinyBae app running locally

## 🚀 Step-by-Step Setup

### Step 1: Create Your Shopify Store

1. **Sign up for Shopify**: Go to [shopify.com](https://www.shopify.com) and start your free trial
2. **Choose a store name**: Something like `shinybae-cosmetics` (this becomes your domain)
3. **Complete basic setup**: Add your business details

### Step 2: Install Headless Channel

1. **Go to Shopify App Store**: In your admin, click "Apps"
2. **Search for "Headless"**: Install the official Shopify Headless app (it's free)
3. **Open the Headless app**: Click on it from your Apps list

### Step 3: Generate Public Access Token

1. **In Headless app**: Click "Create storefront"
2. **Name your storefront**: e.g., "ShinyBae Main Site"
3. **Configure permissions**:
   - ✅ Read products
   - ✅ Read collections  
   - ✅ Read customer tags
   - ✅ Read inventory
4. **Copy the public access token**: You'll need this for your `.env` file

### Step 4: Set Up Environment Variables

1. **Copy the example file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** with your actual values:
   ```env
   # Your Shopify store domain (replace 'your-store' with your actual store name)
   VITE_SHOPIFY_STORE_DOMAIN=https://shinybae-cosmetics.myshopify.com
   
   # Paste the public access token you copied from Step 3
   VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   
   # Your store's primary market (optional)
   VITE_SHOPIFY_COUNTRY=US
   VITE_SHOPIFY_LANGUAGE=en
   
   # Enable Shopify checkout by default
   VITE_USE_SHOPIFY_CHECKOUT=true
   ```

### Step 5: Add Your Products to Shopify

1. **Go to Products** in your Shopify admin
2. **Add each ShinyBae product**:
   - Product title: e.g., "ShinyBae - Classic"
   - Price: $7.15
   - Images: Upload your product images
   - Handle: Make note of this (e.g., "shinybae-classic")
   - Inventory: Set stock levels

3. **Create Collections**:
   - "Featured Products" for homepage
   - "All Products" for shop page
   - "Best Sellers" for marketing

### Step 6: Test Your Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Open your app**: The toggle in the top-right shows Shopify status
   - ✅ "Shopify Loaded" = Everything works!
   - ⏳ "Loading Shopify..." = Check your `.env` file

3. **Test the checkout flow**:
   - Add items to cart
   - Click "Secure Checkout"
   - Should redirect to: `your-store.myshopify.com/checkout`

## 🎯 Integration Modes

Your app now supports **two modes** that you can switch between:

### Mode 1: Hybrid (Recommended for testing)
- ✅ Keep your beautiful UI
- ✅ Use your current product data
- ✅ Shopify handles checkout only
- Perfect for: Testing and gradual migration

### Mode 2: Full Shopify (Future enhancement)
- ✅ Live product data from Shopify
- ✅ Real inventory counts
- ✅ Customer accounts
- ✅ Order management

## 🔧 Customization Options

### Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_SHOPIFY_STORE_DOMAIN` | ✅ Yes | Your store URL | `https://mystore.myshopify.com` |
| `VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN` | ⚠️ Optional* | API access token | `shpat_xxxxx...` |
| `VITE_SHOPIFY_COUNTRY` | ❌ No | Market country | `US`, `CA`, `UK` |
| `VITE_SHOPIFY_LANGUAGE` | ❌ No | Market language | `en`, `fr`, `es` |
| `VITE_USE_SHOPIFY_CHECKOUT` | ❌ No | Enable Shopify checkout | `true`, `false` |

*Required for inventory counts and metafields

### Toggle Between Modes

In development, you can switch modes using the toggle in the top-right corner:
- **Checked**: Uses Shopify checkout (recommended)
- **Unchecked**: Uses your original checkout flow

## 🛠️ Development Workflow

### Running the App

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### File Structure

```
src/
├── shopify/
│   └── ShopifyProvider.tsx    # Shopify integration logic
├── components/
│   └── EnhancedCart.tsx       # Cart with Shopify support
└── AppWithShopify.tsx         # Main app with Shopify
```

## 🚨 Troubleshooting

### Common Issues

**"Shopify not loading"**
- ✅ Check `.env` file exists and has correct values
- ✅ Restart dev server after changing `.env`
- ✅ Check browser console for errors

**"Store domain invalid"**
- ✅ Use full URL: `https://your-store.myshopify.com`
- ✅ Don't use custom domain, use the `.myshopify.com` URL

**"Checkout not working"**
- ✅ Make sure products exist in Shopify
- ✅ Check product handles match between your app and Shopify
- ✅ Verify public access token has correct permissions

### Debug Mode

Add this to your `.env` for extra logging:
```env
VITE_DEVELOPMENT_MODE=true
```

## 🎨 Keeping Your Design

**Your beautiful ShinyBae design stays exactly the same!** 

The Shopify integration:
- ✅ Keeps all your custom CSS and animations
- ✅ Maintains your React components
- ✅ Preserves your user experience
- ✅ Only changes the checkout flow (as intended)

## 🚀 Going Live

### Production Checklist

1. **Remove development toggle** from `AppWithShopify.tsx`
2. **Set up production environment variables** on your hosting platform
3. **Configure Shopify checkout settings**:
   - Return URL: `https://yourdomain.com/confirmation`
   - Branding: Match your ShinyBae theme
4. **Test payment processing** with Shopify's test mode
5. **Set up SSL certificate** (required for checkout redirects)

### Deployment

Your app works with any hosting platform:
- **Vercel**: Add env vars in dashboard
- **Netlify**: Add env vars in site settings  
- **GitHub Pages**: Use GitHub Secrets
- **Your own server**: Set environment variables

## 💡 Next Steps

Once your basic integration works:

1. **Replace static products** with live Shopify data
2. **Add customer accounts** and login
3. **Implement wishlist** with Shopify metafields
4. **Add inventory warnings** ("Only 3 left!")
5. **Set up analytics** and conversion tracking

## 🆘 Support

- **Shopify Docs**: [shopify.dev/docs/api/storefront-web-components](https://shopify.dev/docs/api/storefront-web-components)
- **Web Components Playground**: [webcomponents.shopify.dev/playground](https://webcomponents.shopify.dev/playground)
- **Community**: Shopify Partners Slack

---

🎉 **You're ready to go!** Your beautiful ShinyBae app now has real commerce superpowers while keeping everything you love about the design.