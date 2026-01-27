import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Mentor } from "@/data/mentorsData";

interface TopMentorsCarouselProps {
  mentors: Mentor[];
}

export default function TopMentorsCarousel({
  mentors,
}: TopMentorsCarouselProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardsPerView = 3;
  const cardWidth = 208; // w-52 = 13rem = 208px
  const gap = 16; // gap-4 = 1rem = 16px

  const scroll = (direction: "left" | "right") => {
    let newIndex = scrollIndex;
    if (direction === "right") {
      newIndex = Math.min(scrollIndex + 1, mentors.length - cardsPerView);
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
  const canScrollRight = scrollIndex < mentors.length - cardsPerView;

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
            className="flex gap-4 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              display: "flex",
              overflowX: "hidden",
            }}
          >
            {mentors.map((m) => (
              <div
                key={m.id}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white flex-shrink-0 w-52"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-28 w-full object-cover bg-slate-200"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-sm">{m.name}</h3>
                  <p className="text-muted-foreground text-xs">{m.airline}</p>
                  <div className="flex items-center gap-1 mt-1 mb-2">
                    <span className="text-orange-400 text-xs">★</span>
                    <span className="text-xs font-medium">
                      {m.rating}({m.reviews}) | {m.years}+yrs
                    </span>
                  </div>
                  <div className="flex gap-1 flex-wrap mb-2">
                    {m.skills.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-full h-7 text-xs">
                    <a href={`/mentor/${m.id}`}>View Profile</a>
                  </Button>
                </div>
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
        {Array.from({
          length: Math.max(0, mentors.length - cardsPerView + 1),
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
