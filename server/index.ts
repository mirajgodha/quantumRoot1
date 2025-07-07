import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleGetCourses,
  handleCreateCourse,
  handleGetFeaturedCourses,
} from "./routes/courses";

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

  return app;
}
