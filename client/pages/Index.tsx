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
import { Course } from "@shared/api";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const featuredCourses: Course[] = [
    {
      id: "1",
      title: "Generative AI & Large Language Models",
      description:
        "Master the latest in AI technology with hands-on experience in GPT, ChatGPT, and building AI applications.",
      category: "Generative AI",
      duration: "12 weeks",
      difficulty: "Advanced",
      price: 29999,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      tags: ["OpenAI", "LLM", "GPT", "AI", "Machine Learning"],
      instructor: "Dr. Sarah Chen",
      rating: 4.9,
      students: 12500,
      featured: true,
    },
    {
      id: "2",
      title: "Apache Spark for Big Data Processing",
      description:
        "Learn distributed computing and big data processing with Apache Spark, PySpark, and real-world projects.",
      category: "Big Data",
      duration: "10 weeks",
      difficulty: "Intermediate",
      price: 39999,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
      tags: ["Apache Spark", "PySpark", "Big Data", "Scala"],
      instructor: "Mark Rodriguez",
      rating: 4.8,
      students: 8900,
      featured: true,
    },
    {
      id: "3",
      title: "Apache Cassandra for Distributed Systems",
      description:
        "Master distributed NoSQL databases with Cassandra for high-availability applications and scalable data solutions.",
      category: "NoSQL",
      duration: "8 weeks",
      difficulty: "Advanced",
      price: 59999,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop&crop=center",
      tags: ["Apache Cassandra", "NoSQL", "Distributed Systems", "CQL"],
      instructor: "Dr. Amit Patel",
      rating: 4.7,
      students: 15600,
      featured: true,
    },
    {
      id: "4",
      title: "Elasticsearch & Search Analytics",
      description:
        "Learn to build powerful search engines and analytics platforms with Elasticsearch, Kibana, and Logstash.",
      category: "Search & Analytics",
      duration: "6 weeks",
      difficulty: "Intermediate",
      price: 49999,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      tags: ["Elasticsearch", "Kibana", "Logstash", "Search"],
      instructor: "Maria Santos",
      rating: 4.8,
      students: 11200,
      featured: true,
    },
  ];

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
        "https://images.unsplash.com/photo-1494790108755-2616b612b743?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Apache Cassandra course was incredibly detailed with hands-on projects. The distributed systems concepts are now clear to me and I'm leading database architecture at my company.",
    },
    {
      name: "Arjun Krishnan",
      role: "Search Engineer at Wipro",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Elasticsearch course gave me deep insights into search analytics. The real-world projects helped me implement enterprise search solutions successfully.",
    },
    {
      name: "Sneha Patel",
      role: "AI Engineer at Accenture",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "The Generative AI & LLM course exceeded my expectations. Building real AI applications and understanding transformer models was a game-changer for my career.",
    },
    {
      name: "Vikram Kumar",
      role: "Data Architect at UHG",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
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

  const handleEnquirySubmit = () => {
    // Handle form submission
    console.log("Enquiry submitted:", enquiryForm);
    setIsEnquiryOpen(false);
    setEnquiryForm({ name: "", email: "", phone: "", course: "", message: "" });
    // Show success toast
    alert("Thank you for your enquiry! We'll get back to you soon.");
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
              <span className="text-2xl font-bold text-gray-900">
                QuantumRoot
              </span>
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
              <div className="relative flex-1 w-full sm:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search Courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white text-gray-900 border-0"
                />
              </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div className="text-2xl font-bold text-brand-600">
                      ₹{course.price}
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
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose QuantumRoot?
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
              { name: "Robotics", icon: Cpu, count: 12 },
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
            <p className="text-xl text-gray-600">
              Hear from our graduates who transformed their careers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg border-0">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Corporate Clients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              {corporateClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling!.style.display =
                        "block";
                    }}
                  />
                  <span className="text-sm font-medium text-gray-700 text-center hidden">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={enquiryForm.name}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, name: e.target.value })
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
                      setEnquiryForm({ ...enquiryForm, email: e.target.value })
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
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                    }
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="course">Course Interested In</Label>
                  <Select
                    value={enquiryForm.course}
                    onValueChange={(value) =>
                      setEnquiryForm({ ...enquiryForm, course: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="python">
                        Python for Beginners
                      </SelectItem>
                      <SelectItem value="aws">
                        Cloud Computing with AWS
                      </SelectItem>
                      <SelectItem value="data-science">
                        Data Science & Analytics
                      </SelectItem>
                      <SelectItem value="fullstack">
                        Full Stack Web Development
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
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
                    placeholder="Any specific questions or requirements?"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                  alt="QuantumRoot Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold">QuantumRoot</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering professionals with cutting-edge technology skills for
                the future workplace.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-white transition-colors"
                  >
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund"
                    className="hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest courses and offers
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-brand-500 hover:bg-brand-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 QuantumRoot. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog>
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
