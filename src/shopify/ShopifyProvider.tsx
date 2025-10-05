import React, { createContext, useContext, useEffect, useState } from "react";

interface ShopifyConfig {
  storeDomain: string;
  publicAccessToken?: string;
  country?: string;
  language?: string;
}

interface ShopifyContextType {
  isLoaded: boolean;
  config: ShopifyConfig;
  addToShopifyCart: (productHandle: string, variantId?: string) => void;
  buyNow: (productHandle: string, variantId?: string) => void;
  redirectToCheckout: () => void;
  syncCartAndCheckout: (cartItems: any[]) => void;
}

const ShopifyContext = createContext<ShopifyContextType | null>(null);

interface ShopifyProviderProps {
  children: React.ReactNode;
  config?: ShopifyConfig;
}

export const ShopifyProvider: React.FC<ShopifyProviderProps> = ({
  children,
  config,
}) => {
  // Use environment variables as defaults, allow config override
  const shopifyConfig: ShopifyConfig = {
    storeDomain:
      config?.storeDomain || import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || "",
    publicAccessToken:
      config?.publicAccessToken ||
      import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN,
    country: config?.country || import.meta.env.VITE_SHOPIFY_COUNTRY || "US",
    language: config?.language || import.meta.env.VITE_SHOPIFY_LANGUAGE || "en",
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Shopify Web Components script
    const script = document.createElement("script");
    script.src = "https://cdn.shopify.com/storefront/web-components.js";
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    // Create shopify-store element
    const storeElement = document.createElement("shopify-store");
    storeElement.setAttribute("id", "shopify-store");
    storeElement.setAttribute("store-domain", shopifyConfig.storeDomain);

    if (shopifyConfig.publicAccessToken) {
      storeElement.setAttribute(
        "public-access-token",
        shopifyConfig.publicAccessToken,
      );
    }
    if (shopifyConfig.country) {
      storeElement.setAttribute("country", shopifyConfig.country);
    }
    if (shopifyConfig.language) {
      storeElement.setAttribute("language", shopifyConfig.language);
    }

    document.body.appendChild(storeElement);

    return () => {
      // Cleanup
      document.head.removeChild(script);
      const existingStore = document.getElementById("shopify-store");
      if (existingStore) {
        document.body.removeChild(existingStore);
      }
    };
  }, [shopifyConfig]);

  const addToShopifyCart = (productHandle: string, variantId?: string) => {
    const store = document.getElementById("shopify-store") as any;
    if (store && store.addToCart) {
      // Create a mock event with the product context
      const mockEvent = {
        target: {
          closest: () => ({
            getAttribute: (attr: string) => {
              if (attr === "handle") return productHandle;
              if (attr === "variant-id") return variantId;
              return null;
            },
          }),
        },
      };
      store.addToCart(mockEvent);
    }
  };

  const syncCartAndCheckout = (cartItems: any[]) => {
    // Clear existing Shopify cart and add current items
    const store = document.getElementById("shopify-store") as any;
    if (!store) return;

    // Add each cart item to Shopify cart
    cartItems.forEach((item) => {
      const mockEvent = {
        target: {
          closest: () => ({
            getAttribute: (attr: string) => {
              if (attr === "handle") return item.product.id;
              if (attr === "variant-id") return item.shade?.id || "default";
              return null;
            },
          }),
        },
      };

      // Add each quantity individually
      for (let i = 0; i < item.quantity; i++) {
        if (store.addToCart) {
          store.addToCart(mockEvent);
        }
      }
    });

    // Trigger checkout
    setTimeout(() => {
      if (store.checkout) {
        store.checkout();
      }
    }, 500);
  };

  const buyNow = (productHandle: string, variantId?: string) => {
    const store = document.getElementById("shopify-store") as any;
    if (store && store.buyNow) {
      const mockEvent = {
        target: {
          closest: () => ({
            getAttribute: (attr: string) => {
              if (attr === "handle") return productHandle;
              if (attr === "variant-id") return variantId;
              return null;
            },
          }),
        },
      };
      store.buyNow(mockEvent);
    }
  };

  const redirectToCheckout = () => {
    const store = document.getElementById("shopify-store") as any;
    if (store && store.checkout) {
      store.checkout();
    }
  };

  const contextValue: ShopifyContextType = {
    isLoaded,
    config: shopifyConfig,
    addToShopifyCart,
    buyNow,
    redirectToCheckout,
    syncCartAndCheckout,
  };

  return (
    <ShopifyContext.Provider value={contextValue}>
      {children}
    </ShopifyContext.Provider>
  );
};

export const useShopify = (): ShopifyContextType => {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error("useShopify must be used within a ShopifyProvider");
  }
  return context;
};

// Helper component for displaying Shopify data
interface ShopifyDataProps {
  productHandle: string;
  query: string;
  children: (data: any) => React.ReactNode;
  fallback?: React.ReactNode;
}

export const ShopifyData: React.FC<ShopifyDataProps> = ({
  productHandle,
  query,
  children,
  fallback = null,
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { isLoaded } = useShopify();

  useEffect(() => {
    if (!isLoaded) return;

    // Create a hidden context to fetch data
    const contextElement = document.createElement("shopify-context");
    contextElement.setAttribute("type", "product");
    contextElement.setAttribute("handle", productHandle);
    contextElement.style.display = "none";

    const template = document.createElement("template");
    const dataElement = document.createElement("shopify-data");
    dataElement.setAttribute("query", query);

    template.appendChild(dataElement);
    contextElement.appendChild(template);
    document.body.appendChild(contextElement);

    // Listen for data changes
    const checkData = () => {
      const textContent = dataElement.textContent;
      if (textContent && textContent.trim()) {
        setData(textContent.trim());
        setLoading(false);
      } else {
        setTimeout(checkData, 100);
      }
    };

    setTimeout(checkData, 100);

    return () => {
      if (document.body.contains(contextElement)) {
        document.body.removeChild(contextElement);
      }
    };
  }, [isLoaded, productHandle, query]);

  if (loading) return <>{fallback}</>;

  return <>{children(data)}</>;
};

// Helper hook for product data
export const useShopifyProduct = (productHandle: string) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { isLoaded } = useShopify();

  useEffect(() => {
    if (!isLoaded || !productHandle) return;

    // This would need to be implemented with proper GraphQL queries
    // For now, it's a placeholder structure
    const mockProduct = {
      handle: productHandle,
      title: `Product ${productHandle}`,
      price: "$7.99",
      image: `/products/${productHandle}.jpg`,
      description: `Description for ${productHandle}`,
      available: true,
    };

    setTimeout(() => {
      setProduct(mockProduct);
      setLoading(false);
    }, 500);
  }, [isLoaded, productHandle]);

  return { product, loading };
};
