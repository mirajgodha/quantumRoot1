import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GraduationCap,
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  Play,
  Calendar,
  BookOpen,
  Download,
  Share,
  ChevronRight,
} from "lucide-react";
import {
  Course,
  EnrollmentRequest,
  EnrollmentResponse,
  EnquiryRequest,
  EnquiryResponse,
  FAQ,
  BatchDetail,
} from "@shared/api";
import { mockCourses } from "@shared/courseData";
import { calculateDiscountedPrice, formatPrice } from "@/lib/pricing";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generateCourseStructuredData } from "@/lib/seo";

export default function CourseDetail() {
  const { slug } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquiryErrors, setEnquiryErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isEnquiryLoading, setIsEnquiryLoading] = useState(false);
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    classType: "online",
    courseName: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    phone: "",
  });

  // Find the course by slug from shared mock data
  const foundCourse = mockCourses.find((c) => c.slug === slug);

  // If course not found, redirect to 404 or show error
  if (!foundCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The requested course could not be found.
          </p>
          <Link to="/courses" className="text-brand-600 hover:text-brand-700">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Extended course data with additional details
  const priceInfo = calculateDiscountedPrice(
    foundCourse.price,
    foundCourse.slug,
  );

  // Default global whatYouLearn and prerequisites
  const defaultWhatYouLearn = [
    `Master ${foundCourse.title} fundamentals`,
    "Hands-on practical projects",
    "Industry best practices",
    "Real-world applications",
    "Advanced techniques and patterns",
    "Performance optimization",
    "Troubleshooting and debugging",
    "Career development guidance",
  ];

  const defaultPrerequisites = [
    "Basic computer knowledge",
    foundCourse.difficulty === "Beginner"
      ? "No prior experience required"
      : "Basic programming knowledge recommended",
    "Enthusiasm to learn",
  ];

  const defaultFaqs: FAQ[] = [
    {
      question: `Is this ${foundCourse.title} course suitable for beginners?`,
      answer:
        foundCourse.difficulty === "Beginner"
          ? "Yes, this course is designed for complete beginners with no prior experience. We start from the very basics."
          : "This course requires some basic knowledge. We recommend having fundamental understanding before starting.",
    },
    {
      question: "What kind of support do I get during the course?",
      answer:
        "You get 24/7 support through our learning platform, weekly live Q&A sessions with instructors, and access to our student community forum.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes, you receive a verified certificate of completion that you can add to your LinkedIn profile and resume.",
    },
    {
      question: "Can I access the course materials after completion?",
      answer:
        "Yes, you get lifetime access to all course materials, including future updates and additional resources.",
    },
    {
      question: "What is the format of this course?",
      answer:
        "The course includes video lectures, hands-on coding exercises, real-world projects, and interactive quizzes. All content is available online with flexible scheduling.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, we'll provide a full refund. Please read our Refund Policy for details.",
    },
  ];

  const course = {
    ...foundCourse,
    ...priceInfo,
    instructor: {
      name: foundCourse.instructor,
      bio:
        foundCourse.bio ||
        "Expert instructor with years of industry experience and proven track record in training professionals.",
      image: "/api/placeholder/100/100",
    },
    // Use course-specific whatYouLearn if available, otherwise use defaults
    whatYouLearn: foundCourse.whatYouLearn || defaultWhatYouLearn,
    // Use course-specific prerequisites if available, otherwise use defaults
    prerequisites: foundCourse.prerequisites || defaultPrerequisites,
    // Display both course-specific FAQs and global FAQs
    faqs: foundCourse.faqs
      ? [...foundCourse.faqs, ...defaultFaqs]
      : defaultFaqs,
    curriculum: foundCourse.curriculum || [
      {
        module: "Module 1: Fundamentals",
        lessons: [
          `Introduction to ${foundCourse.title}`,
          "Setting up development environment",
          "Basic concepts and terminology",
          "First hands-on exercises",
        ],
      },
      {
        module: "Module 2: Core Concepts",
        lessons: [
          "Deep dive into core principles",
          "Best practices and patterns",
          "Common use cases",
          "Practical applications",
        ],
      },
      {
        module: "Module 3: Advanced Topics",
        lessons: [
          "Advanced techniques",
          "Performance optimization",
          "Scaling and production considerations",
          "Integration with other tools",
        ],
      },
      {
        module: "Module 4: Real-world Projects",
        lessons: [
          "Project planning and setup",
          "Implementation and development",
          "Testing and debugging",
          "Deployment and monitoring",
        ],
      },
    ],
  };

  const validateEnquiryForm = () => {
    const errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Validate name
    if (!enquiryForm.name.trim()) {
      errors.name = "Full name is required";
    } else if (enquiryForm.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    // Validate email
    if (!enquiryForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(enquiryForm.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate phone
    if (!enquiryForm.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (enquiryForm.phone.trim().length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    }

    // Validate message
    if (!enquiryForm.message.trim()) {
      errors.message = "Message is required";
    } else if (enquiryForm.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setEnquiryErrors(errors);
    return !errors.name && !errors.email && !errors.phone && !errors.message;
  };

  const handleEnquirySubmit = async () => {
    if (!validateEnquiryForm()) {
      return;
    }

    setIsEnquiryLoading(true);

    try {
      const requestData: EnquiryRequest = {
        name: enquiryForm.name.trim(),
        email: enquiryForm.email.trim(),
        phone: enquiryForm.phone.trim(),
        course: course?.title || "Course Details",
        message: enquiryForm.message.trim(),
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data: EnquiryResponse = await response.json();

      if (data.success) {
        setIsEnquiryOpen(false);
        setEnquiryForm({ name: "", email: "", phone: "", message: "" });
        setEnquiryErrors({ name: "", email: "", phone: "", message: "" });
        alert(data.message);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Enquiry submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsEnquiryLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleEnrollmentSubmit = async () => {
    // Validate form
    const errors = {
      email: !validateEmail(enrollmentForm.email)
        ? "Please enter a valid email address"
        : "",
      phone: !validatePhone(enrollmentForm.phone)
        ? "Please enter a valid phone number (10-15 digits)"
        : "",
    };

    setValidationErrors(errors);

    // Check if there are any validation errors
    if (errors.email || errors.phone) {
      return;
    }

    const enrollmentData: EnrollmentRequest = {
      name: enrollmentForm.name,
      email: enrollmentForm.email,
      phone: enrollmentForm.phone,
      classType: enrollmentForm.classType as "online" | "offline" | "hybrid",
      courseName: course.title,
    };

    try {
      // Send enrollment data to API
      const response = await fetch("/api/enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentData),
      });

      const result: EnrollmentResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit enrollment");
      }

      setIsEnrollmentOpen(false);
      setEnrollmentForm({
        name: "",
        email: "",
        phone: "",
        classType: "online",
        courseName: "",
      });
      setValidationErrors({ email: "", phone: "" });

      alert(result.message);
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      alert("There was an error submitting your enrollment. Please try again.");
    }
  };

  const openEnrollmentModal = () => {
    setEnrollmentForm((prev) => ({ ...prev, courseName: course.title }));
    setIsEnrollmentOpen(true);
  };

  const handleEnrollClick = () => {
    if (course.showPaymentQR) {
      setIsQRModalOpen(true);
    } else {
      openEnrollmentModal();
    }
  };

  const handleShareCourse = async () => {
    const shareData = {
      title: `${course.title} - QuantumRoot`,
      text: `Check out this amazing course: ${course.title}. ${course.description}`,
      url: window.location.href,
    };

    try {
      // Try to use Web Share API if available
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Course URL copied to clipboard! You can now share it anywhere.");
      }
    } catch (error) {
      // Final fallback if clipboard API also fails
      console.error("Error sharing:", error);
      // Create a temporary textarea to copy the URL
      const textarea = document.createElement("textarea");
      textarea.value = window.location.href;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("Course URL copied to clipboard! You can now share it anywhere.");
    }
  };

  const courseStructuredData = generateCourseStructuredData({
    name: course.title,
    description: course.description,
    provider: "QuantumRoot",
    duration: course.duration,
    price: calculateDiscountedPrice(course.price, course.slug).discountedPrice,
    currency: "INR",
    category: course.category,
  });

  return (
    <>
      <SEO
        config={{
          title: `${course.title} - Course Details`,
          description: `Learn ${course.title} with QuantumRoot. ${course.description}. Duration: ${course.duration}. Expert instructors and hands-on projects.`,
          keywords: `${course.title}, ${course.category}, ${course.tags.join(", ")}, online course, tech training`,
          url: `https://quantumroot.in/courses/${course.slug}`,
          image: course.image,
        }}
        structuredData={courseStructuredData}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                  alt="QuantumRoot Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                    Quantum Root
                  </span>
                  <span className="text-xs text-gray-600 italic -mt-1">
                    Grow from the root, scale to quantum
                  </span>
                </div>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-brand-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="text-brand-600 font-medium hover:text-brand-700 transition-colors"
                >
                  Courses
                </Link>
                <Link
                  to="/live-classes"
                  className="text-gray-700 hover:text-brand-600 transition-colors"
                >
                  Live Classes
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-brand-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="text-foreground hover:text-brand-600 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  className="text-foreground hover:text-brand-600 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-brand-600 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-brand-600">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link to="/courses" className="hover:text-brand-600">
                Courses
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900">{course.title}</span>
            </div>
          </div>
        </div>

        {/* Course Banner */}
        <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Badge className="bg-yellow-400 text-gray-900 mb-4">
                  {course.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-brand-100 mb-6">
                  {course.description}
                </p>
                <div className="flex items-center gap-6 text-brand-100">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    {course.rating} ({course.students.toLocaleString()}{" "}
                    students)
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-1" />
                    {course.difficulty}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <Card className="bg-white text-gray-900">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      {foundCourse.image ? (
                        <img
                          src={foundCourse.image}
                          alt={foundCourse.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Play className="w-16 h-16 text-brand-600" />
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-brand-600">
                        {formatPrice(course.discountedPrice)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(course.originalPrice)}
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        {course.discountPercentage}% OFF
                      </Badge>
                    </div>
                    <div className="text-sm text-green-600 font-medium mb-4">
                      You save {formatPrice(course.savingsAmount)}!
                    </div>
                    <Button
                      className="w-full mb-3 bg-brand-500 hover:bg-brand-600"
                      onClick={handleEnrollClick}
                    >
                      {course.showPaymentQR ? "Pay Now" : "Enroll Now"}
                    </Button>
                    <Dialog
                      open={isEnquiryOpen}
                      onOpenChange={setIsEnquiryOpen}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Drop Enquiry
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Course Enquiry</DialogTitle>
                          <DialogDescription>
                            Get more information about this course
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              value={enquiryForm.name}
                              onChange={(e) => {
                                setEnquiryForm({
                                  ...enquiryForm,
                                  name: e.target.value,
                                });
                                if (enquiryErrors.name) {
                                  setEnquiryErrors({
                                    ...enquiryErrors,
                                    name: "",
                                  });
                                }
                              }}
                              placeholder="Your full name"
                              className={
                                enquiryErrors.name ? "border-red-500" : ""
                              }
                            />
                            {enquiryErrors.name && (
                              <p className="text-red-500 text-sm mt-1">
                                {enquiryErrors.name}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={enquiryForm.email}
                              onChange={(e) => {
                                setEnquiryForm({
                                  ...enquiryForm,
                                  email: e.target.value,
                                });
                                if (enquiryErrors.email) {
                                  setEnquiryErrors({
                                    ...enquiryErrors,
                                    email: "",
                                  });
                                }
                              }}
                              placeholder="your.email@example.com"
                              className={
                                enquiryErrors.email ? "border-red-500" : ""
                              }
                            />
                            {enquiryErrors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                {enquiryErrors.email}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              value={enquiryForm.phone}
                              onChange={(e) => {
                                setEnquiryForm({
                                  ...enquiryForm,
                                  phone: e.target.value,
                                });
                                if (enquiryErrors.phone) {
                                  setEnquiryErrors({
                                    ...enquiryErrors,
                                    phone: "",
                                  });
                                }
                              }}
                              placeholder="Your phone number"
                              className={
                                enquiryErrors.phone ? "border-red-500" : ""
                              }
                            />
                            {enquiryErrors.phone && (
                              <p className="text-red-500 text-sm mt-1">
                                {enquiryErrors.phone}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              value={enquiryForm.message}
                              onChange={(e) => {
                                setEnquiryForm({
                                  ...enquiryForm,
                                  message: e.target.value,
                                });
                                if (enquiryErrors.message) {
                                  setEnquiryErrors({
                                    ...enquiryErrors,
                                    message: "",
                                  });
                                }
                              }}
                              placeholder="Any specific questions?"
                              rows={3}
                              className={
                                enquiryErrors.message ? "border-red-500" : ""
                              }
                            />
                            {enquiryErrors.message && (
                              <p className="text-red-500 text-sm mt-1">
                                {enquiryErrors.message}
                              </p>
                            )}
                          </div>
                          <Button
                            onClick={handleEnquirySubmit}
                            disabled={isEnquiryLoading}
                            className="w-full bg-brand-500 hover:bg-brand-600"
                          >
                            {isEnquiryLoading
                              ? "Submitting..."
                              : "Submit Enquiry"}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="text-center mt-4 space-y-2 text-sm text-gray-600">
                      <p>✓ Lifetime access</p>
                      <p>✓ Certificate of completion</p>
                      <p>✓ 24/7 support</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What You'll Learn
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Prerequisites
                  </h2>
                  <div className="space-y-2">
                    {course.prerequisites.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Curriculum */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Course Curriculum
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="text-left">
                          {module.module}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-center text-gray-600"
                              >
                                <Play className="w-4 h-4 mr-2 text-brand-500" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Instructor */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Instructor
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {course.instructor.name[0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {course.instructor.name}
                          </h3>
                          <p className="text-gray-600">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Course Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-gray-500 mr-3" />
                        <span>{course.duration} duration</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-gray-500 mr-3" />
                        <span>{course.curriculum.length} modules</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-5 h-5 text-gray-500 mr-3" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-gray-500 mr-3" />
                        <span>Certificate included</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-gray-500 mr-3" />
                        <span>Community access</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Batch Details */}
                  {course.batchDetails && course.batchDetails.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Batch Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {course.batchDetails.map((batch, index) => (
                          <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg bg-gray-50"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {batch.name}
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="w-4 h-4 mr-2 text-brand-500" />
                                <span>{batch.schedule}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Clock className="w-4 h-4 mr-2 text-brand-500" />
                                <span>{batch.timing}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Note:</strong> You can choose your preferred
                            batch during enrollment. All batches cover the same
                            comprehensive curriculum.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Share Course */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Share This Course</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleShareCourse}
                      >
                        <Share className="w-4 h-4 mr-2" />
                        Share Course
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Modal */}
        <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enroll in Course</DialogTitle>
              <DialogDescription>
                Complete your enrollment for: <strong>{course.title}</strong>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="enrollName">Full Name *</Label>
                <Input
                  id="enrollName"
                  value={enrollmentForm.name}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="enrollEmail">Email Address *</Label>
                <Input
                  id="enrollEmail"
                  type="email"
                  value={enrollmentForm.email}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      email: e.target.value,
                    })
                  }
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="enrollPhone">Phone Number *</Label>
                <Input
                  id="enrollPhone"
                  type="tel"
                  value={enrollmentForm.phone}
                  onChange={(e) =>
                    setEnrollmentForm({
                      ...enrollmentForm,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+91 96502 19962"
                  required
                />
              </div>
              <div>
                <Label htmlFor="classType">Preferred Class Type *</Label>
                <Select
                  value={enrollmentForm.classType}
                  onValueChange={(value) =>
                    setEnrollmentForm({ ...enrollmentForm, classType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select class type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Classes</SelectItem>
                    <SelectItem value="offline">Offline Classes</SelectItem>
                    <SelectItem value="hybrid">
                      Hybrid (Online + Offline)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Course Details:
                </h4>
                <p className="text-sm text-gray-600">
                  <strong>Course:</strong> {course.title}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Price:</strong> {formatPrice(course.discountedPrice)}{" "}
                  <span className="line-through text-gray-400">
                    {formatPrice(course.originalPrice)}
                  </span>
                </p>
                <p className="text-sm text-green-600">
                  <strong>You Save:</strong> {formatPrice(course.savingsAmount)}{" "}
                  ({course.discountPercentage}% OFF)
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Contact Email:</strong> info@quantumroot.in
                </p>
              </div>
              <Button
                onClick={handleEnrollmentSubmit}
                className="w-full bg-brand-500 hover:bg-brand-600"
                disabled={
                  !enrollmentForm.name ||
                  !enrollmentForm.email ||
                  !enrollmentForm.phone
                }
              >
                Submit Enrollment
              </Button>
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by our team
                regarding your enrollment.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* QR Code Payment Modal */}
        <Dialog open={isQRModalOpen} onOpenChange={setIsQRModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Complete Your Payment</DialogTitle>
              <DialogDescription>
                Scan the QR code below to make your payment for:{" "}
                <strong>{course.title}</strong>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {course.paymentQRImage && (
                <div className="flex flex-col items-center">
                  <img
                    src={course.paymentQRImage}
                    alt="Payment QR Code"
                    className="w-64 h-64 object-contain border rounded-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Scan this QR code with your UPI app to complete the payment
                  </p>
                </div>
              )}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Payment Details:
                </h4>
                <p className="text-sm text-gray-600">
                  <strong>Course:</strong> {course.title}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Amount:</strong> {formatPrice(course.discountedPrice)}{" "}
                  <span className="line-through text-gray-400">
                    {formatPrice(course.originalPrice)}
                  </span>
                </p>
                <p className="text-sm text-green-600">
                  <strong>You Save:</strong> {formatPrice(course.savingsAmount)}{" "}
                  ({course.discountPercentage}% OFF)
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> {course.duration}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>After Payment:</strong> Please send a screenshot of
                  your payment confirmation to{" "}
                  <a
                    href="mailto:info@quantumroot.in"
                    className="text-brand-600 hover:underline"
                  >
                    info@quantumroot.in
                  </a>{" "}
                  with your name and course details to confirm enrollment.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsQRModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Footer />
      </div>
    </>
  );
}
