import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Calendar,
  Clock,
  User,
  BookOpen,
  TrendingUp,
  Filter,
} from "lucide-react";
import {
  BlogPost,
  BlogCategory,
  blogPosts,
  blogCategories,
} from "@shared/blogData";
import Footer from "@/components/Footer";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  useEffect(() => {
    setPosts(blogPosts);
    setFilteredPosts(blogPosts);
    setCategories(blogCategories);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Sort posts
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
        case "date-asc":
          return (
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
          );
        case "read-time":
          return a.readTime - b.readTime;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory, sortBy]);

  const featuredPosts = posts.filter((post) => post.featured);
  const recentPosts = posts.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
              <Link to="/blog" className="text-brand-600 font-medium">
                Blog
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest insights on AI, data technologies, and career development
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-brand-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Posts
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-gray-900">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">
                        {categories.find((c) => c.id === post.category)?.name}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-brand-600 hover:text-brand-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles, topics, or tags..."
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
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Latest First</SelectItem>
                <SelectItem value="date-asc">Oldest First</SelectItem>
                <SelectItem value="read-time">Reading Time</SelectItem>
                <SelectItem value="title">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Posts Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                All Articles ({filteredPosts.length})
              </h2>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">
                          {categories.find((c) => c.id === post.category)?.name}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.publishDate)}
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-brand-600 hover:text-brand-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between"
                    >
                      <Link
                        to={`/blog?category=${category.id}`}
                        className="text-muted-foreground hover:text-brand-600 transition-colors"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </Link>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="space-y-2">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-sm font-medium hover:text-brand-600 transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-brand-50 to-brand-100">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-700">
                    Stay Updated
                  </CardTitle>
                  <CardDescription>
                    Get the latest tech insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
