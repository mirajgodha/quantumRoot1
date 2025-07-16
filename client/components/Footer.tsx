import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { NewsletterRequest, NewsletterResponse } from "@shared/api";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const requestData: NewsletterRequest = { email: email.trim() };

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data: NewsletterResponse = await response.json();

      if (data.success) {
        setEmail("");
        setMessage("Successfully subscribed to our newsletter!");
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-start space-x-3 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                alt="QuantumRoot Logo"
                className="w-8 h-8 object-contain mt-1"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Quantum Root</span>
                <span className="text-sm text-gray-400 italic -mt-1">
                  Grow from the root, scale to quantum
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering professionals with cutting-edge technology skills for
              the future workplace.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
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
                  to="/live-classes"
                  className="hover:text-white transition-colors"
                >
                  Live Classes
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
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
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
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
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="bg-brand-500 hover:bg-brand-600"
                  disabled={isLoading}
                >
                  {isLoading ? "..." : "Subscribe"}
                </Button>
              </div>
              {message && (
                <p
                  className={`text-sm ${
                    message.includes("Successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 QuantumRoot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
