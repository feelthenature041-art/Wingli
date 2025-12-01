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

const mentors = [
  {
    name: "Vidya Rai",
    airline: "IndiGo",
    years: 6,
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Ff222486b76124f55b28eb28631058b0e?format=webp&width=800",
  },
  {
    name: "Bibechana Rai",
    airline: "Air India",
    years: 8,
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Ff222486b76124f55b28eb28631058b0e?format=webp&width=800",
  },
  {
    name: "Ruchita Lama",
    airline: "Qatar Airways",
    years: 5,
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Ff222486b76124f55b28eb28631058b0e?format=webp&width=800",
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
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-6 md:py-8">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="space-y-4">
            <div className="text-center px-2">
              <h1 className="text-[28px] font-extrabold leading-tight text-primary mb-4">
                Got Questions?
                <br />
                We've Got Answers
              </h1>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3c4d8654d58c478aa755903fda071d08?format=webp&width=800"
                alt="Cabin crew with airplane"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4">
                <p className="text-white text-sm leading-snug font-medium">
                  Real guidance from real air hostesses to help you on your
                  career path.
                </p>
              </div>
            </div>
            <div className="text-center px-2">
              <div className="flex gap-3 justify-center">
                <Button asChild className="h-10 pl-2 pr-6 rounded-full text-sm flex items-center gap-2">
                  <a href="/find-a-mentor">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                      alt=""
                      className="h-5 w-5"
                    />
                    Chat with Mentor
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 pl-2 pr-6 rounded-full text-sm bg-white/75 border-[#1b3d5a]/30 text-[#1b3d5a] flex items-center gap-2"
                >
                  <a href="/find-a-mentor">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F953c6c3b574b4362ade62411724fab94?format=webp&width=100"
                      alt=""
                      className="h-5 w-5"
                    />
                    Talk to Mentor
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
                Got Questions? We've Got Answers
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
                  <a href="/find-a-mentor">
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
                  <a href="/find-a-mentor">
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
      <section className="pt-2 md:pt-3 pb-6 md:pb-8">
        <h2 className="text-center text-slate-700 font-extrabold text-xl md:text-2xl">
          Our mentors come from leading airlines.
        </h2>
        <div className="mt-8 md:mt-10 overflow-hidden">
          <div className="flex items-center gap-12 w-[200%] animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <img
                key={l.alt + i}
                src={l.src}
                alt={l.alt}
                className="h-6 md:h-7 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-10 md:py-14">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">
              100+
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-2">Mentors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">
              1000+
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-2">Sessions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">
              90%
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-2">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </section>

      {/* Ask any topic with */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <h2 className="text-left text-2xl md:text-3xl font-extrabold tracking-tight">
          Who Connects With Us
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🎓",
              title: "Students & Freshers",
              desc: "Perfect for beginners entering the aviation industry.",
            },
            {
              icon: "💼",
              title: "Career Switchers",
              desc: "Professionals planning to join the airline industry.",
            },
            {
              icon: "🔥",
              title: "Interview-Ready Aspirants",
              desc: "Sharpen your skills with real cabin crew mentors.",
            },
            {
              icon: "✈️",
              title: "Working Cabin Crew",
              desc: "Upskill and prepare for international airline opportunities.",
            },
          ].map((audience, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 bg-white text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4 h-auto">{audience.icon}</div>
              <h3 className="font-semibold text-lg">{audience.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">
                {audience.desc}
              </p>
            </div>
          ))}
        </div>
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
            <div className="grid grid-cols-3 gap-4">
              {mentors.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white"
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
                        4.8(101) | {m.years}+yrs
                      </span>
                    </div>
                    <div className="flex gap-1 flex-wrap mb-2">
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        Interview Prep
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        Airline Specific Tips
                      </span>
                    </div>
                    <Button asChild className="w-full rounded-full h-7 text-xs">
                      <a href="/find-a-mentor">View Profile</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-1">
              <button className="h-2 w-2 rounded-full bg-primary"></button>
              <button className="h-2 w-2 rounded-full bg-slate-300"></button>
              <button className="h-2 w-2 rounded-full bg-slate-300"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lessons */}
      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
          Video Lessons
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoLessons.map((lesson, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden bg-white hover:shadow-lg transition"
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
        <div className="flex justify-center mt-6 gap-1">
          <button className="h-2 w-2 rounded-full bg-primary"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden bg-white hover:shadow-lg transition"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover bg-slate-200"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {post.date}
                </p>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <a href="/blog">Read More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-1">
          <button className="h-2 w-2 rounded-full bg-primary"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
        </div>
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
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          Testimonial
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "The guidance by Air India interview thanks to Amar's mentorship. Really recommended!",
            "I selected the Air India interview thanks to Amar's mentorship. Really recommended!",
            "I selected the Air India interview thanks to Amar's mentorship. Really recommended!",
          ].map((t, i) => (
            <figure key={i} className="rounded-2xl border p-6 bg-white/70">
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-3 text-slate-800">{t}</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                — Bryant
              </figcaption>
              <Button asChild variant="outline" className="mt-4 rounded-full">
                <a href="#">Read More</a>
              </Button>
            </figure>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-1">
          <button className="h-2 w-2 rounded-full bg-primary"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
        </div>
      </section>
    </>
  );
}
