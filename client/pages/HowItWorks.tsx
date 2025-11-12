import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Find Your Perfect Mentor",
      description:
        "Browse through our curated list of experienced aviation mentors. Filter by airline, experience, specialization, and language to find the right match for your goals.",
      details: [
        "Search by mentor name or airline",
        "Filter by expertise and languages",
        "View detailed profiles and reviews",
      ],
    },
    {
      number: 2,
      icon: Users,
      title: "Choose Your Communication",
      description:
        "Select between two convenient options: Chat for quick questions and guidance, or Call for in-depth one-on-one sessions.",
      details: [
        "Chat Now for instant messaging",
        "Call Now for scheduled sessions",
        "Flexible timing based on your schedule",
      ],
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Connect & Learn",
      description:
        "Start your session with your mentor. Ask questions, get personalized advice, and receive feedback on your interview preparation and career goals.",
      details: [
        "Real-time communication",
        "Personalized guidance",
        "Expert insights from industry professionals",
      ],
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Achieve Your Goals",
      description:
        "Apply the feedback and guidance from your mentor to improve your skills, crack interviews, and accelerate your aviation career.",
      details: [
        "Interview preparation",
        "Career advancement",
        "Build confidence",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            How It Works
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Get expert mentorship from experienced aviation professionals in
            just a few simple steps. Connect with mentors who have been through
            the journey and can guide you to success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-lg border border-slate-200 bg-white p-8 hover:shadow-md transition-shadow"
              >
                {/* Step Number and Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Flow Diagram - Visual Connection */}
        <div className="my-12 hidden md:block">
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
            <ArrowRight className="w-5 h-5" />
            <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-12 text-center">
            Why Choose Wingli?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Expert Mentors
              </h3>
              <p className="text-slate-600">
                Learn from senior cabin crew members with years of experience at
                premium airlines worldwide.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Flexible Options
              </h3>
              <p className="text-slate-600">
                Choose between chat and call sessions based on your convenience
                and learning style.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Proven Results
              </h3>
              <p className="text-slate-600">
                Hundreds of successful candidates have cracked interviews and
                achieved their career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              How do I get started?
            </h3>
            <p className="text-slate-600">
              Simply visit our "Find a Mentor" page, browse through the
              available mentors, click "View Profile" to see their complete
              details, and then choose to either chat or call them based on your
              preference.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              What's the difference between Chat and Call?
            </h3>
            <p className="text-slate-600">
              Chat is ideal for quick questions and text-based guidance, while
              Call sessions provide more personalized, in-depth one-on-one
              mentorship through voice communication. Both are charged at the
              mentor's per-minute rate.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              How do mentors charge their fees?
            </h3>
            <p className="text-slate-600">
              Each mentor sets their own per-minute rate, which is clearly
              displayed on their profile. You only pay for the time you actually
              use during your session.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              Can I switch mentors?
            </h3>
            <p className="text-slate-600">
              Absolutely! You can connect with multiple mentors to get different
              perspectives and guidance. Browse profiles, read reviews, and find
              the mentors who best suit your learning needs.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              How can I filter mentors?
            </h3>
            <p className="text-slate-600">
              Use our advanced filtering options to search by airline, country,
              language, expertise area, years of experience, and more. This
              helps you find the perfect mentor match for your specific goals.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              What if I need help preparing for a specific airline?
            </h3>
            <p className="text-slate-600">
              Many of our mentors specialize in specific airlines. Use the
              skills filter to find mentors experienced with the airline you're
              targeting, and check their reviews for success stories.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary/90 text-lg mb-8 max-w-2xl mx-auto">
            Find the right mentor and take the first step towards your aviation
            career goals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              className="h-11 px-8 rounded-full font-semibold"
            >
              <Link to="/chat-mentors">Start with Chat</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="h-11 px-8 rounded-full font-semibold"
            >
              <Link to="/call-mentors">Start with Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
