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
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    name: "Bibechana Rai",
    airline: "Air India",
    years: 8,
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
  {
    name: "Ruchita Lama",
    airline: "Qatar Airways",
    years: 5,
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
  },
];

const blogPosts = [
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
];

const videoLessons = [
  {
    title: "How to Prepare for Air Hostess Interviews",
    instructor: "Vidya Rai",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
  {
    title: "Grooming & Presentation Masterclass",
    instructor: "Bibechana Rai",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
  {
    title: "Communication & Etiquette for Cabin Crew",
    instructor: "Ruchita Lama",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-6 md:py-8">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="rounded-2xl border bg-white/70 p-3 shadow-sm">
            <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F06b45d943d354a8fa12f91c8e495963f?format=webp&width=800"
                alt="Cabin crew with airplane"
                className="h-28 w-full object-contain"
              />
              <div>
                <h1 className="text-[22px] font-extrabold leading-snug text-primary">
                  Got Questions?
                  <br />
                  We've Got Answers
                </h1>
                <p className="mt-2 text-slate-700 text-[13px] leading-snug">
                  Real guidance from real air hostesses to help you on your
                  career path.
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Button asChild className="h-9 px-4 rounded-full text-sm">
                <a href="/find-a-mentor">Chat with Mentor</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-9 px-4 rounded-full text-sm bg-white/75 border-[#1b3d5a]/30 text-[#1b3d5a]"
              >
                <a href="/find-a-mentor">Talk to Mentor</a>
              </Button>
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
                <Button asChild className="rounded-full h-10 px-6 text-base">
                  <a href="/find-a-mentor">Chat with Mentor</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full h-10 px-6 text-base bg-white/75 border-[#1b3d5a]/30 text-[#1b3d5a] hover:bg-white/90"
                >
                  <a href="/find-a-mentor">Talk to Mentor</a>
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

      {/* The 3Ws of Wingli */}
      <section className="container py-10 md:py-14">
        <h2 className="text-left text-2xl md:text-3xl font-extrabold tracking-tight">
          The 3Ws of Wingli
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-[#1b3d5a] text-white p-6">
            <h3 className="font-bold text-lg">WHY - Why Wingli?</h3>
            <p className="text-white/80 mt-2">
              To make real guidance accessible for every aspiring cabin crew
              member. Get answers directly from those who've been there.
            </p>
          </div>
          <div className="rounded-xl bg-[#1b3d5a] text-white p-6">
            <h3 className="font-bold text-lg">WHO - Who can connect?</h3>
            <p className="text-white/80 mt-2">
              Anyone aspiring to join the aviation industry. Connect with real
              mentors who are real right answer to your questions.
            </p>
          </div>
          <div className="rounded-xl bg-[#1b3d5a] text-white p-6">
            <h3 className="font-bold text-lg">WHAT - What happens here?</h3>
            <p className="text-white/80 mt-2">
              You can chat, call, or get trained by experienced mentors in areas
              like interview prep, grooming, flight experience and career
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Ask any topic with */}
      <section className="container py-10 md:py-14">
        <h2 className="text-left text-2xl md:text-3xl font-extrabold tracking-tight">
          Ask any topic with
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Topic 1",
              desc: "Ask anything related to Topic 1. Analysis, mentorship, highly recommended!",
            },
            {
              title: "Topic 1",
              desc: "Ask anything related to Topic 1. Analysis, mentorship, highly recommended!",
            },
            {
              title: "Topic 1",
              desc: "Ask anything related to Topic 1. Analysis, mentorship, highly recommended!",
            },
          ].map((topic, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 bg-white text-center hover:shadow-lg transition"
            >
              <div className="h-16 w-16 rounded-full bg-slate-200 mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg">{topic.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{topic.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-1">
          <button className="h-2 w-2 rounded-full bg-primary"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-10 md:py-14">
        <h2 className="text-left text-2xl md:text-3xl font-extrabold tracking-tight">
          How Wingli Works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 bg-white/70">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">
              1
            </div>
            <h3 className="mt-4 font-bold text-lg">Choose Your Mentor</h3>
            <p className="text-muted-foreground mt-1">
              Browse real air hostesses from top airlines.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">
              2
            </div>
            <h3 className="mt-4 font-bold text-lg">Book a Session</h3>
            <p className="text-muted-foreground mt-1">
              Pick interview prep, grooming, or training topics.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">
              3
            </div>
            <h3 className="mt-4 font-bold text-lg">Get Real Guidance</h3>
            <p className="text-muted-foreground mt-1">
              Chat or call your mentor and clear all doubts.
            </p>
          </div>
        </div>
      </section>

      {/* Top Rated Mentors */}
      <section className="container py-10 md:py-14">
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border overflow-hidden bg-white"
            >
              <img
                src={m.img}
                alt={m.name}
                className="h-48 w-full object-cover bg-slate-200"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {m.airline} • {m.years}+ yrs
                </p>
                <Button asChild className="mt-4 w-full rounded-full">
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
      </section>

      {/* Blogs */}
      <section className="container py-10 md:py-14">
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

      {/* Video Lessons */}
      <section className="container py-10 md:py-14">
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

      {/* About Wingli & Why Wingli */}
      <section className="container py-10 md:py-14">
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
      <section className="container py-10 md:py-14">
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
