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

export interface FAQ {
  question: string;
  answer: string;
}

export interface BatchDetail {
  name: string;
  schedule: string;
  timing: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image?: string;
  tags: string[];
  instructor: string;
  bio: string;
  rating: number;
  students: number;
  featured?: boolean;
  curriculum?: CurriculumModule[];
  whatYouLearn?: string[];
  prerequisites?: string[];
  faqs?: FAQ[];
  enablePayment?: boolean;
  batchDetails?: BatchDetail[];
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
  slug?: string;
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

export interface NewsletterRequest {
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

export interface CreateRazorpayOrderRequest {
  courseId: string;
  amount: number;
  courseName: string;
  userEmail: string;
  userName: string;
  userPhone: string;
}

export interface CreateRazorpayOrderResponse {
  success: boolean;
  orderId?: string;
  amount?: number;
  currency?: string;
  message?: string;
}

export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  courseId: string;
  userDetails: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface VerifyPaymentResponse {
  success: boolean;
  message: string;
}
