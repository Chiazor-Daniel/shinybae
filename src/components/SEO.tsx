import React from "react";
import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "../config/seo";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  type = "website",
  keywords,
}) => {
  // Use provided values or fallback to defaults
  const seoTitle = title || SEO_CONFIG.title;
  const seoDescription = description || SEO_CONFIG.description;
  const seoImage = image || SEO_CONFIG.openGraph.image;
  const seoUrl = url || SEO_CONFIG.site.url;
  const seoKeywords = keywords || SEO_CONFIG.keywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords.join(", ")} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={SEO_CONFIG.openGraph.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_CONFIG.twitter.card} />
      <meta name="twitter:site" content={SEO_CONFIG.twitter.site} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitter.creator} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
