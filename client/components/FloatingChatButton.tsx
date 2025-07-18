import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FloatingChatButton() {
  const navigate = useNavigate();
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  // Chat popup timer and session management
  useEffect(() => {
    const SESSION_KEY = "quantumroot_chat_popup_shown";
    const POPUP_DELAY = 2 * 60 * 1000; // 2 minutes in milliseconds

    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem(SESSION_KEY);

    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsChatPopupOpen(true);
        // Mark as shown in session storage
        sessionStorage.setItem(SESSION_KEY, "true");
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnquiryClick = () => {
    setIsChatPopupOpen(false);
    navigate("/contact");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[50]">
      <Dialog open={isChatPopupOpen} onOpenChange={setIsChatPopupOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-brand-500 hover:bg-brand-600 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Need Help?</DialogTitle>
            <DialogDescription>
              Chat with our experts for course guidance and support.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              Our chat support is coming soon!
            </p>
            <Button
              onClick={handleEnquiryClick}
              className="bg-brand-500 hover:bg-brand-600"
            >
              Contact Us Instead
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
