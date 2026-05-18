import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEO({ 
  title = "The Pass Guys | Manchester Driving School",
  description = "The Pass Guys match Manchester learners with DVSA-approved instructors, usually inside a week. Manual, automatic, intensive courses across Greater Manchester.",
  canonical = "https://thepassguys.co.uk",
  type = "website",
  image = "https://thepassguys.co.uk/og-image.jpg"
}: SEOProps) {
  const siteTitle = title.includes("The Pass Guys") ? title : `${title} | The Pass Guys`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="driving school manchester, driving lessons manchester, learn to drive, automatic driving lessons, manual driving lessons, intensive driving courses, the pass guys" />
      <meta name="author" content="The Pass Guys" />
    </Helmet>
  );
}
