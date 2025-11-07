/**
 * Site Configuration
 *
 * Update all your contact emails and social media links in one place!
 * These values are used throughout the entire site.
 */

export const SITE_CONFIG = {
  // Contact Emails
  emails: {
    general: "sales@shinybae.com",
    privacy: "sales@shinybae.com",
    legal: "sales@shinybae.com",
    returns: "sales@shinybae.com",
    support: "orolabisola@gmail.com",
  },

  // Social Media Links
  social: {
    instagram:
      "https://www.instagram.com/shinybaegloss?igsh=NWl2Y2Iya3cyb2c4&utm_source=qr",
    facebook: "#", // Not active yet
    tiktok: "https://www.tiktok.com/@shiny_bae5?_t=ZT-90ICwSwSOOU&_r=1",
    youtube: "#", // Not active yet
    twitter: "#", // Not active yet
  },

  // Business Info
  business: {
    name: "ShinyBae",
    tagline: "Handcrafted lip glosses that moisturize, shine, and empower.",
    copyright: "© 2024 ShinyBae. All rights reserved.",
    designer: "Chiazor",
    // Physical Address (required for legal compliance and returns)
    address: {
      street: "123 Beauty Lane", // TODO: Update with actual address
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "United States",
    },
  },

  // Shipping Info
  shipping: {
    freeShippingThreshold: 50,
    currency: "USD",
  },
} as const;
