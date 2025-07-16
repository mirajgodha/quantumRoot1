import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronRight,
} from "lucide-react";
import { BlogPost, blogPosts, blogCategories } from "@shared/blogData";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generateArticleStructuredData } from "@/lib/seo";

export default function BlogPostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comment, setComment] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
      // Get related posts from same category
      const related = blogPosts
        .filter(
          (p) => p.category === foundPost.category && p.id !== foundPost.id,
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The requested blog post could not be found.
          </p>
          <Link
            to="/blog"
            className="text-brand-600 hover:text-brand-700 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to an API
    alert("Thank you for your comment! It will be reviewed before publishing.");
    setComment({ name: "", email: "", message: "" });
  };

  const categoryName = blogCategories.find((c) => c.id === post.category)?.name;

  const articleStructuredData = generateArticleStructuredData(
    {
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      author: post.author,
      tags: [post.category],
    },
    post.title,
    post.excerpt,
  );

  return (
    <>
      <SEO
        config={{
          title: post.title,
          description: post.excerpt,
          keywords: `${post.category}, blog, QuantumRoot, ${post.readTime}, tech article`,
          url: `https://mirajgodha.github.io/quantumRoot1/blog/${post.id}`,
          image: post.image,
          type: "article",
          article: {
            publishedTime: post.publishDate,
            author: post.author,
            tags: [post.category],
          },
        }}
        structuredData={articleStructuredData}
      />
      <div className="min-h-screen bg-white">
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
                  <span className="text-2xl font-bold text-gray-900">
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
                  to="/careers"
                  className="text-foreground hover:text-brand-600 transition-colors"
                >
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

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-brand-600">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link to="/blog" className="hover:text-brand-600">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 truncate">{post.title}</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {categoryName}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.publishDate)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} min read
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("copy")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b">
            <span className="text-sm font-medium text-gray-700">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className="hover:text-brand-600 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {relatedPost.readTime} min read
                        </div>
                        <Link
                          to={`/blog/${relatedPost.id}`}
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

          {/* Comments Section */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Leave a Comment
            </h2>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={comment.name}
                    onChange={(e) =>
                      setComment({ ...comment, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={comment.email}
                    onChange={(e) =>
                      setComment({ ...comment, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Comment *
                </label>
                <Textarea
                  id="message"
                  value={comment.message}
                  onChange={(e) =>
                    setComment({ ...comment, message: e.target.value })
                  }
                  placeholder="Share your thoughts on this article..."
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700"
                disabled={!comment.name || !comment.email || !comment.message}
              >
                Post Comment
              </Button>
            </form>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
