import Link from "next/link";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner Guides | Zenith Trader Academy",
  description:
    "Complete beginner trading guides. Learn the fundamentals of trading, price action and how to get started.",
};

export default function BeginnerGuidesPage() {
  const filtered = posts.filter((p) => p.category === "Beginner Guides");

  const steps = [
    {
      step: "1",
      title: "Understand the Market",
      desc: "Learn what markets are, how they work and what instruments you can trade.",
    },
    {
      step: "2",
      title: "Learn Price Action",
      desc: "Start reading charts, understanding trends and key support/resistance levels.",
    },
    {
      step: "3",
      title: "Master Candlesticks",
      desc: "Learn the most important candlestick patterns and what they signal.",
    },
    {
      step: "4",
      title: "Risk Management First",
      desc: "Before anything else, understand how to protect your capital.",
    },
    {
      step: "5",
      title: "Build a Trading Plan",
      desc: "Define your strategy, entry rules, exit rules and risk parameters.",
    },
    {
      step: "6",
      title: "Practice & Review",
      desc: "Backtest your strategy and keep a trading journal to track progress.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Start Here
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Beginner{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Guides
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          New to trading? Start here. Our beginner guides cover everything you
          need to build a solid trading foundation step by step.
        </p>
      </section>

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Your Learning Roadmap
        </h2>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-black text-lg">
                  {s.step}
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-10 mt-16 w-0.5 h-4 bg-emerald-500/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">
          Beginner Guide Articles
        </h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(11, 15).map((post) => (
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
            Begin Your Trading Journey
          </h3>
          <p className="text-zinc-400 mb-6">
            Join hundreds of beginners learning to trade the right way — with
            education, discipline and proper risk management.
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
