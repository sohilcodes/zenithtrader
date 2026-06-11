"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, TrendingUp, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Learn",
    children: [
      { href: "/candlestick-patterns", label: "Candlestick Patterns", icon: "📊" },
      { href: "/trading-psychology", label: "Trading Psychology", icon: "🧠" },
      { href: "/risk-management", label: "Risk Management", icon: "🛡️" },
      { href: "/beginner-guides", label: "Beginner Guides", icon: "📚" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border border-gold/30 shadow-gold-sm group-hover:shadow-gold transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Zenith Trader Academy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg lg:text-xl font-bold font-display">
                  <span className="text-gradient-gold">Zenith</span>
                  <span className="text-white"> Trader</span>
                </span>
                <p className="text-[10px] text-muted leading-none tracking-wider uppercase">
                  Academy
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        activeDropdown === link.label
                          ? "text-gold bg-gold/5"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === link.label ? "rotate-180 text-gold" : ""
                        )}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-56 rounded-xl glass border border-border shadow-glass transition-all duration-200 overflow-hidden",
                        activeDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="p-2 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all group"
                          >
                            <span className="text-base">{child.icon}</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-gold bg-gold/8"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="https://t.me/+acQi9-pYh4c1OTE1"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 btn-gold text-sm px-4 py-2"
              >
                <Send className="w-3.5 h-3.5" />
                Join Telegram
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-80 bg-surface border-l border-border shadow-2xl transition-transform duration-300 overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/30">
                <Image src="/logo.png" alt="Zenith Trader Academy" fill className="object-cover" />
              </div>
              <span className="font-bold text-gradient-gold font-display">Zenith Trader</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="p-4 space-y-1">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                pathname === "/"
                  ? "bg-gold/8 text-gold"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              )}
            >
              🏠 Home
            </Link>

            {/* Learn dropdown mobile */}
            <button
              onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all"
            >
              <span className="flex items-center gap-3">📈 Learn</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  mobileLearnOpen ? "rotate-180" : ""
                )}
              />
            </button>
            {mobileLearnOpen && (
              <div className="ml-4 space-y-1 border-l border-border pl-4">
                {navLinks.find(l => l.label === "Learn")?.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <span>{child.icon}</span> {child.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
              📝 Blog
            </Link>
            <Link href="/about" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
              👤 About
            </Link>
            <Link href="/contact" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all">
              ✉️ Contact
            </Link>
          </div>

          {/* Mobile Telegram CTA */}
          <div className="p-4 border-t border-border">
            <Link
              href="https://t.me/+acQi9-pYh4c1OTE1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full btn-gold text-sm py-3"
            >
              <Send className="w-4 h-4" />
              Join Free Telegram Community
            </Link>
            <p className="text-xs text-center text-muted mt-2">
              Free educational content daily
            </p>
          </div>

          {/* Quick Stats */}
          <div className="p-4 border-t border-border">
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Articles", value: "15+" },
                { label: "Topics", value: "6" },
                { label: "Free", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-2 rounded-lg bg-surface-2">
                  <p className="text-gold font-bold text-sm">{stat.value}</p>
                  <p className="text-muted text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
