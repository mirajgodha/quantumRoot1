import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
import { handleDemo } from "./routes/demo";
import {
  handleGetCourses,
  handleCreateCourse,
  handleGetFeaturedCourses,
} from "./routes/courses";
import { handleEnrollmentSubmit } from "./routes/enrollment";
import { handleContactSubmit } from "./routes/contact";
import { handleEnquirySubmit } from "./routes/enquiry";
import { handleNewsletterSubscription } from "./routes/newsletter";
import { createRazorpayOrder, verifyRazorpayPayment } from "./routes/razorpay";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());

  // Body parsing middleware - required for serverless functions
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // Add logging middleware after body parsing
  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) {
      const requestId = Math.random().toString(36).substring(7);
      console.log(`[Express] ${requestId} ${req.method} ${req.path}`);
      // Only log body for non-sensitive endpoints and if body exists
      if (req.body && Object.keys(req.body).length > 0) {
        console.log(`[Express] ${requestId} Body:`, req.body);
      }
    }
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Courses API routes
  app.get("/api/courses", handleGetCourses);
  app.post("/api/courses", handleCreateCourse);
  app.get("/api/courses/featured", handleGetFeaturedCourses);

  // Enrollment API routes
  app.post("/api/enrollment", handleEnrollmentSubmit);

  // Contact API routes
  app.post("/api/contact", handleContactSubmit);

  // Enquiry API routes
  app.post("/api/enquiry", handleEnquirySubmit);

  // Newsletter API routes
  app.post("/api/newsletter", handleNewsletterSubscription);

  // Razorpay payment API routes
  app.post("/api/payment/create-order", createRazorpayOrder);
  app.post("/api/payment/verify", verifyRazorpayPayment);

  return app;
}
