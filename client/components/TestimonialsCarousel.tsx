import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const cardsPerView = 3;
  const cardWidth = 320; // w-80 = 20rem = 320px
  const gap = 24; // gap-6 = 1.5rem = 24px

  const scroll = (direction: "left" | "right") => {
    let newIndex = scrollIndex;
    if (direction === "right") {
      newIndex = Math.min(scrollIndex + 1, testimonials.length - cardsPerView);
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
  const canScrollRight = scrollIndex < testimonials.length - cardsPerView;

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
            {testimonials.map((testimonial, i) => (
              <figure
                key={i}
                className="rounded-2xl border p-6 bg-white/70 flex-shrink-0 w-80"
              >
                <Quote className="h-6 w-6 text-primary/60" />
                <blockquote className="mt-3 text-slate-800">
                  {testimonial.text}
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  — {testimonial.author}
                </figcaption>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <a href="#">Read More</a>
                </Button>
              </figure>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex-shrink-0 p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="h-5 w-5 text-slate-700" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({
          length: Math.max(0, testimonials.length - cardsPerView + 1),
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
