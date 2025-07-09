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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  BookOpen,
  Search,
  Filter,
  Plus,
  Star,
  Clock,
  Users,
  DollarSign,
  Award,
} from "lucide-react";
import { Course, CourseCategory, CreateCourseRequest } from "@shared/api";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<CourseCategory[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [newCourse, setNewCourse] = useState<CreateCourseRequest>({
    title: "",
    description: "",
    category: "",
    duration: "",
    difficulty: "Beginner",
    price: 0,
    tags: [],
    instructor: "",
  });

  useEffect(() => {
    // Mock data - in real app this would come from API
    const mockCourses: Course[] = [
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
      {
        id: "4",
        title: "Machine Learning with Python",
        description:
          "Complete machine learning course covering algorithms, model training, and deployment with scikit-learn.",
        category: "Machine Learning",
        duration: "10 weeks",
        difficulty: "Intermediate",
        price: 349,
        tags: ["Python", "scikit-learn", "TensorFlow", "Pandas"],
        instructor: "Dr. Alex Kumar",
        rating: 4.8,
        students: 4567,
      },
      {
        id: "5",
        title: "Elasticsearch & Search Analytics",
        description:
          "Learn to build powerful search engines and analytics platforms with Elasticsearch and Kibana.",
        category: "Search & Analytics",
        duration: "5 weeks",
        difficulty: "Intermediate",
        price: 249,
        tags: ["Elasticsearch", "Kibana", "Logstash", "Search"],
        instructor: "Maria Santos",
        rating: 4.6,
        students: 1876,
      },
      {
        id: "6",
        title: "Apache Cassandra for Distributed Systems",
        description:
          "Master distributed NoSQL databases with Cassandra for high-availability applications.",
        category: "NoSQL",
        duration: "6 weeks",
        difficulty: "Advanced",
        price: 329,
        tags: ["Cassandra", "Distributed Systems", "NoSQL", "CQL"],
        instructor: "Robert Chen",
        rating: 4.5,
        students: 892,
      },
      {
        id: "7",
        title: "Data Engineering with Apache Airflow",
        description:
          "Build robust data pipelines and workflows using Apache Airflow and modern data engineering practices.",
        category: "Data Engineering",
        duration: "7 weeks",
        difficulty: "Intermediate",
        price: 379,
        tags: ["Airflow", "ETL", "Python", "Data Pipelines"],
        instructor: "Lisa Wang",
        rating: 4.7,
        students: 2134,
      },
      {
        id: "8",
        title: "Hadoop Ecosystem Fundamentals",
        description:
          "Learn the complete Hadoop ecosystem including HDFS, MapReduce, Hive, and HBase for big data processing.",
        category: "Big Data",
        duration: "8 weeks",
        difficulty: "Beginner",
        price: 289,
        tags: ["Hadoop", "HDFS", "MapReduce", "Hive", "HBase"],
        instructor: "David Kim",
        rating: 4.4,
        students: 1567,
      },
    ];

    const mockCategories: CourseCategory[] = [
      {
        id: "genai",
        name: "Generative AI",
        description: "AI, Machine Learning, LLMs",
        icon: "🧠",
        courseCount: 3,
      },
      {
        id: "bigdata",
        name: "Big Data",
        description: "Spark, Hadoop, Processing",
        icon: "📊",
        courseCount: 2,
      },
      {
        id: "nosql",
        name: "NoSQL",
        description: "MongoDB, Cassandra, Redis",
        icon: "🗄️",
        courseCount: 2,
      },
      {
        id: "search",
        name: "Search & Analytics",
        description: "Elasticsearch, Kibana",
        icon: "🔍",
        courseCount: 1,
      },
      {
        id: "dataeng",
        name: "Data Engineering",
        description: "Pipelines, ETL, Architecture",
        icon: "⚙️",
        courseCount: 1,
      },
      {
        id: "ml",
        name: "Machine Learning",
        description: "ML Algorithms, Models, AI",
        icon: "🤖",
        courseCount: 1,
      },
    ];

    setCourses(mockCourses);
    setFilteredCourses(mockCourses);
    setCategories(mockCategories);
  }, []);

  useEffect(() => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory,
      );
    }

    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (course) => course.difficulty === selectedDifficulty,
      );
    }

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory, selectedDifficulty]);

  const handleAddCourse = () => {
    if (!newCourse.title || !newCourse.description || !newCourse.category) {
      return;
    }

    const course: Course = {
      id: Date.now().toString(),
      ...newCourse,
      tags: newCourse.tags,
      rating: 0,
      students: 0,
    };

    setCourses([...courses, course]);
    setNewCourse({
      title: "",
      description: "",
      category: "",
      duration: "",
      difficulty: "Beginner",
      price: 0,
      tags: [],
      instructor: "",
    });
    setIsAddCourseOpen(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-brand-50">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                alt="QuantumRoot Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                QuantumRoot
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Home
              </Link>
              <Link to="/courses" className="text-brand-600 font-medium">
                Courses
              </Link>
              <Link
                to="/live-classes"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Live Classes
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
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive catalog of technology training courses
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search courses, technologies, or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-48 h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Generative AI">Generative AI</SelectItem>
                <SelectItem value="Machine Learning">
                  Machine Learning
                </SelectItem>
                <SelectItem value="Big Data">Big Data</SelectItem>
                <SelectItem value="NoSQL">NoSQL</SelectItem>
                <SelectItem value="Search & Analytics">
                  Search & Analytics
                </SelectItem>
                <SelectItem value="Data Engineering">
                  Data Engineering
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
            >
              <SelectTrigger className="w-full sm:w-48 h-12">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen}>
              <DialogTrigger asChild>
                <Button className="h-12 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Course
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Course</DialogTitle>
                  <DialogDescription>
                    Create a new training course for the platform.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newCourse.title}
                      onChange={(e) =>
                        setNewCourse({ ...newCourse, title: e.target.value })
                      }
                      placeholder="Course title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newCourse.description}
                      onChange={(e) =>
                        setNewCourse({
                          ...newCourse,
                          description: e.target.value,
                        })
                      }
                      placeholder="Course description"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newCourse.category}
                        onValueChange={(value) =>
                          setNewCourse({ ...newCourse, category: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Generative AI">
                            Generative AI
                          </SelectItem>
                          <SelectItem value="Machine Learning">
                            Machine Learning
                          </SelectItem>
                          <SelectItem value="Big Data">Big Data</SelectItem>
                          <SelectItem value="NoSQL">NoSQL</SelectItem>
                          <SelectItem value="Search & Analytics">
                            Search & Analytics
                          </SelectItem>
                          <SelectItem value="Data Engineering">
                            Data Engineering
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select
                        value={newCourse.difficulty}
                        onValueChange={(
                          value: "Beginner" | "Intermediate" | "Advanced",
                        ) => setNewCourse({ ...newCourse, difficulty: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={newCourse.duration}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            duration: e.target.value,
                          })
                        }
                        placeholder="e.g., 6 weeks"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={newCourse.price}
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            price: Number(e.target.value),
                          })
                        }
                        placeholder="299"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="instructor">Instructor</Label>
                    <Input
                      id="instructor"
                      value={newCourse.instructor}
                      onChange={(e) =>
                        setNewCourse({
                          ...newCourse,
                          instructor: e.target.value,
                        })
                      }
                      placeholder="Instructor name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={newCourse.tags.join(", ")}
                      onChange={(e) =>
                        setNewCourse({
                          ...newCourse,
                          tags: e.target.value
                            .split(",")
                            .map((tag) => tag.trim()),
                        })
                      }
                      placeholder="Python, AI, Machine Learning"
                    />
                  </div>
                  <Button onClick={handleAddCourse} className="w-full">
                    Create Course
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-200"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge className={getDifficultyColor(course.difficulty)}>
                    {course.difficulty}
                  </Badge>
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
                  {course.rating > 0 && (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {course.rating}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {course.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.tags.length - 3} more
                    </Badge>
                  )}
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

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
