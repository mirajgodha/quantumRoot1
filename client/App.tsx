import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePageTracking, useScrollTracking } from "@/hooks/use-analytics";
import { initializeAnalytics } from "@/lib/analytics";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingChatButton from "@/components/FloatingChatButton";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import LiveClasses from "./pages/LiveClasses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import "./global.css";

const queryClient = new QueryClient();

// Analytics wrapper component
const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  usePageTracking(); // Track page views on route changes
  useScrollTracking(); // Track scroll depth

  return <>{children}</>;
};

const App = () => {
  // Initialize Google Analytics on app start
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <TooltipProvider>
            <AnalyticsWrapper>
              <Routes>
                <Route index element={<Index />} />
                <Route path="/" element={<Index />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:slug" element={<CourseDetail />} />
                <Route path="/live-classes" element={<LiveClasses />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postId" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <FloatingCallButton />
              <FloatingChatButton />
            </AnalyticsWrapper>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
export default App;
