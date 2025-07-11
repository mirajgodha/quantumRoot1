// Google Analytics utility functions
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = "GA_MEASUREMENT_ID"; // Replace with your actual GA4 Measurement ID

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track course enrollment
export const trackCourseEnrollment = (
  courseName: string,
  coursePrice: number,
) => {
  trackEvent("course_enrollment", "engagement", courseName, coursePrice);
};

// Track form submissions
export const trackFormSubmission = (
  formType: "contact" | "enquiry" | "enrollment",
) => {
  trackEvent("form_submission", "engagement", formType);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, section: string) => {
  trackEvent("button_click", "interaction", `${section}_${buttonName}`);
};

// Track course page views
export const trackCourseView = (courseName: string, courseId: string) => {
  trackEvent("course_view", "content", courseName);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: `Course: ${courseName}`,
      page_location: window.location.href,
      content_group1: "Course Pages",
      custom_parameter_course_id: courseId,
    });
  }
};

// Track search events
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent("search", "engagement", searchTerm, resultsCount);
};

// Track user engagement
export const trackEngagement = (engagementType: string, details?: string) => {
  trackEvent(engagementType, "user_engagement", details);
};

// Initialize Google Analytics (call this on app load)
export const initializeAnalytics = () => {
  if (typeof window !== "undefined" && window.gtag) {
    // Set user properties
    window.gtag("config", GA_MEASUREMENT_ID, {
      custom_map: {
        dimension1: "user_type",
      },
    });

    // Track initial page load
    trackPageView(window.location.href, document.title);
  }
};

// Track scroll depth
export const trackScrollDepth = () => {
  if (typeof window === "undefined") return;

  let scrollDepth = 0;
  const trackScroll = () => {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = Math.round(
      (scrollTop / (docHeight - winHeight)) * 100,
    );

    // Track at 25%, 50%, 75%, and 100% scroll
    if (scrollPercent >= 25 && scrollDepth < 25) {
      scrollDepth = 25;
      trackEvent("scroll_depth", "engagement", "25%", 25);
    } else if (scrollPercent >= 50 && scrollDepth < 50) {
      scrollDepth = 50;
      trackEvent("scroll_depth", "engagement", "50%", 50);
    } else if (scrollPercent >= 75 && scrollDepth < 75) {
      scrollDepth = 75;
      trackEvent("scroll_depth", "engagement", "75%", 75);
    } else if (scrollPercent >= 100 && scrollDepth < 100) {
      scrollDepth = 100;
      trackEvent("scroll_depth", "engagement", "100%", 100);
    }
  };

  window.addEventListener("scroll", trackScroll);
  return () => window.removeEventListener("scroll", trackScroll);
};
