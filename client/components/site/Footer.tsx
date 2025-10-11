import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 bg-white text-slate-700">
      <div className="container grid gap-8 py-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3186ff092c5e4853b64463d211bf2750?format=webp&width=300"
              alt="wingli"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-slate-600 max-w-sm">
            Your flight path to success. Book trusted cabin crew mentors for every milestone.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">PLATFORM</h4>
          <ul className="space-y-2 text-slate-600">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground">How it works?</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">SUPPORT</h4>
          <ul className="space-y-2 text-slate-600">
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
            <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">LEGAL</h4>
          <ul className="space-y-2 text-slate-600">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms and Services</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} wingli. All rights reserved.</p>
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
