import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Signup() {
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

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">
            Get{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              Started
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Coming soon - Join TechSkill Academy and start your learning
            journey.
          </p>
        </div>
      </div>
    </div>
  );
}
