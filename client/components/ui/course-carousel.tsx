import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  children: React.ReactNode[];
  autoRotate?: boolean;
  autoRotateInterval?: number;
  itemsToShow?: number;
  gap?: number;
  className?: string;
}

export function CourseCarousel({
  children,
  autoRotate = true,
  autoRotateInterval = 3000,
  itemsToShow = 4,
  gap = 32,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoRotate);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // Auto-rotation logic
  useEffect(() => {
    if (isPlaying && !isHovered && autoRotate && totalItems > itemsToShow) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          // Seamless loop: when reaching the end, go back to start
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, autoRotateInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    isPlaying,
    isHovered,
    autoRotate,
    totalItems,
    itemsToShow,
    maxIndex,
    autoRotateInterval,
  ]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // If we have fewer items than itemsToShow, don't use carousel
  if (totalItems <= itemsToShow) {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(itemsToShow, totalItems)} gap-8 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            gap: `${gap}px`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-none"
              style={{
                width: `calc(${100 / itemsToShow}% - ${(gap * (itemsToShow - 1)) / itemsToShow}px)`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="rounded-full w-10 h-10 p-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Play/Pause Button */}
        {autoRotate && (
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="rounded-full w-10 h-10 p-0"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
        )}

        {/* Next Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="rounded-full w-10 h-10 p-0"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-brand-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {autoRotate && isPlaying && !isHovered && (
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4 overflow-hidden">
          <div
            className="bg-brand-600 h-1 rounded-full"
            style={{
              width: "100%",
              animation: `carousel-progress ${autoRotateInterval}ms linear infinite`,
            }}
          />
        </div>
      )}
    </div>
  );
}
