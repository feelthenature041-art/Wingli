import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  MessageSquare,
  Quote,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import TopMentorsCarousel from "@/components/TopMentorsCarousel";
import VideoLessonsCarousel from "@/components/VideoLessonsCarousel";
import BlogsCarousel from "@/components/BlogsCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AudienceCarousel from "@/components/AudienceCarousel";
import { mentorsData } from "@/data/mentorsData";

const logos = [
  {
    alt: "Qatar Airways",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F31f0412fe8604390ad4760e4e492b0e5?format=webp&width=600",
  },
  {
    alt: "IndiGo",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F2f540a82bd7d42148db750fe56430c6b?format=webp&width=600",
  },
  {
    alt: "Akasa Air",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fa191d48ed47e41149948d2ee054496d1?format=webp&width=600",
  },
  {
    alt: "Air India Express",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F2ca7e31b9f5240218cbf26d111d07b76?format=webp&width=600",
  },
  {
    alt: "SpiceJet",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fb6bb05d880194214bed2d19c8f974fa0?format=webp&width=600",
  },
  {
    alt: "Air India",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fcbe486fd03f043b29b68b8853d968974?format=webp&width=600",
  },
  {
    alt: "Emirates",
    src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Ffbf3c300c7354beb8a8a4f6f407dc4cd?format=webp&width=600",
  },
];

const blogPosts = [
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://images.pexels.com/photos/34976240/pexels-photo-34976240.jpeg",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://images.pexels.com/photos/31948477/pexels-photo-31948477.jpeg",
  },
  {
    title: "Career Growth in Aviation Industry",
    date: "September 28, 2024",
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
  },
  {
    title: "Interview Tips from Experienced Mentors",
    date: "September 20, 2024",
    img: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg",
  },
  {
    title: "Building Confidence for Your Aviation Career",
    date: "September 15, 2024",
    img: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
  },
];

const videoLessons = [
  {
    title: "How to Prepare for Air Hostess Interviews",
    instructor: "Vidya Rai",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3499e689d33e426a9ed553ec8139b091?format=webp&width=800",
  },
  {
    title: "Grooming & Presentation Masterclass",
    instructor: "Bibechana Rai",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3a4f41282efd428c93c53100230405ec?format=webp&width=800",
  },
  {
    title: "Communication & Etiquette for Cabin Crew",
    instructor: "Ruchita Lama",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F90dad98178bc4c65b8f1260e3ea1c032?format=webp&width=800",
  },
  {
    title: "Safety Procedures & Emergency Response",
    instructor: "Priya Singh",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3499e689d33e426a9ed553ec8139b091?format=webp&width=800",
  },
  {
    title: "International Airline Standards",
    instructor: "Deepika Sharma",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3a4f41282efd428c93c53100230405ec?format=webp&width=800",
  },
  {
    title: "Customer Service Excellence",
    instructor: "Neha Patel",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F90dad98178bc4c65b8f1260e3ea1c032?format=webp&width=800",
  },
];

const testimonials = [
  {
    text: "The guidance by Air India interview thanks to Amar's mentorship. Really recommended!",
    author: "Bryant",
  },
  {
    text: "I selected the Air India interview thanks to Amar's mentorship. Really recommended!",
    author: "Priya",
  },
  {
    text: "I selected the Air India interview thanks to Amar's mentorship. Really recommended!",
    author: "Rohit",
  },
  {
    text: "Excellent mentorship experience! Got selected at Emirates after the guidance.",
    author: "Anjali",
  },
  {
    text: "The practical tips and interview prep were incredibly helpful and effective.",
    author: "Vikram",
  },
  {
    text: "Best decision to take mentorship from Wingli. Highly recommended for all!",
    author: "Zara",
  },
];

const audiences = [
  {
    icon: "Users",
    title: "Students & Freshers",
    desc: "Perfect for beginners entering the aviation industry.",
  },
  {
    icon: "Briefcase",
    title: "Career Switchers",
    desc: "Professionals planning to join the airline industry.",
  },
  {
    icon: "Target",
    title: "Interview-Ready Aspirants",
    desc: "Sharpen your skills with real cabin crew mentors.",
  },
  {
    icon: "Plane",
    title: "Working Cabin Crew",
    desc: "Upskill and prepare for international airline opportunities.",
  },
  {
    icon: "TrendingUp",
    title: "Career Changers",
    desc: "Transform your career with expert guidance from industry leaders.",
  },
  {
    icon: "Zap",
    title: "Skill Enhancement Seekers",
    desc: "Develop specialized skills for advanced cabin crew positions.",
  },
  {
    icon: "Lightbulb",
    title: "Confidence Builders",
    desc: "Build confidence and overcome interview anxiety with mentors.",
  },
];

function AnimatedCounter({
  targetNumber,
  isPercentage = false,
}: {
  targetNumber: number;
  isPercentage?: boolean;
}) {
  const displayNumber = useCounterAnimation(targetNumber, 2000);
  return (
    <>
      {displayNumber}
      {isPercentage ? "%" : "+"}
    </>
  );
}

export default function Index() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 15%, hsla(210, 60%, 96%, 0.8) 0%, transparent 30%), " +
          "radial-gradient(circle at 85% 70%, hsla(210, 60%, 96%, 0.75) 0%, transparent 28%), " +
          "radial-gradient(circle at 55% 90%, hsla(210, 60%, 96%, 0.8) 0%, transparent 32%), " +
          "radial-gradient(circle at 92% 10%, hsla(210, 60%, 96%, 0.7) 0%, transparent 25%), " +
          "radial-gradient(circle at 20% 70%, hsla(210, 60%, 96%, 0.75) 0%, transparent 28%), " +
          "radial-gradient(circle at 70% 35%, hsla(210, 60%, 96%, 0.72) 0%, transparent 26%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Section */}
      <section className="container py-6 md:py-8">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="space-y-4">
            <div className="text-center px-2">
              <h1 className="text-[28px] font-extrabold leading-tight text-primary mb-4">
                Got Questions?
                <br />
                <span style={{ color: "#3D87C7" }}>We've Got Answers</span>
              </h1>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3c4d8654d58c478aa755903fda071d08?format=webp&width=800"
                alt="Cabin crew with airplane"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 max-w-[120px] pointer-events-none">
                <p className="text-white text-xs leading-snug font-medium drop-shadow-md">
                  Real guidance from real air hostesses to help you own your
                  career path
                </p>
              </div>
            </div>
            <div className="text-center px-2">
              <div className="flex gap-3 justify-center">
                <Button
                  asChild
                  className="h-9 pl-1 pr-4 rounded-full text-sm flex items-center gap-2"
                >
                  <a href="/chat-mentors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                      alt=""
                      className="h-5 w-5"
                    />
                    Chat Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-9 pl-1 pr-4 rounded-full text-sm bg-white/75 border-[#1b3d5a]/30 text-[#1b3d5a] flex items-center gap-2"
                >
                  <a href="/call-mentors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F953c6c3b574b4362ade62411724fab94?format=webp&width=100"
                      alt=""
                      className="h-5 w-5"
                    />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/tablet layout */}
        <div className="relative rounded-2xl overflow-hidden hidden md:block">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8a5cc1e75abc4ba0b088a3b236680251?format=webp&width=1600"
            alt="Cabin crew with airplane"
            className="block w-full h-auto object-contain"
          />
          <div className="absolute inset-0 pointer-events-none flex items-center">
            <div className="ml-auto max-w-xl p-10 pointer-events-auto">
              <h1 className="text-5xl font-extrabold tracking-tight text-primary leading-tight">
                Got Questions?{" "}
                <span style={{ color: "#3D87C7" }}>We've Got Answers</span>
              </h1>
              <p className="mt-4 text-slate-700 text-lg max-w-xl">
                Real guidance from real air hostesses to help you own your
                career path.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-full h-10 pl-2 pr-6 text-base flex items-center gap-2"
                >
                  <a href="/chat-mentors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                      alt=""
                      className="h-6 w-6"
                    />
                    Chat Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full h-10 pl-2 pr-6 text-base bg-white/75 border-[#1b3d5a]/30 text-[#1b3d5a] hover:bg-white/90 flex items-center gap-2"
                >
                  <a href="/call-mentors">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F953c6c3b574b4362ade62411724fab94?format=webp&width=100"
                      alt=""
                      className="h-6 w-6"
                    />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors from Leading Airlines */}
      <section className="container pt-2 md:pt-3 pb-6 md:pb-8">
        <h2 className="text-center text-slate-700 font-extrabold text-lg md:text-xl leading-tight">
          Our mentors come from leading airlines.
        </h2>
        <div className="mt-8 md:mt-10 overflow-hidden">
          <div className="flex items-center gap-12 w-[200%] animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <img
                key={l.alt + i}
                src={l.src}
                alt={l.alt}
                className="h-4 md:h-7 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-10 md:py-14">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">
              <AnimatedCounter targetNumber={100} />
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-0.5">
              Mentors
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">
              <AnimatedCounter targetNumber={1000} />
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-0.5">
              Sessions
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">
              <AnimatedCounter targetNumber={90} isPercentage={true} />
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-0.5">
              Satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Who Connects With Us */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <h2 className="text-left text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
          Who Connects With Us
        </h2>
        <AudienceCarousel audiences={audiences} />
      </section>

      {/* How it works and Top Rated Mentors - Two Column Layout (1/3 and 2/3) */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* How it works - 1/3 width */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              How Wingli Works
            </h2>
            <div className="mt-8 space-y-0">
              {[
                {
                  num: 1,
                  title: "Choose Your Mentor",
                  desc: "Browse real air hostesses from top airlines.",
                },
                {
                  num: 2,
                  title: "Book a Session",
                  desc: "Pick interview prep, grooming, or training topics.",
                },
                {
                  num: 3,
                  title: "Get Real Guidance",
                  desc: "Chat or call your mentor and clear all doubts.",
                },
              ].map((step, idx) => (
                <div key={step.num}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-primary text-white grid place-items-center font-bold text-lg">
                        {step.num}
                      </div>
                      {idx < 2 && (
                        <div className="w-1 h-10 bg-slate-300 mt-1"></div>
                      )}
                    </div>
                    <div className="pb-6 pt-1">
                      <h3 className="font-bold text-base">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Rated Mentors - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Top rated Mentors
              </h2>
              <Button asChild variant="outline" className="rounded-full gap-2">
                <a href="/find-a-mentor">
                  All Mentors <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <TopMentorsCarousel mentors={mentorsData} />
          </div>
        </div>
      </section>

      {/* Video Lessons */}
      <section className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100 py-10 md:py-14">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
            Video Lessons
          </h2>
          <VideoLessonsCarousel lessons={videoLessons} />
        </div>
      </section>

      {/* Blogs */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Blogs
          </h2>
          <Button asChild variant="outline" className="rounded-full gap-2">
            <a href="/blog">
              View all Blogs <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <BlogsCarousel posts={blogPosts} />
      </section>

      {/* About Wingli & Why Wingli */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              About Wingli
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Wingli is an online platform that helps aspiring air hostesses
              connect with real mentors from the aviation industry. We believe
              that personalized guidance and mentorship are crucial for success
              in this competitive field.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Why Wingli
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Access real mentors from leading airlines</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Get answers quickly through chat and calls</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Save time and money by learning what truly matters</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>90% satisfaction rate from our students</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
          Testimonial
        </h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>
    </div>
  );
}
