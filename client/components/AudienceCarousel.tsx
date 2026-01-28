import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Audience {
  icon: string;
  title: string;
  desc: string;
}

interface AudienceCarouselProps {
  audiences: Audience[];
}

export default function AudienceCarousel({ audiences }: AudienceCarouselProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardsPerView = 4;
  const cardWidth = 256; // w-64 = 16rem = 256px
  const gap = 24; // gap-6 = 1.5rem = 24px

  const scroll = (direction: "left" | "right") => {
    let newIndex = scrollIndex;
    if (direction === "right") {
      newIndex = Math.min(scrollIndex + 1, audiences.length - cardsPerView);
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
  const canScrollRight = scrollIndex < audiences.length - cardsPerView;

  return (
    <div>
      <div className="relative flex items-center gap-2">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex-shrink-0 p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
          >
            {audiences.map((audience, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6 bg-white text-center hover:shadow-lg transition flex-shrink-0 w-64"
              >
                <div className="text-4xl mb-4 h-auto">{audience.icon}</div>
                <h3 className="font-semibold text-lg">{audience.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {audience.desc}
                </p>
              </div>
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
        {Array.from({ length: Math.max(0, audiences.length - cardsPerView + 1) }).map(
          (_, i) => (
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
          )
        )}
      </div>
    </div>
  );
}
