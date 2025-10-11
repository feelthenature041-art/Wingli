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
      <section className="container py-10 md:py-16">
        <div className="relative overflow-hidden rounded-2xl border bg-sky-50/60">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8a5cc1e75abc4ba0b088a3b236680251?format=webp&width=1600"
            alt="Cabin crew with airplane"
            className="absolute inset-0 h-full w-full object-cover object-left pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/0 via-white/0 to-white/40" />

          <div className="relative z-10 grid md:grid-cols-2 items-center min-h-[340px] md:min-h-[380px] p-6 md:p-12">
            <div className="hidden md:block" />
            <div className="md:col-start-2">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight drop-shadow-sm">
                Got Questions? We’ve Got Answers
              </h1>
              <p className="mt-4 text-slate-700 text-base md:text-lg max-w-xl drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]">
                Real guidance from real air hostesses to help you own your career path.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full px-6">
                  <Link to="/find-a-mentor">Chat with Mentor</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 bg-white/60 backdrop-blur-sm border-white/70 text-slate-700 hover:bg-white/80"
                >
                  <Link to="/find-a-mentor">Talk to Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 md:py-10">
        <h3 className="text-center text-slate-700 font-semibold">Get guidance from</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>
    </>
  );
}
