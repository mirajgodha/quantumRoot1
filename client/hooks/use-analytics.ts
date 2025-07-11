import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPageView,
  trackEvent,
  trackCourseEnrollment,
  trackFormSubmission,
  trackButtonClick,
  trackCourseView,
  trackSearch,
  trackEngagement,
  trackScrollDepth,
} from "@/lib/analytics";

// Hook to track page views automatically
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    const url = window.location.origin + location.pathname + location.search;
    trackPageView(url);
  }, [location]);
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    const cleanup = trackScrollDepth();
    return cleanup;
  }, []);
};

// Hook with analytics functions
export const useAnalytics = () => {
  return {
    trackPageView,
    trackEvent,
    trackCourseEnrollment,
    trackFormSubmission,
    trackButtonClick,
    trackCourseView,
    trackSearch,
    trackEngagement,
  };
};

// Hook to track course-specific analytics
export const useCourseAnalytics = (courseId?: string, courseName?: string) => {
  const analytics = useAnalytics();

  useEffect(() => {
    if (courseId && courseName) {
      analytics.trackCourseView(courseName, courseId);
    }
  }, [courseId, courseName, analytics]);

  return analytics;
};

// Hook to track time spent on page
export const useTimeTracking = (pageName: string) => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Date.now() - startTime;
      if (timeSpent > 10000) {
        // Only track if user spent more than 10 seconds
        trackEvent(
          "time_on_page",
          "engagement",
          pageName,
          Math.round(timeSpent / 1000),
        );
      }
    };
  }, [pageName]);
};
