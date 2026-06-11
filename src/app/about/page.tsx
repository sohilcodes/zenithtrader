import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Zenith Trader Academy",
  description:
    "Learn about Zenith Trader Academy — our mission to provide professional trading education for every level of trader.",
};

export default function AboutPage() {
  const values = [
    {
      icon: "📚",
      title: "Education First",
      desc: "We believe every trader deserves access to high quality trading education regardless of their background or experience level.",
    },
    {
      icon: "🛡️",
      title: "Honest & Transparent",
      desc: "We never make unrealistic promises. Trading involves risk and we teach you how to manage it responsibly.",
    },
    {
      icon: "🎯",
      title: "Practical Knowledge",
      desc: "Everything we teach is based on real price action principles that can be applied to any market and any timeframe.",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      desc: "Our Telegram community is a space for traders to learn together, share ideas and grow as a collective.",
    },
  ];

  const stats = [
    { value: "15+", label: "In-Depth Articles" },
    { value: "6+", label: "Topic Categories" },
    { value: "100%", label: "Free Education" },
    { value: "24/7", label: "Community Access" },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 mb-20 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Zenith Trader Academy
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Zenith Trader Academy was built with one mission — to make professional
          trading education accessible to everyone. We break down complex
          concepts into clear, actionable content that any trader can apply.
        </p>
      </section>

      {/* Logo + Mission */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="glass-card rounded-3xl p-10 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
              <Image
                src="/logo.png"
                alt="Zenith Trader Academy"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Our Mission
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The financial markets can be overwhelming for beginners. There is
              too much noise, too many conflicting opinions and too many people
              selling unrealistic dreams. We cut through all of that.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              At Zenith Trader Academy, we focus on the fundamentals — price
              action, candlestick patterns, trading psychology and risk
              management. These are the building blocks of every successful
              trader.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our content is designed to be practical, honest and educational.
              We teach you how to think like a trader, not just how to follow
              signals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-2xl p-6 border border-white/5 text-center hover:border-emerald-500/30 transition-all"
            >
              <div className="text-3xl font-black text-emerald-400 mb-1">
                {s.value}
              </div>
              <div className="text-zinc-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all flex gap-4"
            >
              <div className="text-3xl flex-shrink-0">{v.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="glass-card rounded-2xl p-8 border border-amber-500/20 bg-amber-500/5">
          <h3 className="text-amber-400 font-bold text-lg mb-3">
            ⚠️ Important Disclaimer
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            All content published on Zenith Trader Academy is for educational
            and informational purposes only. Nothing on this website constitutes
            financial advice, investment advice or trading recommendations.
            Trading financial instruments involves significant risk of loss.
            Past performance is not indicative of future results. Always do your
            own research and consult a qualified financial advisor before making
            any trading decisions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="rounded-2xl p-10 border border-emerald-500/30 bg-emerald-500/5">
          <h3 className="text-2xl font-black text-white mb-3">
            Join Our Community
          </h3>
          <p className="text-zinc-400 mb-6">
            Connect with fellow traders, get daily educational content and be
            part of the Zenith Trader Academy community.
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
