import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";

const navItemCls =
  "px-3 py-2 text-sm font-medium transition-colors text-foreground/70 hover:text-foreground";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white/70 backdrop-blur hover:bg-white"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-16 border-b border-t bg-white/95 backdrop-blur">
          <nav className="container py-3 grid gap-2">
            <a href="/" className={navItemCls} onClick={() => setOpen(false)}>
              Home
            </a>
            <a
              href="/about"
              className={navItemCls}
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="/how-it-works"
              className={navItemCls}
              onClick={() => setOpen(false)}
            >
              How it works
            </a>
            <a
              href="/blog"
              className={navItemCls}
              onClick={() => setOpen(false)}
            >
              Blog
            </a>
            <div className="flex items-center gap-2 pt-2">
              <Button asChild className="h-9 px-4 rounded-full">
                <a href="/find-a-mentor" onClick={() => setOpen(false)}>
                  Find a Mentor
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-9 px-4 rounded-full"
              >
                <a href="/login" onClick={() => setOpen(false)}>
                  Login
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="rounded-full px-5 h-10">
            <a href="/find-a-mentor">Find a Mentor</a>
          </Button>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Profile"
            >
              <User className="h-5 w-5 text-primary" />
            </button>
          ) : (
            <Button
              asChild
              variant="outline"
              className="rounded-full px-5 h-10"
              onClick={() => setIsLoggedIn(true)}
            >
              <a href="/login">Login</a>
            </Button>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
