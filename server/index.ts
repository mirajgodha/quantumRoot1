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

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());

  // Add logging middleware before body parsing
  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) {
      console.log(`[Express] ${req.method} ${req.path}`);
    }
    next();
  });

  // Middleware to handle body parsing conflicts with Vite
  app.use((req, res, next) => {
    // Check if body is already parsed (by Vite or other middleware)
    // This handles cases where body might be undefined, null, or an empty object
    if (req.body !== undefined && req.body !== null) {
      if (req.path.startsWith("/api/")) {
        console.log(
          `[Express] Body already parsed:`,
          typeof req.body,
          Object.keys(req.body || {}),
        );
      }
      return next();
    }

    if (req.path.startsWith("/api/")) {
      console.log(`[Express] Parsing body for ${req.method} ${req.path}`);
    }

    // Parse the body with Express
    express.json({ limit: "10mb" })(req, res, (err) => {
      if (err) {
        console.error(`[Express] JSON parsing error:`, err);
        return next(err);
      }
      express.urlencoded({ extended: true, limit: "10mb" })(req, res, next);
    });
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

  return app;
}
