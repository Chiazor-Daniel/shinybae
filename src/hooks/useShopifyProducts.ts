import { useState, useEffect } from "react";
import { Product } from "../types";

interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage?: {
    url: string;
  };
  images: {
    edges: Array<{
      node: {
        url: string;
      };
    }>;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  tags: string[];
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
        };
      };
    }>;
  };
}

interface UseShopifyProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const convertShopifyProduct = (shopifyProduct: ShopifyProduct): Product => {
  const price = parseFloat(shopifyProduct.priceRange.minVariantPrice.amount);

  // Extract numeric variant ID from GraphQL ID (e.g., "gid://shopify/ProductVariant/43234567890")
  const firstVariant = shopifyProduct.variants.edges[0]?.node;
  const variantId = firstVariant?.id.split("/").pop() || shopifyProduct.handle;

  // Get all product images
  const allImages =
    shopifyProduct.images?.edges.map((edge) => edge.node.url) || [];
  const mainImage =
    shopifyProduct.featuredImage?.url || allImages[0] || "/placeholder.jpg";

  return {
    id: variantId, // Use actual Shopify variant ID for checkout
    name: shopifyProduct.title,
    price: price,
    image: mainImage,
    images: allImages.length > 0 ? allImages : [mainImage],
    description: shopifyProduct.description,
    ingredients: [],
    shades: [],
    category: "gloss",
    isBestSeller:
      shopifyProduct.tags.includes("bestseller") ||
      shopifyProduct.tags.includes("featured") ||
      true,
    isNew: shopifyProduct.tags.includes("new"),
    stock: 50,
  };
};

export const useShopifyProducts = (
  collection?: string,
): UseShopifyProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const storeDomain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
  const accessToken = import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN;

  const fetchProducts = async () => {
    if (!storeDomain) {
      setError("Shopify store domain not configured");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const query = `
        query getProducts($first: Int!) {
          products(first: $first) {
            nodes {
              id
              handle
              title
              description
              featuredImage {
                url
              }
              images(first: 10) {
                edges {
                  node {
                    url
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              tags
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const variables = {
        first: 25,
      };

      const response = await fetch(`${storeDomain}/api/2024-01/graphql.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken && {
            "X-Shopify-Storefront-Access-Token": accessToken,
          }),
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const shopifyProducts = data.data.products?.nodes || [];

      const convertedProducts = shopifyProducts.map(convertShopifyProduct);
      setProducts(convertedProducts);
    } catch (err) {
      console.error("Error fetching Shopify products:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [storeDomain, accessToken, collection]);

  const refetch = () => {
    fetchProducts();
  };

  return {
    products,
    loading,
    error,
    refetch,
  };
};

export default useShopifyProducts;
