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
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

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
