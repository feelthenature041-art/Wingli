import { Button } from "@/components/ui/button";

export default function FindMentor() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Connect with Expert Mentors
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8">
            Get personalized guidance from experienced flight attendants. Choose the best way to connect with your mentor.
          </p>

          {/* CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Chat Now */}
            <div className="flex flex-col items-start">
              <Button
                asChild
                className="h-10 pl-2 pr-6 rounded-full text-base flex items-center gap-2 mb-4"
              >
                <a href="#chat">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Faabe3c1093824ea29bac56af59e4fd99?format=webp&width=100"
                    alt=""
                    className="h-6 w-6"
                  />
                  Chat Now
                </a>
              </Button>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect instantly with a mentor for quick questions and real-time guidance. Perfect for immediate advice on interviews, career tips, and industry insights.
              </p>
            </div>

            {/* Call Now */}
            <div className="flex flex-col items-start">
              <Button
                asChild
                variant="outline"
                className="h-10 pl-2 pr-6 rounded-full text-base bg-white/75 border-[#1b3d5a]/30 text-[#1b3d5a] hover:bg-white/90 flex items-center gap-2 mb-4"
              >
                <a href="#call">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F953c6c3b574b4362ade62411724fab94?format=webp&width=100"
                    alt=""
                    className="h-6 w-6"
                  />
                  Call Now
                </a>
              </Button>
              <p className="text-sm text-slate-600 leading-relaxed">
                Schedule a one-on-one call for in-depth discussions. Ideal for comprehensive career planning, mock interviews, and personalized feedback on your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-12 md:py-16 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
            Why Connect with Our Mentors?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">Experienced Professionals</h3>
              <p className="text-sm text-slate-600">
                Learn from mentors with years of experience in top airlines worldwide.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">Personalized Guidance</h3>
              <p className="text-sm text-slate-600">
                Get advice tailored to your goals, experience, and career aspirations.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-slate-600">
                Choose chat or call based on your availability and preference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
