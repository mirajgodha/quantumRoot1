export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  course?: {
    name: string;
    description: string;
    provider: string;
    duration: string;
    price: number;
    currency: string;
    category: string;
  };
}

export const DEFAULT_SEO: SEOConfig = {
  title: "QuantumRoot | Hands-On AI, Big Data & Cloud Training Programs",
  description:
    "QuantumRoot offers career-focused training in AI, ML, Cloud & Big Data—featuring real-world projects, expert-led sessions, and modern tech stacks.",
  keywords:
    "AI training, Machine Learning courses, Big Data certification, Cloud computing, Programming bootcamp, Data Science, Python courses, Tech training",
  image: "https://quantumroot.in/images/quantum-root-og-image.jpg",
  url: "https://quantumroot.in",
  type: "website",
};

export const generatePageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return DEFAULT_SEO.title;
  return `${pageTitle} | QuantumRoot`;
};

export const generateMetaDescription = (description?: string): string => {
  return description || DEFAULT_SEO.description;
};

export const generateKeywords = (pageKeywords?: string[]): string => {
  const baseKeywords = [
    "QuantumRoot",
    "AI training",
    "Machine Learning",
    "Big Data",
    "Cloud computing",
    "Programming",
    "Data Science",
    "Tech courses",
  ];

  if (pageKeywords) {
    return [...pageKeywords, ...baseKeywords].join(", ");
  }

  return DEFAULT_SEO.keywords || baseKeywords.join(", ");
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
};

export const generateCourseStructuredData = (course: SEOConfig["course"]) => {
  if (!course) return null;

  return generateStructuredData("Course", {
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider,
      url: DEFAULT_SEO.url,
    },
    timeRequired: course.duration,
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: course.currency,
      availability: "https://schema.org/InStock",
    },
    courseMode: "online",
    educationalLevel: "professional development",
    about: course.category,
  });
};

export const generateArticleStructuredData = (
  article: SEOConfig["article"],
  title: string,
  description: string,
) => {
  if (!article) return null;

  return generateStructuredData("Article", {
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: article.author || "QuantumRoot Team",
    },
    publisher: {
      "@type": "Organization",
      name: "QuantumRoot",
      url: DEFAULT_SEO.url,
    },
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    keywords: article.tags?.join(", "),
  });
};

export const generateOrganizationStructuredData = () => {
  return generateStructuredData("Organization", {
    name: "QuantumRoot",
    alternateName: "Quantum Root",
    url: DEFAULT_SEO.url,
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800",
    description: DEFAULT_SEO.description,
    slogan: "Grow from the root, scale to quantum",
    foundingDate: "2020",
    industry: "Education Technology",
    publishingPrinciples: DEFAULT_SEO.url + "/about",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9650219962",
      contactType: "customer service",
      email: "info@quantumroot.in",
    },
    sameAs: [
      "https://www.linkedin.com/company/quantumroot",
      "https://www.facebook.com/quantumroot",
      "https://twitter.com/quantumroot",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411036",
      addressCountry: "IN"
    }
  });
};
