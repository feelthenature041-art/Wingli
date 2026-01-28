import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VideoLesson {
  title: string;
  instructor: string;
  img: string;
}

interface VideoLessonsCarouselProps {
  lessons: VideoLesson[];
}

export default function VideoLessonsCarousel({
  lessons,
}: VideoLessonsCarouselProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const cardsPerView = 3;
  const cardWidth = 320; // w-80 = 20rem = 320px
  const gap = 24; // gap-6 = 1.5rem = 24px

  const scroll = (direction: "left" | "right") => {
    let newIndex = scrollIndex;
    if (direction === "right") {
      newIndex = Math.min(scrollIndex + 1, lessons.length - cardsPerView);
    } else {
      newIndex = Math.max(scrollIndex - 1, 0);
    }
    setScrollIndex(newIndex);

    if (scrollContainerRef.current) {
      const scrollAmount = newIndex * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex < lessons.length - cardsPerView;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Only trigger if swipe distance is at least 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left, scroll right
        scroll("right");
      } else {
        // Swiped right, scroll left
        scroll("left");
      }
    }
  };

  return (
    <div>
      <div className="relative flex items-center gap-2">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="hidden md:flex flex-shrink-0 p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="h-5 w-5 text-slate-700" />
        </button>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              display: "flex",
              overflowX: "hidden",
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {lessons.map((lesson, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden bg-white hover:shadow-lg transition flex-shrink-0 w-72 md:w-80"
              >
                <div className="relative">
                  <img
                    src={lesson.img}
                    alt={lesson.title}
                    className="h-48 w-full object-cover bg-slate-200"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <div
                        className="w-0 h-0 border-l-6 border-l-transparent border-r-0 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"
                        style={{
                          borderLeft: "8px solid white",
                          borderTop: "5px solid transparent",
                          borderBottom: "5px solid transparent",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {lesson.instructor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="hidden md:flex flex-shrink-0 p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="h-5 w-5 text-slate-700" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({
          length: Math.max(0, lessons.length - cardsPerView + 1),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setScrollIndex(i);
              if (scrollContainerRef.current) {
                const scrollAmount = i * (cardWidth + gap);
                scrollContainerRef.current.scrollTo({
                  left: scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              i === scrollIndex
                ? "bg-primary w-6"
                : "bg-slate-300 w-2 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
