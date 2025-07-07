/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image?: string;
  tags: string[];
  instructor: string;
  rating: number;
  students: number;
  featured?: boolean;
}

export interface CourseCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
}

export interface CoursesResponse {
  courses: Course[];
  categories: CourseCategory[];
  total: number;
}

export interface CreateCourseRequest {
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image?: string;
  tags: string[];
  instructor: string;
}
