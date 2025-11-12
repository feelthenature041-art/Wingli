import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mentorsData } from "@/data/mentorsData";
import { Star } from "lucide-react";

export default function MentorProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const mentorId = parseInt(id || "0");
  const mentor = mentorsData.find((m) => m.id === mentorId);

  if (!mentor) {
    return (
      <section className="container py-8 md:py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Mentor Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The mentor profile you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Mentor Card - Top Section */}
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden mb-8 flex flex-col md:flex-row">
          {/* Mentor Image */}
          <div className="w-full md:w-80 h-60 md:h-auto flex-shrink-0 overflow-hidden bg-slate-100">
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mentor Info */}
          <div className="p-6 flex-1 flex flex-col">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {mentor.name}
            </h1>
            <p className="text-lg text-slate-600 mb-4">{mentor.title}</p>

            {/* Rating and Experience */}
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">
                  ⭐{mentor.rating}
                </span>
                <span className="text-slate-600">({mentor.reviews} reviews)</span>
              </div>
              <span>•</span>
              <span className="font-medium">{mentor.years} years experience</span>
              <span>•</span>
              <span className="font-medium">{mentor.country}</span>
            </div>

            {/* Languages */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Languages</p>
              <div className="flex flex-wrap gap-2">
                {mentor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium text-slate-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Specializations</p>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-slate-200">
              <p className="text-xl font-bold text-foreground">
                ₹{mentor.price}/Min
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {/* Chat Now Button */}
              <Button
                asChild
                className="flex-1 h-10 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
              >
                <a href="#" className="flex items-center justify-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                    alt=""
                    className="h-4 w-4 brightness-0 invert"
                  />
                  <span className="font-medium">Chat Now</span>
                </a>
              </Button>
              {/* Call Now Button */}
              <Button
                asChild
                className="flex-1 h-10 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
              >
                <a href="#" className="flex items-center justify-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F953c6c3b574b4362ade62411724fab94?format=webp&width=100"
                    alt=""
                    className="h-4 w-4 brightness-0 invert"
                  />
                  <span className="font-medium">Call Now</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">About Me</h2>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-slate-700 leading-relaxed text-base">
              {mentor.aboutMe}
            </p>
          </div>
        </div>

        {/* User Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Reviews ({mentor.userReviews.length})
          </h2>
          <div className="space-y-4">
            {mentor.userReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">
                      {review.reviewer}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
