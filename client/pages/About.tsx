import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        config={{
          title: "About QuantumRoot",
          description:
            "Learn about QuantumRoot's mission to provide hands-on AI, Big Data, and Cloud training. Discover our expert-led approach to tech education and career transformation.",
          keywords:
            "About QuantumRoot, AI training company, Big Data education, Cloud computing courses, tech training mission",
          url: "https://quantumroot.in/about",
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-brand-50">
        {/* Navigation */}
        <nav className="border-b bg-background/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                  alt="QuantumRoot Logo - AI, Big Data & Cloud Training"
                  className="w-10 h-10 object-contain"
                  loading="lazy"
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
                <Link to="/about" className="text-brand-600 font-medium">
                  About
                </Link>
                <Link
                  to="/blog"
                  className="text-foreground hover:text-brand-600 transition-colors"
                >
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                Quantum Root
              </span>
            </h1>
            <p className="text-xl text-brand-600 font-medium italic mb-8">
              "Grow from the root, scale to quantum"
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-background rounded-2xl p-8 shadow-lg border mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Quantum Root, we believe true learning begins at the root —
                with strong fundamentals — and grows into quantum leaps of
                expertise.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F3cddc790102f4719ad62fe4143c999de?format=webp&width=800"
                    alt="Design Pathshala Logo"
                    className="w-24 h-24 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                    Our Legacy: From Design Pathshala to Quantum Root
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Design Pathshala is now reborn as Quantum Root. Founded in
                    2012 from a modest room in Indirapuram, UP, we've grown over
                    the years into a trusted training partner for thousands of
                    learners across the globe. Our journey has impacted working
                    professionals from leading companies like Amazon, Facebook,
                    and Oracle, as well as students from top institutions
                    including IITs and MNITs.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-2xl p-6 shadow-lg border">
                <h2 className="text-2xl font-semibold mb-4 text-brand-600">
                  Our Journey
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  With over <strong>12 years of experience</strong> in tech
                  education, we've trained <strong>11,000+ students</strong>{" "}
                  across the globe under our former brand Design Pathshala. Now
                  reborn as Quantum Root, we're doubling down on our mission: to
                  make cutting-edge tech skills accessible, practical, and
                  industry-ready.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg border">
                <h2 className="text-2xl font-semibold mb-4 text-brand-600">
                  World-Class Faculty
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our programs are led by seasoned professionals from top global
                  companies like{" "}
                  <strong>Airtel, Apple, Amazon, Meta, Oracle</strong>, and
                  more. These aren't just trainers — they're engineers,
                  architects, and leaders who've built real systems in the real
                  world.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-50 to-tech-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center text-brand-600">
                Who We Serve
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    IT Professionals
                  </h3>
                  <p className="text-muted-foreground">
                    Looking to reskill or upskill in cutting-edge technologies
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-tech-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    College Students
                  </h3>
                  <p className="text-muted-foreground">
                    Wanting a strong launchpad into tech careers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-600">
                Our Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From basics to advanced — we teach{" "}
                <strong>hands-on, real-world projects</strong>, not just theory.
                Our methodology focuses on building practical skills that
                translate directly to workplace success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While we help you become job-ready and support placement through
                our industry network, we do not guarantee job offers. Our focus
                is on building lasting skill, confidence, and capability.
              </p>
            </div>

            <div className="text-center bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Let's build your future, the right way.
              </p>
              <Link
                to="/courses"
                className="inline-block bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Courses
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
