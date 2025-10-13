import { Button } from "@/components/ui/button";
import { Search, Calendar, MessageSquare, Quote } from "lucide-react";
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

export default function Index() {
  return (
    <>
      <section className="container py-6 md:py-8">
        <div className="relative rounded-2xl overflow-hidden">
          <picture className="block w-full">
            <source media="(max-width: 767px)" srcSet="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fe83ee2d25c284fb7b3c885fbc03254f5?format=webp&width=1200" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8a5cc1e75abc4ba0b088a3b236680251?format=webp&width=1600"
              alt="Cabin crew with airplane"
              className="block w-full h-auto object-contain"
            />
          </picture>
          <div className="absolute inset-0 pointer-events-none flex items-center">
            <div className="ml-auto max-w-xl p-6 md:p-10 pointer-events-auto">
              <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight">
                Got Questions? We’ve Got Answers
              </h1>
              <p className="mt-3 md:mt-4 text-slate-700 text-sm md:text-lg max-w-xl">
                Real guidance from real air hostesses to help you own your
                career path.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full h-9 px-4 md:h-10 md:px-6 text-sm md:text-base">
                  <a href="/find-a-mentor">Chat with Mentor</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full h-9 px-4 md:h-10 md:px-6 text-sm md:text-base bg-white/70 backdrop-blur-sm border-white/70 text-slate-700 hover:bg-white/80"
                >
                  <a href="/find-a-mentor">Talk to Mentor</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-2 md:pt-3 pb-6 md:pb-8">
        <h2 className="text-center text-slate-700 font-extrabold text-xl md:text-2xl">
          Mentors from Leading Airlines
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

      {/* Section 2: How it works */}
      <section className="container py-10 md:py-14">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          How Wingli Works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 bg-white/70">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-lg">Choose Your Mentor</h3>
            <p className="text-muted-foreground mt-1">
              Browse real air hostesses from top airlines.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-lg">Book a Session</h3>
            <p className="text-muted-foreground mt-1">
              Pick interview prep, grooming, or training topics.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/70">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-lg">Get Real Guidance</h3>
            <p className="text-muted-foreground mt-1">
              Chat or call your mentor and clear all doubts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Featured mentors */}
      <section className="container py-10 md:py-14">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          Featured Mentors
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Aisha Khan",
              airline: "IndiGo",
              years: 6,
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Neha Sharma",
              airline: "Air India",
              years: 8,
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Sara Malik",
              airline: "Qatar Airways",
              years: 5,
              img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Riya Patel",
              airline: "Emirates",
              years: 7,
              img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=800&auto=format&fit=crop",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border overflow-hidden bg-white"
            >
              <img
                src={m.img}
                alt={m.name}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {m.airline} • {m.years}+ yrs
                </p>
                <Button asChild className="mt-4 w-full rounded-full">
                  <a href="/find-a-mentor">Book Session</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="container py-10 md:py-14">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          Success Stories
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "My mentor helped me prepare for my IndiGo interview — I got selected!",
            "Great grooming tips and confidence boost. Booked my second session already.",
            "Mock interview felt real. Feedback was spot-on and actionable.",
          ].map((t, i) => (
            <figure key={i} className="rounded-2xl border p-6 bg-white/70">
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-3 text-slate-800">{t}</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                — Aspirant {i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="container py-10 md:py-14">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          FAQs
        </h2>
        <div className="mt-6 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who are the mentors?</AccordionTrigger>
              <AccordionContent>
                Verified cabin crew from leading airlines with years of
                experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I book a session?</AccordionTrigger>
              <AccordionContent>
                Choose a mentor, pick a topic and time, then confirm payment to
                book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What topics can I ask about?</AccordionTrigger>
              <AccordionContent>
                Interview prep, grooming, communication, training, career paths,
                and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you support chat and calls?
              </AccordionTrigger>
              <AccordionContent>
                Yes—sessions can be chat-only or audio/video calls based on your
                preference.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I reschedule or cancel?</AccordionTrigger>
              <AccordionContent>
                You can reschedule up to 24 hours before the session.
                Cancellations follow mentor policy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
