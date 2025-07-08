import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-brand-50">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                alt="QuantumRoot Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                QuantumRoot
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-8">🔍</div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
