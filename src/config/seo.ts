/**
 * SEO Configuration
 *
 * Meta tags, Open Graph, Twitter Cards, and other SEO settings
 * Update these values to improve your site's search engine visibility
 */

export const SEO_CONFIG = {
  // Default Meta Tags
  title: "ShinyBae - Premium Handcrafted Lip Glosses | Cruelty-Free Cosmetics",
  description:
    "Discover ShinyBae's collection of handcrafted, cruelty-free lip glosses. Moisturizing formulas that shine and empower. Free shipping on orders over $50.",
  keywords: [
    "lip gloss",
    "handcrafted cosmetics",
    "cruelty-free makeup",
    "vegan lip gloss",
    "moisturizing gloss",
    "ShinyBae",
    "glossy lips",
    "beauty products",
    "natural cosmetics",
    "lip care",
  ],

  // Site Information
  site: {
    name: "ShinyBae",
    url: "https://yourdomain.com", // UPDATE THIS: Replace with your actual domain when deployed
    language: "en",
    locale: "en_US",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    siteName: "ShinyBae",
    title: "ShinyBae - Premium Handcrafted Lip Glosses",
    description:
      "Handcrafted lip glosses that moisturize, shine, and empower. Cruelty-free & vegan cosmetics.",
    image: "https://yourdomain.com/og-image.jpg", // UPDATE: Add a 1200x630px image
    imageAlt: "ShinyBae Lip Gloss Collection",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@shinybae", // UPDATE: Your Twitter handle
    creator: "@shinybae",
    title: "ShinyBae - Premium Handcrafted Lip Glosses",
    description:
      "Handcrafted lip glosses that moisturize, shine, and empower. Cruelty-free & vegan.",
    image: "https://yourdomain.com/twitter-card.jpg", // UPDATE: Add a 1200x675px image
  },

  // Business Information (Schema.org)
  business: {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "ShinyBae",
    description:
      "Premium handcrafted lip glosses. Cruelty-free and vegan cosmetics.",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/logo.png",
    image: "https://yourdomain.com/og-image.jpg",
    priceRange: "$$",
    telephone: "+1-555-123-4567", // UPDATE: Your phone number
    email: "hello@shinybae.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Beauty Street", // UPDATE: Your address
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/shinybaegloss?igsh=NWl2Y2Iya3cyb2c4&utm_source=qr",
      "https://www.tiktok.com/@shiny_bae5?_t=ZT-90ICwSwSOOU&_r=1",
    ],
  },

  // Product Schema (for product pages)
  productSchema: {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: "ShinyBae",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ShinyBae",
      },
    },
  },

  // Verification IDs (add these after setting up accounts)
  verification: {
    google: "", // Google Search Console verification code
    bing: "", // Bing Webmaster Tools verification code
    pinterest: "", // Pinterest site verification
    facebook: "", // Facebook domain verification
  },

  // Analytics
  analytics: {
    googleAnalyticsId: "", // GA4 Measurement ID (G-XXXXXXXXXX)
    facebookPixelId: "", // Facebook Pixel ID
    tiktokPixelId: "", // TikTok Pixel ID
  },

  // Page-specific SEO
  pages: {
    home: {
      title: "ShinyBae - Premium Handcrafted Lip Glosses | Cruelty-Free",
      description:
        "Discover our collection of handcrafted, moisturizing lip glosses. Cruelty-free, vegan, and made with love. Free shipping on orders over $50.",
    },
    shop: {
      title: "Shop Lip Glosses | ShinyBae Collection",
      description:
        "Browse our full collection of premium lip glosses. Find your perfect shade with ShinyBae's handcrafted, cruelty-free formulas.",
    },
    about: {
      title: "About ShinyBae | Our Story & Values",
      description:
        "Learn about ShinyBae's mission to create beautiful, cruelty-free cosmetics. Handcrafted with love and commitment to quality.",
    },
    privacy: {
      title: "Privacy Policy | ShinyBae",
      description:
        "Read ShinyBae's privacy policy to understand how we collect, use, and protect your personal information.",
    },
    terms: {
      title: "Terms & Conditions | ShinyBae",
      description:
        "Review ShinyBae's terms and conditions for using our website and purchasing our products.",
    },
  },
} as const;

/**
 * Generate meta tags for a specific page
 */
export const getMetaTags = (page: keyof typeof SEO_CONFIG.pages) => {
  const pageConfig = SEO_CONFIG.pages[page];
  return {
    title: pageConfig.title,
    description: pageConfig.description,
  };
};
