import Link from "next/link";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candlestick Patterns | Zenith Trader Academy",
  description:
    "Learn all major candlestick patterns including hammer, doji, engulfing and more. Master price action trading.",
};

export default function CandlestickPage() {
  const filtered = posts.filter((p) => p.category === "Candlestick Patterns");

  const patterns = [
    { name: "Hammer", emoji: "🔨", desc: "Bullish reversal after downtrend" },
    { name: "Doji", emoji: "✚", desc: "Market indecision signal" },
    { name: "Engulfing", emoji: "📊", desc: "Strong reversal confirmation" },
    { name: "Shooting Star", emoji: "⭐", desc: "Bearish reversal at top" },
    { name: "Morning Star", emoji: "🌅", desc: "3-candle bullish reversal" },
    { name: "Evening Star", emoji: "🌆", desc: "3-candle bearish reversal" },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Technical Analysis
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Candlestick{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Patterns
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Master the language of price action. Learn to read candlestick
          patterns and understand what the market is telling you.
        </p>
      </section>

      {/* Pattern Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Key Patterns Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {patterns.map((p) => (
            <div
              key={p.name}
              className="glass-card rounded-2xl p-5 border border-white/5 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="text-white font-bold text-sm mb-1">{p.name}</h3>
              <p className="text-zinc-500 text-xs leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">
          Candlestick Pattern Articles
        </h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 6).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 font-semibold px-8 py-3 rounded-xl transition-all"
          >
            View All Articles →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
        <div className="rounded-2xl p-10 border border-emerald-500/30 bg-emerald-500/5">
          <h3 className="text-2xl font-black text-white mb-3">
            Learn Candlesticks Live
          </h3>
          <p className="text-zinc-400 mb-6">
            Join our Telegram community where we discuss real chart setups and
            pattern analysis daily.
          </p>
          <a
            href="https://t.me/+acQi9-pYh4c1OTE1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-colors"
          >
            ✈️ Join Telegram Free
          </a>
        </div>
      </section>
    </main>
  );
}
