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

export interface CurriculumModule {
  module: string;
  lessons: string[];
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
  curriculum?: CurriculumModule[];
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

export interface EnrollmentRequest {
  name: string;
  email: string;
  phone: string;
  classType: "online" | "offline" | "hybrid";
  courseName: string;
  message?: string;
}

export interface EnrollmentResponse {
  success: boolean;
  message: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface EnquiryRequest {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
}
