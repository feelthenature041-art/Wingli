import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const logos = [
  { alt: "IndiGo", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fd47127e93b894105aec4b162d93dd7bb?format=webp&width=300" },
  { alt: "Air India", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F284e22c205354c83b2ec321280fe6b74?format=webp&width=300" },
  { alt: "Akasa Air", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fbbd1ee947a2e4c369dae1c6cb104c381?format=webp&width=300" },
  { alt: "SpiceJet", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F7fc2c2b88a04462dbfe5a1a6f83e47ea?format=webp&width=300" },
  { alt: "Air India Express", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Ff7f8e9c177fe4bdcacc8b13738dbd1e8?format=webp&width=300" },
  { alt: "Qatar Airways", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F867f469fd0cb4b1ebe9a87ae7f6326fe?format=webp&width=300" },
  { alt: "Emirates", src: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fbccf07849d2b48f08ba82e23d8072f5b?format=webp&width=300" },
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
        <h3 className="text-center text-slate-700 font-semibold">Get guidance from</h3>
        <div className="mt-6 overflow-hidden">
          <div className="flex items-center gap-12 w-[200%] animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <img
                key={l.alt + i}
                src={l.src}
                alt={l.alt}
                className="h-9 md:h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
