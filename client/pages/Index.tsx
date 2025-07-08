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
      title: "Python for Beginners",
      description:
        "Learn Python programming from scratch with hands-on projects and real-world applications.",
      category: "Programming",
      duration: "8 weeks",
      difficulty: "Beginner",
      price: 29999,
      image: "/api/placeholder/400/250",
      tags: ["Python", "Programming", "Beginner"],
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      students: 12500,
      featured: true,
    },
    {
      id: "2",
      title: "Cloud Computing with AWS",
      description:
        "Master AWS cloud services and become a certified cloud architect with practical labs.",
      category: "Cloud",
      duration: "12 weeks",
      difficulty: "Intermediate",
      price: 39999,
      image: "/api/placeholder/400/250",
      tags: ["AWS", "Cloud", "DevOps"],
      instructor: "Priya Sharma",
      rating: 4.9,
      students: 8900,
      featured: true,
    },
    {
      id: "3",
      title: "Data Science & Analytics",
      description:
        "Complete data science bootcamp covering Python, R, machine learning, and data visualization.",
      category: "Data Science",
      duration: "16 weeks",
      difficulty: "Advanced",
      price: 59999,
      image: "/api/placeholder/400/250",
      tags: ["Data Science", "Python", "ML"],
      instructor: "Dr. Amit Patel",
      rating: 4.7,
      students: 15600,
      featured: true,
    },
    {
      id: "4",
      title: "Full Stack Web Development",
      description:
        "Build modern web applications with React, Node.js, and MongoDB from scratch.",
      category: "Programming",
      duration: "20 weeks",
      difficulty: "Intermediate",
      price: 49999,
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB"],
      instructor: "Neha Gupta",
      rating: 4.8,
      students: 11200,
      featured: true,
    },
  ];

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Data Engineer at TCS",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "The data science course helped me transition from a manual tester to a data engineer. The practical approach and mentor support was excellent.",
    },
    {
      name: "Priya Singh",
      role: "Cloud Architect at Infosys",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "AWS certification course was comprehensive and well-structured. Got placed as a cloud architect within 3 months of completion.",
    },
    {
      name: "Arjun Krishnan",
      role: "Full Stack Developer at Wipro",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "The full-stack development course gave me the confidence to work on complex projects. Highly recommend for career growth.",
    },
  ];

  const corporateClients = [
    { name: "Infosys", logo: "/api/placeholder/120/60" },
    { name: "TCS", logo: "/api/placeholder/120/60" },
    { name: "Accenture", logo: "/api/placeholder/120/60" },
    { name: "Ericsson", logo: "/api/placeholder/120/60" },
    { name: "Etisalat Dubai", logo: "/api/placeholder/120/60" },
    { name: "UHG", logo: "/api/placeholder/120/60" },
    { name: "Airtel", logo: "/api/placeholder/120/60" },
    { name: "Verizon", logo: "/api/placeholder/120/60" },
    { name: "Mindtree", logo: "/api/placeholder/120/60" },
    { name: "Incedo", logo: "/api/placeholder/120/60" },
    { name: "SwissGulf Partners", logo: "/api/placeholder/120/60" },
    { name: "Ceva Logistics", logo: "/api/placeholder/120/60" },
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
                <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  {course.category === "Programming" && (
                    <Code className="w-16 h-16 text-brand-600" />
                  )}
                  {course.category === "Cloud" && (
                    <Cloud className="w-16 h-16 text-brand-600" />
                  )}
                  {course.category === "Data Science" && (
                    <Database className="w-16 h-16 text-brand-600" />
                  )}
                  {!["Programming", "Cloud", "Data Science"].includes(
                    course.category,
                  ) && <BookOpen className="w-16 h-16 text-brand-600" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg border-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name[0]}
                    </span>
                  </div>
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
              Trusted by Professionals at
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-70">
              {corporateClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-medium text-gray-700 text-center">
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
