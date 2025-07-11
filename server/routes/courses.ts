import { RequestHandler } from "express";
import {
  CoursesResponse,
  Course,
  CourseCategory,
  CreateCourseRequest,
} from "@shared/api";

// Mock data - in a real app this would come from a database
const mockCourses: Course[] = [
  {
    id: "1",
    title: "Generative AI & Large Language Models",
    description:
      "Master the latest in AI technology with hands-on experience in GPT, ChatGPT, and building AI applications.",
    category: "Generative AI",
    duration: "8 weeks",
    difficulty: "Intermediate",
    price: 299,
    tags: ["OpenAI", "LangChain", "Python", "Neural Networks"],
    instructor: "Dr. John Doe",
    rating: 4.9,
    students: 2847,
    featured: true,
  },
  {
    id: "2",
    title: "Apache Spark for Big Data Processing",
    description:
      "Learn distributed computing and big data processing with Apache Spark, PySpark, and real-world projects.",
    category: "Big Data",
    duration: "6 weeks",
    difficulty: "Advanced",
    price: 399,
    tags: ["Spark", "PySpark", "Scala", "Hadoop"],
    instructor: "Mark Rodriguez",
    rating: 4.8,
    students: 1923,
    featured: true,
  },
  {
    id: "3",
    title: "MongoDB & NoSQL Database Design",
    description:
      "Master NoSQL databases with MongoDB, data modeling, indexing, and scaling for modern applications.",
    category: "NoSQL",
    duration: "4 weeks",
    difficulty: "Beginner",
    price: 199,
    tags: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
    instructor: "Jennifer Park",
    rating: 4.7,
    students: 3421,
    featured: true,
  },
];

const mockCategories: CourseCategory[] = [
  {
    id: "genai",
    name: "Generative AI",
    description: "AI, Machine Learning, LLMs",
    icon: "🧠",
    courseCount: 12,
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
    courseCount: 15,
  },
  {
    id: "search",
    name: "Search & Analytics",
    description: "Elasticsearch, Kibana",
    icon: "🔍",
    courseCount: 6,
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
    courseCount: 14,
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

    const newCourse: Course = {
      id: Date.now().toString(),
      ...courseData,
      rating: 0,
      students: 0,
    };

    mockCourses.push(newCourse);

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: "Invalid course data" });
  }
};

export const handleGetFeaturedCourses: RequestHandler = (req, res) => {
  const featuredCourses = mockCourses.filter((course) => course.featured);
  res.json({ courses: featuredCourses });
};
