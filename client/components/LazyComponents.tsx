import React, { Suspense } from "react";

// Lazy load heavy components
const CourseCarousel = React.lazy(() =>
  import("@/components/ui/course-carousel").then((module) => ({
    default: module.CourseCarousel,
  })),
);

const InfiniteScrollTicker = React.lazy(() =>
  import("@/components/ui/infinite-scroll-ticker").then((module) => ({
    default: module.InfiniteScrollTicker,
  })),
);

const CorporateClientsTicker = React.lazy(() =>
  import("@/components/ui/corporate-clients-ticker").then((module) => ({
    default: module.CorporateClientsTicker,
  })),
);

// Loading fallback component
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div>
  </div>
);

// Wrapper components with Suspense
export const LazyCourseCarousel = (props: any) => (
  <Suspense fallback={<ComponentLoader />}>
    <CourseCarousel {...props} />
  </Suspense>
);

export const LazyInfiniteScrollTicker = (props: any) => (
  <Suspense fallback={<ComponentLoader />}>
    <InfiniteScrollTicker {...props} />
  </Suspense>
);

export const LazyCorporateClientsTicker = (props: any) => (
  <Suspense fallback={<ComponentLoader />}>
    <CorporateClientsTicker {...props} />
  </Suspense>
);

// Image component with lazy loading and proper alt attributes
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  onLoad,
  onError,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onLoad={onLoad}
      onError={onError}
      decoding="async"
    />
  );
};
