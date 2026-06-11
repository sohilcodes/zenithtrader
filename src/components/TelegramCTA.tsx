import Link from "next/link";
import { Send, Users, BookOpen, TrendingUp, ChevronRight } from "lucide-react";

interface TelegramCTAProps {
  variant?: "banner" | "card" | "inline";
  className?: string;
}

export default function TelegramCTA({ variant = "banner", className = "" }: TelegramCTAProps) {
  if (variant === "card") {
    return (
      <div className={`glass-gold rounded-2xl p-6 border border-gold/20 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Join Our Community</h3>
            <p className="text-xs text-muted">Free Trading Education</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          Get daily educational content on price action, candlestick patterns, and trading psychology.
          Completely free.
        </p>
        <div className="space-y-2 mb-5">
          {[
            "Daily educational content",
            "Candlestick pattern guides",
            "Risk management tips",
            "Active learning community",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <Link
          href="https://t.me/+acQi9-pYh4c1OTE1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full btn-emerald text-sm py-2.5"
        >
          <Send className="w-4 h-4" />
          Join Free — Telegram
        </Link>
        <p className="text-xs text-muted text-center mt-2">No spam · Educational only</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-emerald/20 bg-gradient-to-r from-emerald-muted/30 via-background to-background p-6 md:p-8 ${className}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Send className="w-5 h-5 text-emerald" />
              <span className="text-sm font-medium text-emerald">Free Community</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 font-display">
              Continue Learning on Telegram
            </h3>
            <p className="text-gray-400 text-sm">
              Join our free community for daily trading education, pattern analysis, and market insights.
            </p>
          </div>
          <Link
            href="https://t.me/+acQi9-pYh4c1OTE1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 btn-emerald text-sm px-6 py-3"
          >
            <Send className="w-4 h-4" />
            Join Now
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Banner variant
  return (
    <section className={`relative overflow-hidden bg-surface-2 border-y border-border py-16 md:py-24 ${className}`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="glow-orb glow-orb-emerald w-96 h-96 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="glow-orb glow-orb-gold w-72 h-72 top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge badge-emerald mb-6">
          <Users className="w-3.5 h-3.5" />
          <span>Free Telegram Community</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
          Learn Trading{" "}
          <span className="text-gradient-gold">Every Day</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join our Telegram community for daily educational content on candlestick patterns,
          price action setups, trading psychology, and risk management. 100% free.
        </p>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {[
            { icon: BookOpen, label: "Daily Education" },
            { icon: TrendingUp, label: "Pattern Analysis" },
            { icon: Users, label: "Community Learning" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-300"
            >
              <Icon className="w-4 h-4 text-emerald" />
              {label}
            </div>
          ))}
        </div>

        <Link
          href="https://t.me/+acQi9-pYh4c1OTE1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 btn-gold text-base px-8 py-4 rounded-xl"
        >
          <Send className="w-5 h-5" />
          Join Free Telegram Community
          <ChevronRight className="w-5 h-5" />
        </Link>
        <p className="text-gray-500 text-sm mt-4">
          Educational content only · No financial advice · Completely free
        </p>
      </div>
    </section>
  );
          }
