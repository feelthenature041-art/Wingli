import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItemCls = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(215 80% 55%)" />
              </linearGradient>
            </defs>
            <path fill="url(#g)" d="M6 40c8-4 18-16 28-18s18 2 24 4c-8 0-14 2-22 8S18 46 6 40Z"/>
            <path fill="url(#g)" d="M6 40c12 4 23 1 32-6 4-3 8-5 14-6-10 6-18 22-36 22-4 0-8-4-10-10Z"/>
          </svg>
          <span className="text-xl font-bold tracking-tight">wingli</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navItemCls} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navItemCls}>
            About
          </NavLink>
          <NavLink to="/how-it-works" className={navItemCls}>
            How it works
          </NavLink>
          <NavLink to="/blog" className={navItemCls}>
            Blog
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="rounded-full px-5 h-10">
            <Link to="/find-a-mentor">Find a Mentor</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
