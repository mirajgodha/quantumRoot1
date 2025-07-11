import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Search,
  Star,
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Cloud,
  Database,
  Brain,
  Cpu,
  CheckCircle,
  Play,
  Quote,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import {
  Course,
  EnrollmentRequest,
  EnrollmentResponse,
  EnquiryRequest,
  EnquiryResponse,
} from "@shared/api";
import { calculateDiscountedPrice, formatPrice } from "@/lib/pricing";
import {
  InfiniteScrollTicker,
  type TestimonialItem,
} from "@/components/ui/infinite-scroll-ticker";
import {
  CorporateClientsTicker,
  type CorporateClient,
} from "@/components/ui/corporate-clients-ticker";
import { CourseCarousel } from "@/components/ui/course-carousel";
import Footer from "@/components/Footer";
import { useAnalytics, useTimeTracking } from "@/hooks/use-analytics";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);

  // Analytics hooks
  const analytics = useAnalytics();
  useTimeTracking("homepage");
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
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
  const [enquiryErrors, setEnquiryErrors] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);

  // Chat popup timer and session management
  useEffect(() => {
    const SESSION_KEY = "quantumroot_chat_popup_shown";
    const POPUP_DELAY = 2 * 60 * 1000; // 2 minutes in milliseconds

    // Check if popup has already been shown in this session
    const hasPopupBeenShown = sessionStorage.getItem(SESSION_KEY);

    if (!hasPopupBeenShown) {
      // Set timer to show popup after 2 minutes
      const timer = setTimeout(() => {
        setIsChatPopupOpen(true);
        // Mark as shown in session storage
        sessionStorage.setItem(SESSION_KEY, "true");
      }, POPUP_DELAY);

      // Cleanup timer on component unmount
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  // Fetch featured courses from API
  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        // Try to use a clean fetch API call
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch("/api/courses/featured", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        console.log("API Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Featured courses data:", data);

        if (data.courses && Array.isArray(data.courses)) {
          setFeaturedCourses(data.courses);
          console.log(
            `Successfully loaded ${data.courses.length} featured courses`,
          );
          return;
        }
      } catch (error) {
        console.error("Error fetching featured courses:", error);
      }

      // Fallback: load courses directly from shared data
      console.log("Using fallback: loading courses from shared data");
      try {
        const { mockCourses } = await import("@shared/courseData");
        const featured = mockCourses.filter((course) => course.featured);
        setFeaturedCourses(featured);
        console.log(`Fallback: loaded ${featured.length} featured courses`);
      } catch (importError) {
        console.error("Error importing shared data:", importError);
        setFeaturedCourses([]);
      }
    };

    fetchFeaturedCourses();
  }, []);

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Data Engineer at TCS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "The Generative AI course completely transformed my career. Learning about LLMs and ChatGPT integration helped me land my dream job in AI development.",
    },
    {
      name: "Priya Singh",
      role: "Database Architect at Infosys",
      image:
        "https://images.unsplash.com/photo-1617009762269-c062aaf6b3a0?w=900&auto=format&fit=crop&crop=face",
      rating: 5,
      review:
        "Apache Cassandra course was incredibly detailed with hands-on projects. The distributed systems concepts are now clear to me and I'm leading database architecture at my company.",
    },
    {
      name: "Arjun Krishnan",
      role: "Search Engineer at Wipro",
      image:
        "https://images.unsplash.com/photo-1662145349402-f78c521eccb0?w=900&auto=format&fit=crop&crop=face",
      rating: 4,
      review:
        "Elasticsearch course gave me deep insights into search analytics. The real-world projects helped me implement enterprise search solutions successfully.",
    },
    {
      name: "Sneha Patel",
      role: "AI Engineer at Accenture",
      image:
        "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=900&auto=format&fit=crop&crop=face",
      rating: 5,
      review:
        "The Generative AI & LLM course exceeded my expectations. Building real AI applications and understanding transformer models was a game-changer for my career.",
    },
    {
      name: "Vikram Kumar",
      role: "Data Architect at UHG",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 4,
      review:
        "Data Architecture course provided comprehensive knowledge on designing scalable data systems. The MongoDB and Cassandra modules were particularly valuable.",
    },
    {
      name: "Anitha Raj",
      role: "NoSQL Developer at Mindtree",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "MongoDB course was fantastic! From basics to advanced aggregation pipelines, everything was covered with practical examples. Got promoted within 6 months.",
    },
    {
      name: "Ravi Sharma",
      role: "Big Data Engineer at Verizon",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Apache Spark course helped me master big data processing. The PySpark modules and real-time analytics projects were excellent preparation for industry work.",
    },
    {
      name: "Meera Joshi",
      role: "Search Analyst at Incedo",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Elasticsearch & Search Analytics course provided deep expertise in building search engines. The Kibana visualizations and Logstash configurations were very practical.",
    },
  ];

  const corporateClients = [
    {
      name: "Accenture",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff8fd57f3e22146669b60b75e9bd7ed9d?format=webp&width=800",
    },
    {
      name: "Airtel",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F1ecc9182c8244d918e03d2a525acd730?format=webp&width=800",
    },
    {
      name: "CEVA Logistics",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fd91ce59c05f94233920e80f8cac1b398?format=webp&width=800",
    },
    {
      name: "Etisalat",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fb31bafd1e3674f5fa694f2e3e83eea84?format=webp&width=800",
    },
    {
      name: "Incedo",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F0e1d63706fd64eb1abe6ffcd75be6c7b?format=webp&width=800",
    },
    {
      name: "Infosys",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F0dd010d6a2114dc487cad1ce8fa546cf?format=webp&width=800",
    },
    {
      name: "SwissGulf Partners",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fb707d7cc14864fc184ea4d646dc74f9a?format=webp&width=800",
    },
    {
      name: "TCS",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fe2f0d18b63fc44ad8138c74ef40d3edc?format=webp&width=800",
    },
    {
      name: "UnitedHealth Group",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff46782ca8aca424091933a1459fab0f9?format=webp&width=800",
    },
    {
      name: "Verizon",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F19c8f306bb1048d3be79c70ea8372057?format=webp&width=800",
    },
  ];

  const handleEnquirySubmit = async () => {
    // Reset previous errors
    setEnquiryErrors({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

    // Validate form
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    };

    // Name validation
    if (!enquiryForm.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (enquiryForm.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!enquiryForm.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(enquiryForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!enquiryForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(enquiryForm.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    // Course validation
    if (!enquiryForm.course) {
      newErrors.course = "Please select a course you're interested in";
    }

    // Message validation
    if (!enquiryForm.message.trim()) {
      newErrors.message = "Message is required";
    } else if (enquiryForm.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    // Check if there are any validation errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      setEnquiryErrors(newErrors);
      return;
    }

    setIsSubmittingEnquiry(true);

    try {
      const enquiryData: EnquiryRequest = {
        name: enquiryForm.name.trim(),
        email: enquiryForm.email.trim(),
        phone: enquiryForm.phone.trim(),
        course: enquiryForm.course,
        message: enquiryForm.message.trim(),
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });

      const result: EnquiryResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit enquiry");
      }

      // Success - show success message and reset form
      analytics.trackFormSubmission("enquiry");
      analytics.trackEvent(
        "enquiry_submitted",
        "engagement",
        enquiryData.course,
      );

      setIsEnquiryOpen(false);
      setEnquiryForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
      setEnquiryErrors({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
      alert(result.message);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert(
        error instanceof Error
          ? error.message
          : "There was an error submitting your enquiry. Please try again.",
      );
    } finally {
      setIsSubmittingEnquiry(false);
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

    // Handle enrollment form submission
    const enrollmentData: EnrollmentRequest = {
      name: enrollmentForm.name,
      email: enrollmentForm.email,
      phone: enrollmentForm.phone,
      classType: enrollmentForm.classType as "online" | "offline" | "hybrid",
      courseName: selectedCourse,
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

      // Track successful enrollment
      analytics.trackFormSubmission("enrollment");
      analytics.trackCourseEnrollment(enrollmentData.courseName, 0); // Price can be added if available
      analytics.trackEvent(
        "enrollment_submitted",
        "conversion",
        enrollmentData.courseName,
      );

      setIsEnrollmentOpen(false);
      setEnrollmentForm({
        name: "",
        email: "",
        phone: "",
        classType: "online",
        courseName: "",
      });
      setValidationErrors({ email: "", phone: "" });
      setSelectedCourse("");

      alert(result.message);
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      alert("There was an error submitting your enrollment. Please try again.");
    }
  };

  const openEnrollmentModal = (courseName: string) => {
    setSelectedCourse(courseName);
    setEnrollmentForm((prev) => ({ ...prev, courseName }));
    setIsEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                alt="QuantumRoot Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Quantum Root
                </span>
                <span className="text-xs text-gray-600 italic -mt-1">
                  Grow from the root, scale to quantum
                </span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-brand-600 font-medium hover:text-brand-700 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-gray-700 hover:text-brand-600 transition-colors"
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
                to="/contact"
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Master Tech Skills with
              <br />
              <span className="text-yellow-300">Hands-On Training</span>
            </h1>
            <div className="text-lg md:text-xl font-medium text-purple-200 mb-6 italic">
              "Grow from the root, scale to quantum"
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Courses in Coding, Robotics, Cloud, Data & More
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-lg font-semibold bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                asChild
              >
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600">
              Start your journey with our most popular courses
            </p>
          </div>
          <CourseCarousel
            autoRotate={true}
            autoRotateInterval={4000}
            itemsToShow={4}
            gap={32}
            className="w-full"
          >
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="aspect-video rounded-t-lg overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    {course.category === "Generative AI" && (
                      <Brain className="w-6 h-6 text-white" />
                    )}
                    {course.category === "Big Data" && (
                      <Database className="w-6 h-6 text-white" />
                    )}
                    {course.category === "NoSQL" && (
                      <Database className="w-6 h-6 text-white" />
                    )}
                    {course.category === "Search & Analytics" && (
                      <Search className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-brand-100 text-brand-700"
                    >
                      {course.category}
                    </Badge>
                    <div className="flex items-center text-sm text-yellow-500">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-brand-600">
                          {formatPrice(
                            calculateDiscountedPrice(course.price)
                              .discountedPrice,
                          )}
                        </div>
                        <div className="text-lg text-gray-400 line-through">
                          {formatPrice(course.price)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          55% OFF
                        </Badge>
                        <span className="text-xs text-green-600">
                          Save{" "}
                          {formatPrice(
                            calculateDiscountedPrice(course.price)
                              .savingsAmount,
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs flex-1"
                        asChild
                      >
                        <Link to={`/courses/${course.id}`}>View Details</Link>
                      </Button>
                      <Button
                        size="sm"
                        className="text-xs bg-brand-500 hover:bg-brand-600 flex-1"
                        onClick={() => openEnrollmentModal(course.title)}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CourseCarousel>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quantum Root?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">
                Learn by building real-world projects with industry mentors
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Top Industry Mentors
              </h3>
              <p className="text-gray-600">
                Learn from experts working at top companies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Placement Support</h3>
              <p className="text-gray-600">
                Get job assistance and interview preparation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Weekend and weekday batches available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore courses across different technology domains
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Programming", icon: Code, count: 25 },
              { name: "Robotics", icon: Cpu, count: 2 },
              { name: "Cloud", icon: Cloud, count: 18 },
              { name: "Data Engineering", icon: Database, count: 15 },
              { name: "AI/ML", icon: Brain, count: 20 },
              { name: "DevOps", icon: Award, count: 10 },
            ].map((category) => (
              <Card
                key={category.name}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500 transition-colors">
                  <category.icon className="w-8 h-8 text-brand-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">
                  {category.count} courses
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Hear from our graduates who transformed their careers
            </p>
          </div>
        </div>

        {/* Infinite Scroll Ticker */}
        <InfiniteScrollTicker
          items={testimonials as TestimonialItem[]}
          speed="medium"
          pauseOnHover={true}
          className="py-8"
        />
      </section>

      {/* Corporate Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Corporate Clients
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Trusted by leading organizations worldwide
            </p>
          </div>
        </div>

        {/* Infinite Scroll Ticker for Corporate Clients */}
        <CorporateClientsTicker
          clients={corporateClients as CorporateClient[]}
          speed="medium"
          pauseOnHover={true}
          className="py-8"
        />
      </section>

      {/* Drop Enquiry Section */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-brand-100">
            Get personalized course recommendations and career guidance
          </p>
          <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-600 hover:bg-gray-100"
              >
                Drop Us an Enquiry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Drop Us an Enquiry</DialogTitle>
                <DialogDescription>
                  Fill out the form below and our experts will get back to you.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={enquiryForm.name}
                    onChange={(e) => {
                      setEnquiryForm({ ...enquiryForm, name: e.target.value });
                      if (enquiryErrors.name) {
                        setEnquiryErrors({ ...enquiryErrors, name: "" });
                      }
                    }}
                    placeholder="Your full name"
                    className={
                      enquiryErrors.name ? "border-red-500 bg-red-50" : ""
                    }
                  />
                  {enquiryErrors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {enquiryErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={enquiryForm.email}
                    onChange={(e) => {
                      setEnquiryForm({ ...enquiryForm, email: e.target.value });
                      if (enquiryErrors.email) {
                        setEnquiryErrors({ ...enquiryErrors, email: "" });
                      }
                    }}
                    placeholder="your.email@example.com"
                    className={
                      enquiryErrors.email ? "border-red-500 bg-red-50" : ""
                    }
                  />
                  {enquiryErrors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {enquiryErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={enquiryForm.phone}
                    onChange={(e) => {
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value });
                      if (enquiryErrors.phone) {
                        setEnquiryErrors({ ...enquiryErrors, phone: "" });
                      }
                    }}
                    placeholder="Your phone number"
                    className={
                      enquiryErrors.phone ? "border-red-500 bg-red-50" : ""
                    }
                  />
                  {enquiryErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {enquiryErrors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="course">Course Interested In *</Label>
                  <Select
                    value={enquiryForm.course}
                    onValueChange={(value) => {
                      setEnquiryForm({ ...enquiryForm, course: value });
                      if (enquiryErrors.course) {
                        setEnquiryErrors({ ...enquiryErrors, course: "" });
                      }
                    }}
                  >
                    <SelectTrigger
                      className={
                        enquiryErrors.course ? "border-red-500 bg-red-50" : ""
                      }
                    >
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {featuredCourses.map((course) => (
                        <SelectItem key={course.id} value={course.title}>
                          {course.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {enquiryErrors.course && (
                    <p className="mt-1 text-sm text-red-600">
                      {enquiryErrors.course}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={enquiryForm.message}
                    onChange={(e) => {
                      setEnquiryForm({
                        ...enquiryForm,
                        message: e.target.value,
                      });
                      if (enquiryErrors.message) {
                        setEnquiryErrors({ ...enquiryErrors, message: "" });
                      }
                    }}
                    placeholder="Any specific questions or requirements?"
                    rows={3}
                    className={
                      enquiryErrors.message ? "border-red-500 bg-red-50" : ""
                    }
                  />
                  {enquiryErrors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {enquiryErrors.message}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleEnquirySubmit}
                  disabled={isSubmittingEnquiry}
                  className={`w-full ${
                    isSubmittingEnquiry
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-brand-500 hover:bg-brand-600"
                  }`}
                >
                  {isSubmittingEnquiry ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Enrollment Modal */}
      <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enroll in Course</DialogTitle>
            <DialogDescription>
              Complete your enrollment for: <strong>{selectedCourse}</strong>
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
                onChange={(e) => {
                  setEnrollmentForm({
                    ...enrollmentForm,
                    email: e.target.value,
                  });
                  if (validationErrors.email) {
                    setValidationErrors({ ...validationErrors, email: "" });
                  }
                }}
                placeholder="your.email@example.com"
                required
                className={validationErrors.email ? "border-red-500" : ""}
              />
              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.email}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="enrollPhone">Phone Number *</Label>
              <Input
                id="enrollPhone"
                type="tel"
                value={enrollmentForm.phone}
                onChange={(e) => {
                  setEnrollmentForm({
                    ...enrollmentForm,
                    phone: e.target.value,
                  });
                  if (validationErrors.phone) {
                    setValidationErrors({ ...validationErrors, phone: "" });
                  }
                }}
                placeholder="+91 9876543210"
                required
                className={validationErrors.phone ? "border-red-500" : ""}
              />
              {validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.phone}
                </p>
              )}
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
                <strong>Course:</strong> {selectedCourse}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Contact Email:</strong> mirajgodha@gmail.com
              </p>
            </div>
            <Button
              onClick={handleEnrollmentSubmit}
              className="w-full bg-brand-500 hover:bg-brand-600"
              disabled={
                !enrollmentForm.name ||
                !enrollmentForm.email ||
                !enrollmentForm.phone ||
                !validateEmail(enrollmentForm.email) ||
                !validatePhone(enrollmentForm.phone)
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

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isChatPopupOpen} onOpenChange={setIsChatPopupOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full w-14 h-14 bg-brand-500 hover:bg-brand-600 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Need Help?</DialogTitle>
              <DialogDescription>
                Chat with our experts for course guidance and support.
              </DialogDescription>
            </DialogHeader>
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                Our chat support is coming soon!
              </p>
              <Button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-brand-500 hover:bg-brand-600"
              >
                Drop an Enquiry Instead
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
