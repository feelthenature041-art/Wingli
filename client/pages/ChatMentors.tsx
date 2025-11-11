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

export default function ChatMentors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filteredAndSortedMentors = useMemo(() => {
    let filtered = mentorsData;

    if (searchQuery.trim()) {
      filtered = filtered.filter((mentor) =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    <section className="container py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
          Chat with Mentors
        </h1>
        <p className="text-muted-foreground mb-6">
          Connect instantly via chat for quick questions and guidance
        </p>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4" />
              Filter
            </button>

            <button
              onClick={() =>
                setSortBy(
                  sortBy === "rating"
                    ? "price"
                    : sortBy === "price"
                      ? "experience"
                      : "rating"
                )
              }
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-foreground"
            >
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </button>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 p-1">
            <a
              href="/chat-mentors"
              className="px-4 py-2 rounded-full font-semibold text-white bg-primary hover:bg-primary/90 transition-colors text-sm"
            >
              Chat
            </a>
            <a
              href="/call-mentors"
              className="px-4 py-2 rounded-full text-primary hover:bg-primary/5 transition-colors text-sm font-semibold"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAndSortedMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Mentor Image */}
            <div className="aspect-video overflow-hidden bg-slate-100">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mentor Info */}
            <div className="p-3">
              <h3 className="text-base font-semibold text-foreground">
                {mentor.name}
              </h3>
              <p className="text-xs text-slate-600 mb-2">{mentor.title}</p>

              {/* Rating and Experience */}
              <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                <span className="font-medium">
                  ⭐{mentor.rating}({mentor.reviews})
                </span>
                <span>•</span>
                <span>{mentor.years}yrs</span>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap gap-1 mb-3">
                {mentor.languages.slice(0, 2).map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                  >
                    {lang}
                  </span>
                ))}
                {mentor.languages.length > 2 && (
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                    +{mentor.languages.length - 2}
                  </span>
                )}
              </div>

              {/* Price */}
              <p className="text-xs font-semibold text-foreground mb-3">
                ₹{mentor.price}/Min
              </p>

              {/* Action Button - Chat Now Only */}
              <Button
                asChild
                className="w-full h-8 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center gap-1"
              >
                <a href="#" className="flex items-center justify-center gap-1">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                    alt=""
                    className="h-4 w-4"
                  />
                  <span className="text-xs font-medium">Chat Now</span>
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
