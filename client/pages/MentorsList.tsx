import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpDown } from "lucide-react";

const mentorsData = [
  {
    id: 1,
    name: "Vidya Rai",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 2,
    name: "Bibechana Rai",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 3,
    name: "Ruchita Lama",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 4,
    name: "Priya Singh",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 5,
    name: "Aisha Khan",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 6,
    name: "Deepika Sharma",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 7,
    name: "Neha Patel",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 8,
    name: "Sakshi Verma",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    id: 9,
    name: "Anushka Desai",
    title: "Sr. Cabin Crew Air India",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
];

export default function MentorsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filteredAndSortedMentors = useMemo(() => {
    let filtered = mentorsData;

    if (searchQuery.trim()) {
      filtered = filtered.filter((mentor) =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "experience") {
      filtered.sort((a, b) => b.years - a.years);
    }

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <section className="container py-6 md:py-12">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-3xl font-extrabold tracking-tight mb-4 md:mb-6">
          Find Your Mentor
        </h1>

        {/* Search and Filter Bar */}
        <div className="flex flex-col gap-3">
          {/* Row 1: Search, Filter, Sort */}
          <div className="flex gap-2 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <button className="flex items-center gap-1 px-3 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-foreground flex-shrink-0">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>

            <button
              onClick={() =>
                setSortBy(
                  sortBy === "rating"
                    ? "price"
                    : sortBy === "price"
                      ? "experience"
                      : "rating",
                )
              }
              className="flex items-center gap-1 px-3 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-foreground flex-shrink-0"
            >
              <ArrowUpDown className="h-4 w-4" />
              <span className="hidden sm:inline">Sort</span>
            </button>
          </div>

          {/* Row 2: Chat/Call Toggle */}
          <div className="flex gap-2 md:hidden">
            <Button className="flex-1 h-9 rounded-full bg-slate-900 hover:bg-slate-800">
              Chat
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-9 rounded-full border-slate-300 hover:bg-slate-50"
            >
              Call
            </Button>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filteredAndSortedMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Mentor Image */}
            <div className="aspect-square md:aspect-video overflow-hidden bg-slate-100">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mentor Info */}
            <div className="p-2 md:p-3">
              <h3 className="text-sm md:text-base font-semibold text-foreground">
                {mentor.name}
              </h3>
              <p className="text-xs text-slate-600 mb-2 line-clamp-1">
                {mentor.title}
              </p>

              {/* Rating and Experience */}
              <div className="flex items-center gap-1 text-xs text-slate-600 mb-2">
                <span className="font-medium text-xs">⭐{mentor.rating}</span>
                <span>•</span>
                <span className="text-xs">{mentor.years}y</span>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                {mentor.languages.slice(0, 1).map((lang) => (
                  <span
                    key={lang}
                    className="px-1.5 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                  >
                    {lang}
                  </span>
                ))}
                {mentor.languages.length > 1 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                    +{mentor.languages.length - 1}
                  </span>
                )}
              </div>

              {/* Price */}
              <p className="text-xs font-semibold text-foreground mb-2 md:mb-3">
                ₹{mentor.price}/Min
              </p>

              {/* Action Buttons */}
              <div className="flex gap-1 md:gap-2">
                <Button
                  asChild
                  className="flex-1 h-7 md:h-8 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center gap-1"
                >
                  <a
                    href="#"
                    className="flex items-center justify-center gap-1"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                      alt=""
                      className="h-3 md:h-4 w-3 md:w-4"
                    />
                    <span className="text-xs font-medium hidden md:inline">
                      Chat Now
                    </span>
                    <span className="text-xs font-medium md:hidden">Chat</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-7 md:h-8 rounded-full border border-slate-300 hover:bg-slate-50 text-xs md:text-xs font-medium"
                >
                  <span className="hidden md:inline">View Profile</span>
                  <span className="md:hidden">Profile</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
