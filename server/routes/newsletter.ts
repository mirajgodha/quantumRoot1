import { RequestHandler } from "express";
import { NewsletterRequest, NewsletterResponse } from "@shared/api";

export const handleNewsletterSubscription: RequestHandler = (req, res) => {
  try {
    const { email }: NewsletterRequest = req.body;

    // Validate email
    if (!email) {
      const response: NewsletterResponse = {
        success: false,
        message: "Email is required",
      };
      return res.status(400).json(response);
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const response: NewsletterResponse = {
        success: false,
        message: "Please enter a valid email address",
      };
      return res.status(400).json(response);
    }

    // TODO: In a real application, you would:
    // 1. Save the email to a database
    // 2. Send a confirmation email
    // 3. Add to your email marketing service (e.g., Mailchimp, SendGrid)

    console.log(`[Newsletter] New subscription: ${email}`);

    const response: NewsletterResponse = {
      success: true,
      message: "Successfully subscribed to our newsletter!",
    };

    res.json(response);
  } catch (error) {
    console.error("[Newsletter] Error:", error);

    const response: NewsletterResponse = {
      success: false,
      message: "Something went wrong. Please try again.",
    };

    res.status(500).json(response);
  }
};
