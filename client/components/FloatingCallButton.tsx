import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCallButton() {
  const [showNumbers, setShowNumbers] = useState(false);

  const primaryNumber = "+91 96502 19962";
  const secondaryNumber = "+91 98188 23045";

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Call button clicked, window width:", window.innerWidth);
    console.log("Current showNumbers state:", showNumbers);

    // On mobile devices, directly initiate call to primary number
    if (window.innerWidth <= 768) {
      console.log("Mobile detected, initiating call");
      window.location.href = `tel:${primaryNumber}`;
    } else {
      // On desktop, show the phone numbers
      console.log("Desktop detected, toggling popup");
      setShowNumbers(!showNumbers);
    }
  };

  const handleNumberClick = (number: string) => {
    window.location.href = `tel:${number}`;
    setShowNumbers(false);
  };

  return (
    <>
      {/* Phone Numbers Popup for Desktop */}
      {showNumbers && (
        <div className="fixed bottom-32 right-6 z-[60] bg-white rounded-lg shadow-2xl border-2 border-green-200 p-4 min-w-[280px] transition-all duration-300 transform scale-100 opacity-100 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Call Us Now</h3>
            <button
              onClick={() => setShowNumbers(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleNumberClick(primaryNumber)}
              className="w-full text-left p-3 rounded-lg bg-brand-50 hover:bg-brand-100 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-600" />
                <div>
                  <p className="font-medium text-gray-900">{primaryNumber}</p>
                  <p className="text-xs text-gray-600">Primary Support</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleNumberClick(secondaryNumber)}
              className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">{secondaryNumber}</p>
                  <p className="text-xs text-gray-600">Secondary Support</p>
                </div>
              </div>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Available: Mon-Fri 9AM-7PM, Sat 10AM-4PM IST
          </p>
        </div>
      )}

      {/* Floating Call Button */}
      <div className="fixed bottom-24 right-6 z-[55]">
        <Button
          onClick={handleCallClick}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 group animate-pulse-soft cursor-pointer"
          size="icon"
          type="button"
        >
          <Phone className="w-6 h-6 text-white group-hover:animate-bounce" />
        </Button>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>

        {/* Call to Action Label - Hidden on Mobile */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-bounce-x whitespace-nowrap">
            📞 Call us now!
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
}
