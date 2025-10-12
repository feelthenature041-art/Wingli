import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItemCls =
  "px-3 py-2 text-sm font-medium transition-colors text-foreground/70 hover:text-foreground";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F3186ff092c5e4853b64463d211bf2750?format=webp&width=300"
            alt="wingli"
            className="h-7 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-2">
          <a href="/" className={navItemCls}>
            Home
          </a>
          <a href="/about" className={navItemCls}>
            About
          </a>
          <a href="/how-it-works" className={navItemCls}>
            How it works
          </a>
          <a href="/blog" className={navItemCls}>
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="rounded-full px-5 h-10">
            <a href="/login">Login</a>
          </Button>
          <Button asChild className="rounded-full px-5 h-10">
            <a href="/find-a-mentor">Find a Mentor</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
