import express from "express";
import cors from "cors";
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
      console.log(`[Express] ${req.method} ${req.path}`);
      console.log(`[Express] Body:`, req.body);
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

  return app;
}
