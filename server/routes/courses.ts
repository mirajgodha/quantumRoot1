import { RequestHandler } from "express";
import {
  CoursesResponse,
  Course,
  CourseCategory,
  CreateCourseRequest,
} from "@shared/api";
import { mockCourses } from "../../shared/courseData";

const mockCategories: CourseCategory[] = [
  {
    id: "genai",
    name: "Generative AI",
    description: "AI, Machine Learning, LLMs",
    icon: "🧠",
    courseCount: 3,
  },
  {
    id: "bigdata",
    name: "Big Data",
    description: "Spark, Hadoop, Processing",
    icon: "📊",
    courseCount: 8,
  },
  {
    id: "nosql",
    name: "NoSQL",
    description: "MongoDB, Cassandra, Redis",
    icon: "🗄️",
    courseCount: 5,
  },
  {
    id: "search",
    name: "Search & Analytics",
    description: "Elasticsearch, Kibana",
    icon: "����",
    courseCount: 2,
  },
  {
    id: "dataeng",
    name: "Data Engineering",
    description: "Pipelines, ETL, Architecture",
    icon: "⚙️",
    courseCount: 10,
  },
  {
    id: "cloud",
    name: "Cloud Platforms",
    description: "AWS, Azure, GCP",
    icon: "☁️",
    courseCount: 4,
  },
];

export const handleGetCourses: RequestHandler = (req, res) => {
  const response: CoursesResponse = {
    courses: mockCourses,
    categories: mockCategories,
    total: mockCourses.length,
  };

  res.json(response);
};

export const handleCreateCourse: RequestHandler = (req, res) => {
  try {
    const courseData = req.body as CreateCourseRequest;

    // Generate URL-friendly slug from course title
    const generateSlug = (title: string): string => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple hyphens with single
        .trim(); // Remove leading/trailing whitespace
    };

    const newCourse: Course = {
      id: Date.now().toString(),
      slug: courseData.slug || generateSlug(courseData.title),
      ...courseData,
      bio: "", // Default empty bio
      rating: 0,
      students: 0,
    };

    // Note: In a real app, this would persist to a database
    // For now, we're just returning the created course without modifying the shared data
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: "Invalid course data" });
  }
};

export const handleGetFeaturedCourses: RequestHandler = (req, res) => {
  console.log("[Express] handleGetFeaturedCourses called");
  const featuredCourses = mockCourses.filter((course) => course.featured);
  console.log(`[Express] Found ${featuredCourses.length} featured courses`);
  res.json({ courses: featuredCourses });
};
