/**
 * Custom fetch wrapper to avoid interference from external scripts like FullStory
 * This preserves the original fetch function and provides a clean API call interface
 */

// Store the original fetch function before any external scripts can override it
const originalFetch = window.fetch.bind(window);

interface ApiResponse<T = any> {
  ok: boolean;
  status: number;
  json: () => Promise<T>;
  text: () => Promise<string>;
}

// Custom fetch wrapper that uses the original fetch
export const safeFetch = async (
  url: string,
  options?: RequestInit,
): Promise<ApiResponse> => {
  try {
    // Use the original fetch to avoid any external script interference
    const response = await originalFetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    return {
      ok: response.ok,
      status: response.status,
      json: () => response.json(),
      text: () => response.text(),
    };
  } catch (error) {
    console.error("Fetch error:", error);
    // If original fetch fails, try with a different approach
    throw new Error(
      `Network request failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
};

// API-specific wrapper for enrollment submissions
export const submitEnrollment = async (enrollmentData: any) => {
  try {
    const response = await safeFetch("/api/enrollment", {
      method: "POST",
      body: JSON.stringify(enrollmentData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit enrollment");
    }

    return await response.json();
  } catch (error) {
    console.error("Enrollment submission error:", error);
    throw error;
  }
};

// API-specific wrapper for contact submissions
export const submitContact = async (contactData: any) => {
  try {
    const response = await safeFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit contact form");
    }

    return await response.json();
  } catch (error) {
    console.error("Contact submission error:", error);
    throw error;
  }
};

// API-specific wrapper for enquiry submissions
export const submitEnquiry = async (enquiryData: any) => {
  try {
    const response = await safeFetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(enquiryData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit enquiry");
    }

    return await response.json();
  } catch (error) {
    console.error("Enquiry submission error:", error);
    throw error;
  }
};
