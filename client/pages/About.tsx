export default function About() {
  return (
    <>
      <section className="container py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* About Wingli */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-primary">
              About Wingli
            </h1>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Wingli is an online platform that helps aspiring air hostesses
                connect with real flight attendants for genuine guidance,
                practical tips, and personal mentorship. The goal is to make the
                journey of becoming a cabin crew easier, clearer, and more
                achievable.
              </p>
              <p>
                Whether you are just starting or preparing for interviews,
                Wingli connects you with mentors who have real experience in the
                industry. They guide you with grooming, communication, interview
                preparation, and valuable insights about airline life.
              </p>
            </div>
          </div>

          {/* Why Wingli */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-primary">
              Why Wingli
            </h1>
            <div className="space-y-4 text-slate-600">
              <p className="text-base leading-relaxed">
                Becoming an air hostess can feel confusing with too many
                courses, mixed information, and no real guidance. Wingli helps
                you find the right direction with support from real
                professionals.
              </p>

              <div>
                <h3 className="font-bold text-slate-800 mb-3">
                  Why aspirants choose Wingli:
                </h3>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-base">
                    <span className="text-primary font-bold">•</span>
                    <span>Learn directly from experienced air hostesses.</span>
                  </li>
                  <li className="flex gap-3 text-base">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Get answers quickly through one-on-one sessions.
                    </span>
                  </li>
                  <li className="flex gap-3 text-base">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Understand the real process from training to interviews.
                    </span>
                  </li>
                  <li className="flex gap-3 text-base">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Save time and money by learning what truly matters.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
                Wingli bridges the gap between dream and reality by giving you
                the clarity and confidence to start your aviation career.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
