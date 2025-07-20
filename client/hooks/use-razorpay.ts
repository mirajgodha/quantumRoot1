import { useState } from "react";
import {
  CreateRazorpayOrderRequest,
  CreateRazorpayOrderResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
} from "@shared/api";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentOptions {
  courseId: string;
  courseName: string;
  amount: number;
  userDetails: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess: (message: string) => void;
  onError: (error: string) => void;
}

export const useRazorpay = () => {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createOrder = async (
    orderData: CreateRazorpayOrderRequest,
  ): Promise<CreateRazorpayOrderResponse> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Clone the response to avoid body stream consumption issues
      const responseClone = response.clone();

      if (!response.ok) {
        // Try to get error text, but fall back gracefully
        let errorText = `HTTP ${response.status} error`;
        try {
          const text = await responseClone.text();
          if (text) {
            errorText = `HTTP ${response.status}: ${text}`;
          }
        } catch (e) {
          // Ignore errors reading response body
          console.warn("Could not read error response body");
        }
        throw new Error(errorText);
      }

      return response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timeout - please try again");
      }
      throw error;
    }
  };

  const verifyPayment = async (
    paymentData: VerifyPaymentRequest,
  ): Promise<VerifyPaymentResponse> => {
    const response = await fetch("/api/payment/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    // Clone the response to avoid body stream consumption issues
    const responseClone = response.clone();

    if (!response.ok) {
      // Try to get error text, but fall back gracefully
      let errorText = `HTTP ${response.status} error`;
      try {
        const text = await responseClone.text();
        if (text) {
          errorText = `HTTP ${response.status}: ${text}`;
        }
      } catch (e) {
        // Ignore errors reading response body
        console.warn("Could not read error response body");
      }
      throw new Error(errorText);
    }

    return response.json();
  };

  const initiatePayment = async (options: PaymentOptions) => {
    try {
      if (loading) {
        console.log("Payment already in progress, ignoring duplicate request");
        return;
      }

      setLoading(true);

      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        options.onError("Failed to load payment gateway. Please try again.");
        return;
      }

      // Create order on server
      const orderResponse = await createOrder({
        courseId: options.courseId,
        courseName: options.courseName,
        amount: options.amount,
        userEmail: options.userDetails.email,
        userName: options.userDetails.name,
        userPhone: options.userDetails.phone,
      });

      if (!orderResponse.success || !orderResponse.orderId) {
        options.onError(
          orderResponse.message || "Failed to create payment order",
        );
        return;
      }

      // Configure Razorpay options
      const razorpayOptions = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "", // You'll need to set this
        amount: orderResponse.amount,
        currency: orderResponse.currency,
        name: "QuantumRoot Learning",
        description: `Payment for ${options.courseName}`,
        order_id: orderResponse.orderId,
        prefill: {
          name: options.userDetails.name,
          email: options.userDetails.email,
          contact: options.userDetails.phone,
        },
        theme: {
          color: "#8b5cf6", // brand primary color
        },
        handler: async (response: any) => {
          try {
            // Verify payment on server
            const verificationResponse = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              courseId: options.courseId,
              userDetails: options.userDetails,
            });

            if (verificationResponse.success) {
              options.onSuccess(
                verificationResponse.message ||
                  "Payment successful! You have been enrolled.",
              );
            } else {
              options.onError(
                verificationResponse.message || "Payment verification failed",
              );
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            options.onError(
              "Payment verification failed. Please contact support.",
            );
          }
        },
        modal: {
          ondismiss: () => {
            console.log("Payment modal dismissed");
          },
        },
      };

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(razorpayOptions);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      options.onError("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    initiatePayment,
    loading,
  };
};
