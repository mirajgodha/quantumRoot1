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
import { Course, EnrollmentRequest, EnrollmentResponse } from "@shared/api";
import { mockCourses } from "@shared/courseData";
import { calculateDiscountedPrice, formatPrice } from "@/lib/pricing";
import Footer from "@/components/Footer";

export default function CourseDetail() {
  const { courseId } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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

  // Find the course by ID from shared mock data
  const foundCourse = mockCourses.find((c) => c.id === courseId);

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
  const priceInfo = calculateDiscountedPrice(foundCourse.price);
  const course = {
    ...foundCourse,
    ...priceInfo,
    instructor: {
      name: foundCourse.instructor,
      bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
      image: "/api/placeholder/100/100",
    },
    whatYouLearn: [
      `Master ${foundCourse.title} fundamentals`,
      "Hands-on practical projects",
      "Industry best practices",
      "Real-world applications",
      "Advanced techniques and patterns",
      "Performance optimization",
      "Troubleshooting and debugging",
      "Career development guidance",
    ],
    prerequisites: [
      "Basic computer knowledge",
      foundCourse.difficulty === "Beginner"
        ? "No prior experience required"
        : "Basic programming knowledge recommended",
      "Enthusiasm to learn",
    ],
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
    faqs: [
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
    ],
  };

  const handleEnquirySubmit = () => {
    console.log("Enquiry submitted:", enquiryForm);
    setIsEnquiryOpen(false);
    setEnquiryForm({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your enquiry! We'll get back to you soon.");
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

  return (
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
                  {course.rating} ({course.students.toLocaleString()} students)
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
                    onClick={openEnrollmentModal}
                  >
                    Enroll Now
                  </Button>
                  <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
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
                            onChange={(e) =>
                              setEnquiryForm({
                                ...enquiryForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={enquiryForm.email}
                            onChange={(e) =>
                              setEnquiryForm({
                                ...enquiryForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={enquiryForm.phone}
                            onChange={(e) =>
                              setEnquiryForm({
                                ...enquiryForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            value={enquiryForm.message}
                            onChange={(e) =>
                              setEnquiryForm({
                                ...enquiryForm,
                                message: e.target.value,
                              })
                            }
                            placeholder="Any specific questions?"
                            rows={3}
                          />
                        </div>
                        <Button
                          onClick={handleEnquirySubmit}
                          className="w-full bg-brand-500 hover:bg-brand-600"
                        >
                          Submit Enquiry
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
                        <p className="text-gray-600">{course.instructor.bio}</p>
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

                {/* Share Course */}
                <Card>
                  <CardHeader>
                    <CardTitle>Share This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigator.share?.({ title: course.title })}
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
                  setEnrollmentForm({ ...enrollmentForm, name: e.target.value })
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
                <strong>You Save:</strong> {formatPrice(course.savingsAmount)} (
                {course.discountPercentage}% OFF)
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
      <Footer />
    </div>
  );
}
