import Link from "next/link";
import Image from "next/image";
import { Send, TrendingUp, BookOpen, Shield, Brain, Star } from "lucide-react";

const footerLinks = {
  Learn: [
    { href: "/candlestick-patterns", label: "Candlestick Patterns" },
    { href: "/trading-psychology", label: "Trading Psychology" },
    { href: "/risk-management", label: "Risk Management" },
    { href: "/beginner-guides", label: "Beginner Guides" },
  ],
  Content: [
    { href: "/blog", label: "Blog" },
    { href: "/blog?category=price-action", label: "Price Action" },
    { href: "/blog?category=strategy", label: "Strategy" },
    { href: "/blog?category=mindset", label: "Mindset" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      {/* Telegram CTA Strip */}
      <div className="bg-gradient-to-r from-emerald-dark via-emerald to-emerald-dark py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-medium text-center sm:text-left text-sm">
            🎓 Join our free educational Telegram community — daily trading insights, no spam.
          </p>
          <Link
            href="https://t.me/+acQi9-pYh4c1OTE1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-white text-emerald-dark font-bold px-5 py-2 rounded-lg text-sm hover:bg-gray-50 transition-all hover:shadow-emerald-sm"
          >
            <Send className="w-4 h-4" />
            Join Now — It&apos;s Free
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                <Image src="/logo.png" alt="Zenith Trader Academy" fill className="object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold font-display">
                  <span className="text-gradient-gold">Zenith</span>
                  <span className="text-white"> Trader</span>
                </span>
                <p className="text-xs text-muted tracking-widest uppercase">Academy</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A free educational platform dedicated to helping traders build strong foundations
              in price action, candlestick analysis, trading psychology, and risk management.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                { icon: BookOpen, label: "Free Education" },
                { icon: Shield, label: "Risk Focused" },
                { icon: Brain, label: "Psychology" },
                { icon: TrendingUp, label: "Price Action" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-gray-400">
                  <Icon className="w-3.5 h-3.5 text-emerald" />
                  {label}
                </div>
              ))}
            </div>

            <Link
              href="https://t.me/+acQi9-pYh4c1OTE1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-emerald text-sm px-5 py-2.5"
            >
              <Send className="w-4 h-4" />
              Join Telegram Community
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-gradient-gold rounded-full inline-block" />
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Zenith Trader Academy. All rights reserved.
              <span className="mx-2">·</span>
              Educational content only. Not financial advice.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">·</span>
              <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Contact
              </Link>
              <span className="text-gray-600">·</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star className="w-3 h-3 text-gold fill-gold" />
                Educational Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
