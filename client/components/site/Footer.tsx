import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[hsl(215_43%_15%)] text-white/90">
      <div className="container grid gap-8 py-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
              <defs>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7fb3ff" />
                  <stop offset="100%" stopColor="#5aa5ff" />
                </linearGradient>
              </defs>
              <path fill="url(#g2)" d="M6 40c8-4 18-16 28-18s18 2 24 4c-8 0-14 2-22 8S18 46 6 40Z"/>
              <path fill="url(#g2)" d="M6 40c12 4 23 1 32-6 4-3 8-5 14-6-10 6-18 22-36 22-4 0-8-4-10-10Z"/>
            </svg>
            <span className="text-xl font-bold tracking-tight">wingli</span>
          </div>
          <p className="text-white/70 max-w-sm">
            Your flight path to success. Book trusted cabin crew mentors for every milestone.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">PLATFORM</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">How it works?</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">SUPPORT</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">LEGAL</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms and Services</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} wingli. All rights reserved.</p>
          <div className="flex items-center gap-4 opacity-90">
            <a href="#" aria-label="Instagram" className="hover:opacity-100">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F01a5dbfcdbad470095658414e2902318?format=webp&width=64" alt="Instagram" className="h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-100">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fa7bf0e95c9ba44029a6ad5a17e97b936?format=webp&width=64" alt="YouTube" className="h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-100">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fb23ca1f889eb408c82fdeaf9a3980845?format=webp&width=64" alt="Facebook" className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
