import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpDown, X } from "lucide-react";
import { mentorsData } from "@/data/mentorsData";

const allLanguages = [
  ...new Set(mentorsData.flatMap((m) => m.languages)),
].sort();
const allSkills = [...new Set(mentorsData.flatMap((m) => m.skills))].sort();
const allCountries = [...new Set(mentorsData.map((m) => m.country))].sort();
const allAirlines = [...new Set(mentorsData.map((m) => m.airline))].sort();
const allGenders = ["Female", "Male"];

type FilterType = "languages" | "skills" | "countries" | "genders" | "airlines";

export default function CallMentors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filters, setFilters] = useState({
    languages: [] as string[],
    skills: [] as string[],
    countries: [] as string[],
    genders: [] as string[],
    airlines: [] as string[],
  });

  const toggleFilter = (filterType: FilterType, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      languages: [],
      skills: [],
      countries: [],
      genders: [],
      airlines: [],
    });
  };

  const hasActiveFilters = Object.values(filters).some((arr) => arr.length > 0);

  const filteredAndSortedMentors = useMemo(() => {
    let filtered = mentorsData;

    if (searchQuery.trim()) {
      filtered = filtered.filter((mentor) =>
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (filters.languages.length > 0) {
      filtered = filtered.filter((mentor) =>
        filters.languages.some((lang) => mentor.languages.includes(lang)),
      );
    }

    if (filters.skills.length > 0) {
      filtered = filtered.filter((mentor) =>
        filters.skills.some((skill) => mentor.skills.includes(skill)),
      );
    }

    if (filters.countries.length > 0) {
      filtered = filtered.filter((mentor) =>
        filters.countries.includes(mentor.country),
      );
    }

    if (filters.genders.length > 0) {
      filtered = filtered.filter((mentor) =>
        filters.genders.includes(mentor.gender),
      );
    }

    if (filters.airlines.length > 0) {
      filtered = filtered.filter((mentor) =>
        filters.airlines.includes(mentor.airline),
      );
    }

    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "experience") {
      filtered.sort((a, b) => b.years - a.years);
    } else if (sortBy === "airline") {
      filtered.sort((a, b) => a.airline.localeCompare(b.airline));
    }

    return filtered;
  }, [searchQuery, sortBy, filters]);

  const sortOptions = [
    { value: "rating", label: "Rating" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "experience", label: "Experience" },
    { value: "airline", label: "Airline" },
  ];

  return (
    <section className="container py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
          Call with Mentors
        </h1>
        <p className="text-muted-foreground mb-6">
          Schedule a one-on-one call for in-depth guidance and personalized
          feedback
        </p>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-6">
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

            <div className="relative">
              <button
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-foreground"
              >
                <Filter className="h-4 w-4" />
                Filter
                {hasActiveFilters && (
                  <span className="ml-1 inline-block w-2 h-2 bg-primary rounded-full"></span>
                )}
              </button>

              {showFilterMenu && (
                <div className="absolute top-full mt-2 left-0 bg-white border border-slate-200 rounded-lg shadow-lg p-4 z-50 w-96 max-h-96 overflow-y-auto">
                  {/* Languages */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {allLanguages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => toggleFilter("languages", lang)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            filters.languages.includes(lang)
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {allSkills.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => toggleFilter("skills", skill)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            filters.skills.includes(skill)
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2">Country</h3>
                    <div className="flex flex-wrap gap-2">
                      {allCountries.map((country) => (
                        <button
                          key={country}
                          onClick={() => toggleFilter("countries", country)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            filters.countries.includes(country)
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Airlines */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2">Airline</h3>
                    <div className="flex flex-wrap gap-2">
                      {allAirlines.map((airline) => (
                        <button
                          key={airline}
                          onClick={() => toggleFilter("airlines", airline)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            filters.airlines.includes(airline)
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {airline}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2">Gender</h3>
                    <div className="flex flex-wrap gap-2">
                      {allGenders.map((gender) => (
                        <button
                          key={gender}
                          onClick={() => toggleFilter("genders", gender)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            filters.genders.includes(gender)
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="w-full mt-4 text-sm text-primary hover:text-primary/80 font-medium"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-foreground">
                <ArrowUpDown className="h-4 w-4" />
                Sort
              </button>
              <div className="absolute left-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden hidden group-hover:block z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      sortBy === option.value
                        ? "bg-primary text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 p-1">
            <Link
              to="/chat-mentors"
              className="px-4 py-2 rounded-full text-primary hover:bg-primary/5 transition-colors text-sm font-semibold"
            >
              Chat
            </Link>
            <Link
              to="/call-mentors"
              className="px-4 py-2 rounded-full font-semibold text-white bg-primary hover:bg-primary/90 transition-colors text-sm"
            >
              Call
            </Link>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAndSortedMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow max-w-sm"
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

              {/* Action Buttons */}
              <div className="flex gap-2">
                {/* Call Now Button */}
                <Button
                  asChild
                  className="flex-1 h-9 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                >
                  <a href="#" className="flex items-center justify-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F953c6c3b574b4362ade62411724fab94?format=webp&width=100"
                      alt=""
                      className="h-4 w-4 brightness-0 invert"
                    />
                    <span className="text-xs font-medium">Call Now</span>
                  </a>
                </Button>
                {/* View Profile Button */}
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 h-9 rounded-full flex items-center justify-center"
                >
                  <a href="#">
                    <span className="text-xs font-medium">View Profile</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedMentors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">
            No mentors found matching your filters.
          </p>
        </div>
      )}
    </section>
  );
}
