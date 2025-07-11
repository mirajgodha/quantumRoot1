# Google Analytics Setup Guide

This website is now configured with Google Analytics 4 (GA4) tracking. Follow these steps to complete the setup:

## 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Set up a GA4 property for your website
4. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

## 2. Update the Measurement ID

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics Measurement ID in these files:

### File 1: `index.html`

```html
<!-- Line 9: Replace GA_MEASUREMENT_ID with your actual ID -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_ACTUAL_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "YOUR_ACTUAL_ID", {
    page_title: "QuantumRoot",
    page_location: window.location.href,
    send_page_view: true,
  });
</script>
```

### File 2: `client/lib/analytics.ts`

```typescript
// Line 8: Replace with your actual Measurement ID
export const GA_MEASUREMENT_ID = "YOUR_ACTUAL_ID";
```

## 3. What's Already Tracked

The following events are automatically tracked:

### Page Views

- All page navigation (automatic)
- Time spent on each page
- Scroll depth (25%, 50%, 75%, 100%)

### Form Submissions

- Contact form submissions
- Enquiry form submissions
- Course enrollment submissions

### User Interactions

- Course view events
- Search events
- Button clicks (can be extended)

### Course-Specific Events

- Course page views
- Course enrollments
- Course enquiries

## 4. Custom Event Tracking

You can add custom event tracking using the provided analytics functions:

```typescript
import { useAnalytics } from "@/hooks/use-analytics";

const analytics = useAnalytics();

// Track custom events
analytics.trackEvent("button_click", "interaction", "download_brochure");
analytics.trackCourseEnrollment("Course Name", 29999);
analytics.trackFormSubmission("contact");
```

## 5. Available Analytics Hooks

### `usePageTracking()`

Automatically tracks page views on route changes

### `useScrollTracking()`

Tracks scroll depth on the current page

### `useTimeTracking(pageName)`

Tracks time spent on a specific page

### `useCourseAnalytics(courseId, courseName)`

Specifically for course pages to track course interactions

## 6. Verify Installation

1. Deploy your website with the updated Measurement ID
2. Go to Google Analytics Real-time reports
3. Visit your website and verify that page views appear in real-time
4. Test form submissions and verify events appear

## 7. Enhanced Tracking (Optional)

For enhanced tracking, you can add:

### E-commerce Tracking

```typescript
// Track purchases
gtag("event", "purchase", {
  transaction_id: "12345",
  value: 29999,
  currency: "INR",
  items: [
    {
      item_id: "course_1",
      item_name: "Generative AI Course",
      category: "Technology Training",
      quantity: 1,
      price: 29999,
    },
  ],
});
```

### User Properties

```typescript
// Set user properties
gtag("config", "YOUR_MEASUREMENT_ID", {
  user_properties: {
    user_type: "student",
  },
});
```

## 8. Privacy Considerations

- The current setup respects user privacy
- Consider adding a cookie consent banner if required by your jurisdiction
- Review and update your Privacy Policy to mention Google Analytics usage

## 9. Testing in Development

In development mode, analytics events will be logged to the console. The actual Google Analytics tracking only works with a valid Measurement ID in production.

## Files Modified for Analytics

- `index.html` - Google Analytics script
- `client/lib/analytics.ts` - Analytics utility functions
- `client/hooks/use-analytics.ts` - React hooks for analytics
- `client/App.tsx` - App-wide analytics initialization
- `client/pages/Index.tsx` - Homepage tracking implementation

## Support

If you need help setting up Google Analytics, refer to the [Google Analytics Help Center](https://support.google.com/analytics/) or contact your development team.
