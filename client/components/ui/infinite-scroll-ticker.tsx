import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

interface InfiniteScrollTickerProps {
  items: TestimonialItem[];
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteScrollTicker({
  items,
  speed = "medium",
  pauseOnHover = true,
  className,
}: InfiniteScrollTickerProps) {
  const speedClass = {
    slow: "animate-[scroll_60s_linear_infinite]",
    medium: "animate-[scroll_40s_linear_infinite]",
    fast: "animate-[scroll_20s_linear_infinite]",
  };

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-brand-50 via-white to-brand-50",
        className,
      )}
    >
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

      <div
        className={cn(
          "flex",
          speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-none w-96 mx-4 bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-600 truncate">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex ml-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-gray-700 text-xs leading-relaxed line-clamp-3 cursor-help">
                        "{item.review}"
                      </p>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-md p-4">
                      <p className="text-sm leading-relaxed">"{item.review}"</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Alternative compact ticker version for smaller testimonials
export function CompactInfiniteScrollTicker({
  items,
  speed = "medium",
  pauseOnHover = true,
  className,
}: InfiniteScrollTickerProps) {
  const speedClass = {
    slow: "animate-[scroll_80s_linear_infinite]",
    medium: "animate-[scroll_60s_linear_infinite]",
    fast: "animate-[scroll_40s_linear_infinite]",
  };

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-brand-50 via-white to-brand-50 py-4",
        className,
      )}
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none" />

      <div
        className={cn(
          "flex items-center",
          speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-none mx-6 text-center"
          >
            <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-medium text-gray-900 text-sm whitespace-nowrap">
                  {item.name}
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-gray-600 text-sm italic max-w-xs truncate cursor-help">
                      "{item.review}"
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-md p-4">
                    <p className="text-sm leading-relaxed">"{item.review}"</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
