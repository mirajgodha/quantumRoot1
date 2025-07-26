import { Helmet } from "react-helmet-async";
import {
  SEOConfig,
  DEFAULT_SEO,
  generatePageTitle,
  generateMetaDescription,
  generateKeywords,
} from "@/lib/seo";

interface SEOProps {
  config?: Partial<SEOConfig>;
  structuredData?: string;
}

export default function SEO({ config = {}, structuredData }: SEOProps) {
  const seoConfig = { ...DEFAULT_SEO, ...config };
  const title = generatePageTitle(config.title);
  const description = generateMetaDescription(config.description);
  const keywords = generateKeywords(
    config.keywords ? config.keywords.split(", ") : undefined,
  );

  // Ensure canonical URL is properly set
  const canonicalUrl = config.url || DEFAULT_SEO.url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="QuantumRoot" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={seoConfig.type || "website"} />
      <meta property="og:url" content={seoConfig.url || DEFAULT_SEO.url} />
      <meta
        property="og:image"
        content={seoConfig.image || DEFAULT_SEO.image}
      />
      <meta property="og:site_name" content="QuantumRoot" />
      <meta property="og:locale" content="en_US" />

      {/* Publisher Information */}
      <meta name="publisher" content="QuantumRoot" />
      <meta name="application-name" content="QuantumRoot" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="QuantumRoot" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={seoConfig.image || DEFAULT_SEO.image}
      />
      <meta name="twitter:site" content="@quantumroot" />
      <meta name="twitter:creator" content="@quantumroot" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#7c3aed" />

      {/* Article specific meta tags */}
      {seoConfig.article && (
        <>
          <meta property="og:type" content="article" />
          <meta
            property="article:published_time"
            content={seoConfig.article.publishedTime}
          />
          <meta
            property="article:modified_time"
            content={seoConfig.article.modifiedTime}
          />
          <meta property="article:author" content={seoConfig.article.author} />
          {seoConfig.article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

            {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Additional meta tags for SEO */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Prevent duplicate content issues */}
      <meta property="og:url" content={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{structuredData}</script>
      )}
    </Helmet>
  );
}
