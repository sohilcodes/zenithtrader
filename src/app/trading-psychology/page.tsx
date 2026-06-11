import Link from "next/link";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Psychology | Zenith Trader Academy",
  description:
    "Master trading psychology. Control fear, greed and emotional decision making to become a disciplined trader.",
};

export default function TradingPsychologyPage() {
  const filtered = posts.filter((p) => p.category === "Trading Psychology");

  const concepts = [
    {
      icon: "😨",
      title: "Fear",
      desc: "Understand how fear causes premature exits and missed opportunities.",
    },
    {
      icon: "🤑",
      title: "Greed",
      desc: "Learn to recognize greed before it destroys your trading account.",
    },
    {
      icon: "🧠",
      title: "Discipline",
      desc: "Build the mental discipline to follow your trading plan consistently.",
    },
    {
      icon: "📋",
      title: "Planning",
      desc: "Why having a plan before entering a trade changes everything.",
    },
    {
      icon: "⚖️",
      title: "Patience",
      desc: "The most underrated skill in trading — waiting for high quality setups.",
    },
    {
      icon: "🔄",
      title: "Consistency",
      desc: "How to build repeatable habits that lead to long-term improvement.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Mindset & Discipline
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Trading{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Psychology
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Your mindset determines your results. Learn to master the mental game
          of trading — the single biggest edge most traders overlook.
        </p>
      </section>

      {/* Concepts */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Core Psychology Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((c) => (
            <div
              key={c.title}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="glass-card rounded-2xl p-10 border border-amber-500/20 text-center">
          <div className="text-5xl text-amber-400/30 font-serif mb-4">"</div>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
            The goal of a successful trader is to make the best trades. Money is
            secondary.
          </p>
          <span className="text-zinc-500 text-sm">— Alexander Elder</span>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">
          Trading Psychology Articles
        </h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(7, 10).map((post) => (
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
            Build Your Trading Mindset
          </h3>
          <p className="text-zinc-400 mb-6">
            Join traders who are working on their discipline, consistency and
            mental game every day.
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
