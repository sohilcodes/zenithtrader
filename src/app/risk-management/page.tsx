import Link from "next/link";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management | Zenith Trader Academy",
  description:
    "Learn professional risk management strategies. Position sizing, stop losses and capital preservation for traders.",
};

export default function RiskManagementPage() {
  const filtered = posts.filter((p) => p.category === "Risk Management");

  const rules = [
    {
      number: "01",
      title: "Risk Per Trade",
      desc: "Never risk more than 1-2% of your total capital on a single trade.",
    },
    {
      number: "02",
      title: "Stop Loss Always",
      desc: "Every trade must have a stop loss set before entry. No exceptions.",
    },
    {
      number: "03",
      title: "Risk/Reward Ratio",
      desc: "Only take trades where potential reward is at least 2x the risk.",
    },
    {
      number: "04",
      title: "Position Sizing",
      desc: "Calculate your position size based on your stop loss distance.",
    },
    {
      number: "05",
      title: "Diversification",
      desc: "Avoid putting all capital into one market or instrument.",
    },
    {
      number: "06",
      title: "Daily Loss Limit",
      desc: "Set a maximum daily loss limit and stop trading when hit.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Capital Protection
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Risk{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Management
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          The most important skill in trading. Learn how professional traders
          protect their capital and survive the markets long-term.
        </p>
      </section>

      {/* Rules */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          6 Golden Risk Rules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((r) => (
            <div
              key={r.number}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1"
            >
              <span className="text-4xl font-black text-emerald-500/20 block mb-3">
                {r.number}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Calculator Visual */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="glass-card rounded-2xl p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            Risk Per Trade Formula
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-5">
              <div className="text-2xl font-black text-amber-400 mb-2">
                Account Size
              </div>
              <div className="text-zinc-400 text-sm">e.g. $10,000</div>
            </div>
            <div className="flex items-center justify-center text-3xl text-zinc-500">
              ×
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <div className="text-2xl font-black text-emerald-400 mb-2">
                1-2% Risk
              </div>
              <div className="text-zinc-400 text-sm">= $100-$200 per trade</div>
            </div>
          </div>
          <p className="text-zinc-500 text-sm text-center mt-6">
            This approach ensures no single trade can significantly damage your
            account.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">
          Risk Management Articles
        </h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(9, 12).map((post) => (
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
            Learn Risk Management Live
          </h3>
          <p className="text-zinc-400 mb-6">
            Join our community to learn how we manage risk on every trade setup
            we share.
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
