import { Link } from "react-router-dom";
import { GraduationCap, Calendar, Video, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function LiveClasses() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
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
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                Courses
              </Link>
              <Link to="/live-classes" className="text-brand-600 font-medium">
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
                to="/contact"
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-4xl font-bold mb-8">
            Live{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              Classes
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Interactive live sessions with industry experts - Coming soon!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6">
              <Calendar className="w-8 h-8 text-brand-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Scheduled Sessions</h3>
              <p className="text-gray-600 text-sm">
                Weekly live sessions with Q&A
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-8 h-8 text-brand-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600 text-sm">
                Real-time interaction with instructors
              </p>
            </div>
            <div className="text-center p-6">
              <Video className="w-8 h-8 text-brand-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Recorded Sessions</h3>
              <p className="text-gray-600 text-sm">Access recordings anytime</p>
            </div>
          </div>
          <Button asChild className="bg-brand-500 hover:bg-brand-600">
            <Link to="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
