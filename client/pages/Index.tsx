import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const logos = [
  { alt: "Qatar Airways", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F31f0412fe8604390ad4760e4e492b0e5?format=webp&width=600" },
  { alt: "IndiGo", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F2f540a82bd7d42148db750fe56430c6b?format=webp&width=600" },
  { alt: "Akasa Air", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fa191d48ed47e41149948d2ee054496d1?format=webp&width=600" },
  { alt: "Air India Express", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F2ca7e31b9f5240218cbf26d111d07b76?format=webp&width=600" },
  { alt: "SpiceJet", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fb6bb05d880194214bed2d19c8f974fa0?format=webp&width=600" },
  { alt: "Air India", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fcbe486fd03f043b29b68b8853d968974?format=webp&width=600" },
  { alt: "Emirates", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Ffbf3c300c7354beb8a8a4f6f407dc4cd?format=webp&width=600" },
];

export default function Index() {
  return (
    <>
      <section className="container py-6 md:py-8">
        <div className="relative overflow-hidden rounded-2xl border">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8a5cc1e75abc4ba0b088a3b236680251?format=webp&width=1600"
            alt="Cabin crew with airplane"
            className="absolute inset-0 h-full w-full object-cover object-left pointer-events-none select-none"
          />

          <div className="relative z-10 grid md:grid-cols-2 items-center min-h-[320px] md:min-h-[360px] p-6 md:p-10">
            <div className="hidden md:block" />
            <div className="md:col-start-2">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight">
                Got Questions? We’ve Got Answers
              </h1>
              <p className="mt-4 text-slate-700 text-base md:text-lg max-w-xl">
                Real guidance from real air hostesses to help you own your career path.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full px-6">
                  <Link to="/find-a-mentor">Chat with Mentor</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 bg-white/70 backdrop-blur-sm border-white/70 text-slate-700 hover:bg-white/80">
                  <Link to="/find-a-mentor">Talk to Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <h2 className="text-center text-slate-700 font-extrabold text-xl md:text-2xl">Get guidance from</h2>
        <div className="mt-6 overflow-hidden">
          <div className="flex items-center gap-12 w-[200%] animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <img
                key={l.alt + i}
                src={l.src}
                alt={l.alt}
                className="h-7 md:h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
