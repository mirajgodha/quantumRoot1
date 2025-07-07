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
import {
  Brain,
  Database,
  Cloud,
  Code,
  Users,
  Star,
  Clock,
  Award,
  BookOpen,
  TrendingUp,
  ChevronRight,
  Play,
} from "lucide-react";
import { Course, CourseCategory } from "@shared/api";

export default function Index() {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<CourseCategory[]>([]);

  useEffect(() => {
    // Mock data for demonstration - in real app this would come from API
    setFeaturedCourses([
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
        instructor: "Dr. Sarah Chen",
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
    ]);

    setCategories([
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
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-brand-50">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                TechSkill Academy
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-brand-100 text-brand-700 hover:bg-brand-200">
              🚀 New AI & Machine Learning Courses Available
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Master the{" "}
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-purple-600 bg-clip-text text-transparent">
                Future of Tech
              </span>{" "}
              with Expert Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Learn cutting-edge technologies like Generative AI, Big Data,
              NoSQL databases, and cloud platforms with hands-on projects and
              industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700"
                asChild
              >
                <Link to="/courses">
                  Explore Courses <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                15K+
              </div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                4.9
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your journey with our most popular and highly-rated courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-200"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-brand-600">
                        ${course.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        by {course.instructor}
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-r from-brand-50 to-tech-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive curriculum across cutting-edge
              technology domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-xl group-hover:text-brand-600 transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm text-muted-foreground mb-4">
                    {category.courseCount} courses available
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-brand-500 group-hover:text-white transition-colors"
                  >
                    Explore Courses
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-brand-100">
            Join thousands of professionals who have accelerated their careers
            with our expert-led training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/courses">Browse All Courses</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-brand-600"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechSkill Academy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering professionals with cutting-edge technology skills for
                the future workplace.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/courses/ai"
                    className="hover:text-white transition-colors"
                  >
                    Generative AI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/data"
                    className="hover:text-white transition-colors"
                  >
                    Data Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/nosql"
                    className="hover:text-white transition-colors"
                  >
                    NoSQL Databases
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/cloud"
                    className="hover:text-white transition-colors"
                  >
                    Cloud Platforms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
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
                    to="/instructors"
                    className="hover:text-white transition-colors"
                  >
                    Instructors
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
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
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
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechSkill Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
