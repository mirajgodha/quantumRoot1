import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Star,
  Send,
  CheckCircle,
  GraduationCap,
  Code,
  Megaphone,
  Camera,
  Headphones,
  TrendingUp,
} from "lucide-react";
import Footer from "@/components/Footer";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Internship";
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  icon: any;
}

export default function Careers() {
  const [applicationForm, setApplicationForm] = useState({
    jobId: "",
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    portfolio: "",
  });
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const jobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "Content Creator – Tech Courses",
      department: "Education",
      type: "Full-time",
      location: "Remote / Hybrid",
      description:
        "Create structured curriculum and video-based content for our technology training courses. Focus on Python, Data Engineering, or Generative AI topics.",
      requirements: [
        "Expertise in Python, Data Engineering, or Generative AI",
        "Experience creating structured curriculum and educational content",
        "Prior teaching/training experience preferred",
        "Strong written and verbal communication skills",
        "Ability to break down complex topics into digestible content",
      ],
      responsibilities: [
        "Develop comprehensive course curricula for technical subjects",
        "Create engaging video content and recorded training materials",
        "Design hands-on projects and practical exercises",
        "Collaborate with instructional design team",
        "Update content based on industry trends and student feedback",
      ],
      benefits: [
        "Competitive salary package",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Access to latest tools and technologies",
      ],
      icon: GraduationCap,
    },
    {
      id: "2",
      title: "Freelance Trainer / Mentor",
      department: "Education",
      type: "Freelance",
      location: "Remote",
      description:
        "Conduct online classes and mentor small batches in various domains including Spark, Kafka, Trino, Databricks, ML, Looker, and more.",
      requirements: [
        "Deep expertise in one or more: Spark, Kafka, Trino, Databricks, ML, Looker",
        "Prior teaching or mentoring experience",
        "Excellent communication and presentation skills",
        "Ability to work with small batches of students",
        "Flexible schedule availability",
      ],
      responsibilities: [
        "Conduct live online training sessions",
        "Mentor students through practical projects",
        "Provide feedback on assignments and progress",
        "Adapt teaching methods to different learning styles",
        "Maintain engagement in virtual classroom settings",
      ],
      benefits: [
        "Flexible hours and scheduling",
        "Competitive pay per session/project",
        "Work from anywhere",
        "Opportunity to impact student careers",
      ],
      icon: Users,
    },
    {
      id: "3",
      title: "Full Stack Developer (React + Node.js)",
      department: "Technology",
      type: "Full-time",
      location: "Remote / Indirapuram",
      description:
        "Build and maintain our course platform, enhance user experience, and implement new features for our learning management system.",
      requirements: [
        "3+ years experience with React and Node.js",
        "Experience with Vite, Tailwind CSS preferred",
        "Familiarity with MongoDB or similar databases",
        "Knowledge of deployment on GitHub Pages or similar platforms",
        "Understanding of responsive design principles",
      ],
      responsibilities: [
        "Develop and maintain the course platform frontend and backend",
        "Implement new features and improve user experience",
        "Optimize application performance and scalability",
        "Collaborate with design and product teams",
        "Ensure cross-browser compatibility and mobile responsiveness",
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Modern tech stack and tools",
        "Remote work flexibility",
        "Health insurance and benefits",
      ],
      icon: Code,
    },
    {
      id: "4",
      title: "Marketing & SEO Executive",
      department: "Marketing",
      type: "Full-time",
      location: "Remote / Hybrid",
      description:
        "Drive organic growth through SEO optimization, content marketing, and social media strategies. Focus on ed-tech and B2C marketing.",
      requirements: [
        "2+ years experience in digital marketing and SEO",
        "Prior experience with ed-tech or B2C marketing preferred",
        "Knowledge of Google Analytics, Search Console, and SEO tools",
        "Strong content creation and copywriting skills",
        "Understanding of social media marketing strategies",
      ],
      responsibilities: [
        "Develop and execute SEO strategies to improve organic rankings",
        "Create and manage content marketing campaigns",
        "Handle social media marketing across platforms",
        "Analyze performance metrics and optimize campaigns",
        "Collaborate with content team for marketing materials",
      ],
      benefits: [
        "Performance-based incentives",
        "Professional development in digital marketing",
        "Access to premium marketing tools",
        "Flexible work environment",
      ],
      icon: Megaphone,
    },
    {
      id: "5",
      title: "Sales & Student Success Manager",
      department: "Sales",
      type: "Full-time",
      location: "Remote / Hybrid",
      description:
        "Convert course leads to enrollments, handle EMI coordination, and provide post-sales support to ensure student success.",
      requirements: [
        "2+ years experience in sales or customer success",
        "Experience with educational products or services preferred",
        "Strong interpersonal and communication skills",
        "Ability to handle EMI and payment coordination",
        "Customer-focused mindset with problem-solving skills",
      ],
      responsibilities: [
        "Convert qualified leads into course enrollments",
        "Handle EMI coordination and payment processing",
        "Provide ongoing support to enrolled students",
        "Track student progress and satisfaction",
        "Manage customer relationships and resolve issues",
      ],
      benefits: [
        "Base salary plus attractive commission structure",
        "Direct impact on student success stories",
        "Career growth opportunities",
        "Comprehensive training programs",
      ],
      icon: TrendingUp,
    },
    {
      id: "6",
      title: "Intern – Tech Projects / Course QA",
      department: "Quality Assurance",
      type: "Internship",
      location: "Remote",
      description:
        "Help test course content, validate quizzes, and assist in curriculum development. Perfect opportunity for final year students.",
      requirements: [
        "Final year students or recent graduates welcome",
        "Basic understanding of technology and programming concepts",
        "Attention to detail and analytical thinking",
        "Good written communication skills",
        "Interest in education technology",
      ],
      responsibilities: [
        "Test course content for accuracy and completeness",
        "Validate quizzes and assignments",
        "Assist in curriculum development and review",
        "Provide feedback on user experience",
        "Help identify and report bugs or issues",
      ],
      benefits: [
        "Valuable hands-on experience in ed-tech",
        "Mentorship from industry professionals",
        "Certificate of completion",
        "Potential for full-time conversion",
      ],
      icon: CheckCircle,
    },
    {
      id: "7",
      title: "Video Editor (Part-time/Freelance)",
      department: "Content Production",
      type: "Part-time",
      location: "Remote",
      description:
        "Edit training content including screen recordings, add professional intros/outros, and ensure high-quality video production.",
      requirements: [
        "Proficiency in video editing software (Adobe Premiere, Final Cut Pro, etc.)",
        "Experience editing educational or training content",
        "Understanding of screen recording optimization",
        "Knowledge of audio editing and enhancement",
        "Ability to create engaging visual elements",
      ],
      responsibilities: [
        "Edit training videos and screen recordings",
        "Create professional intros and outros",
        "Enhance audio quality and synchronization",
        "Add captions and visual elements as needed",
        "Maintain consistent branding across all videos",
      ],
      benefits: [
        "Flexible working hours",
        "Project-based compensation",
        "Creative freedom in video production",
        "Opportunity to work with cutting-edge content",
      ],
      icon: Camera,
    },
  ];

  const openApplicationModal = (jobId: string) => {
    setApplicationForm({ ...applicationForm, jobId });
    setIsApplicationOpen(true);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to an API
    alert("Application submitted successfully! We'll get back to you soon.");
    setApplicationForm({
      jobId: "",
      name: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      portfolio: "",
    });
    setIsApplicationOpen(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800";
      case "Part-time":
        return "bg-blue-100 text-blue-800";
      case "Freelance":
        return "bg-purple-100 text-purple-800";
      case "Internship":
        return "bg-orange-100 text-orange-800";
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
                to="/blog"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Blog
              </Link>
              <Link to="/careers" className="text-brand-600 font-medium">
                Careers
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Help us empower the next generation of tech professionals. Build
            your career while making a meaningful impact.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Remote-First Culture
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Growth Opportunities
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Impactful Work
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {jobOpenings.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                      <job.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <Badge className={getTypeColor(job.type)}>{job.type}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                </div>

                <CardDescription className="text-base">
                  {job.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Key Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-brand-600 hover:bg-brand-700"
                  onClick={() => openApplicationModal(job.id)}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Join Us */}
        <section className="bg-gradient-to-r from-brand-50 to-tech-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-700 mb-4">
              Why Join QuantumRoot?
            </h2>
            <p className="text-lg text-muted-foreground">
              Be part of a mission-driven team that's transforming tech
              education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Growth Mindset</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities and career advancement in a
                fast-growing company
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-tech-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Collaborative Culture
              </h3>
              <p className="text-muted-foreground">
                Work with passionate professionals who believe in making
                education accessible
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-muted-foreground">
                Directly impact thousands of learners and help build the future
                workforce
              </p>
            </div>
          </div>
        </section>

        {/* Application Modal */}
        <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Apply for Position</DialogTitle>
              <DialogDescription>
                Fill out the form below to submit your application
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div>
                <Label htmlFor="position">Position</Label>
                <Select
                  value={applicationForm.jobId}
                  onValueChange={(value) =>
                    setApplicationForm({ ...applicationForm, jobId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobOpenings.map((job) => (
                      <SelectItem key={job.id} value={job.id}>
                        {job.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={applicationForm.name}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={applicationForm.email}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        email: e.target.value,
                      })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={applicationForm.phone}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    value={applicationForm.experience}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        experience: e.target.value,
                      })
                    }
                    placeholder="e.g., 3 years"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio/LinkedIn URL</Label>
                <Input
                  id="portfolio"
                  value={applicationForm.portfolio}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      portfolio: e.target.value,
                    })
                  }
                  placeholder="https://..."
                />
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      coverLetter: e.target.value,
                    })
                  }
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700"
                disabled={
                  !applicationForm.name ||
                  !applicationForm.email ||
                  !applicationForm.coverLetter ||
                  !applicationForm.jobId
                }
              >
                Submit Application
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this application, you agree to be contacted
                regarding this position.
              </p>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
}
