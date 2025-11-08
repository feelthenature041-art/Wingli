import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#1b3d5a] text-white">
      <div className="container grid gap-8 py-12 md:grid-cols-5">
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3186ff092c5e4853b64463d211bf2750?format=webp&width=300"
              alt="wingli"
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/80 max-w-sm text-sm">
            Your flight path to success. Book trusted cabin crew mentors for
            every milestone.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">PLATFORM</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="hover:text-white transition">
                How it works?
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">SUPPORT</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <a href="/faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-white transition">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">LEGAL</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms and Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">REGISTRATION</h4>
          <div className="space-y-3">
            <p className="text-white/80 text-sm">Follow Us</p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-70 transition"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F01a5dbfcdbad470095658414e2902318?format=webp&width=64"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:opacity-70 transition"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fa7bf0e95c9ba44029a6ad5a17e97b936?format=webp&width=64"
                  alt="YouTube"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-70 transition"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2Fb23ca1f889eb408c82fdeaf9a3980845?format=webp&width=64"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4 text-sm">
          <p className="text-white/70">
            © {new Date().getFullYear()} wingli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
