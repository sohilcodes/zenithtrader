import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  TrendingUp,
  Brain,
  Shield,
  BookOpen,
  Send,
  Star,
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  CheckCircle2,
  Users,
  Play,
} from "lucide-react";
import TelegramCTA from "@/components/TelegramCTA";
import { getAllPosts } from "@/lib/posts";

const categories = [
  {
    href: "/candlestick-patterns",
    icon: BarChart3,
    title: "Candlestick Patterns",
    description:
      "Master the language of price action through comprehensive candlestick pattern analysis and guides.",
    color: "gold",
    count: "15+ Patterns",
    emoji: "📊",
  },
  {
    href: "/trading-psychology",
    icon: Brain,
    title: "Trading Psychology",
    description:
      "Understand the mental framework of successful traders — control emotions and build discipline.",
    color: "emerald",
    count: "10+ Articles",
    emoji: "🧠",
  },
  {
    href: "/risk-management",
    icon: Shield,
    title: "Risk Management",
    description:
      "Learn how to protect your capital and trade consistently with solid risk management principles.",
    color: "gold",
    count: "8+ Guides",
    emoji: "🛡️",
  },
  {
    href: "/beginner-guides",
    icon: BookOpen,
    title: "Beginner Guides",
    description:
      "Start your trading education the right way — step-by-step guides for those new to markets.",
    color: "emerald",
    count: "12+ Guides",
    emoji: "📚",
  },
];

const whyLearn = [
  {
    icon: Target,
    title: "Precision Education",
    desc: "Every concept broken down with real chart examples and clear explanations.",
  },
  {
    icon: Shield,
    title: "Risk-First Approach",
    desc: "We teach risk management before strategy — the foundation every trader needs.",
  },
  {
    icon: Brain,
    title: "Psychology Focus",
    desc: "70% of trading success is psychological. We cover what most educators ignore.",
  },
  {
    icon: Zap,
    title: "Practical Content",
    desc: "No theory overload — actionable frameworks you can apply immediately.",
  },
  {
    icon: Users,
    title: "Community Learning",
    desc: "Learn alongside hundreds of traders in our free Telegram community.",
  },
  {
    icon: BookOpen,
    title: "Always Free",
    desc: "All educational content is free. No paywalls, no upsells, no hidden costs.",
  },
];

const stats = [
  { value: "15+", label: "Free Articles" },
  { value: "6", label: "Topic Areas" },
  { value: "100%", label: "Free Access" },
  { value: "∞", label: "Learning" },
];

export default async function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-100" />
        <div className="glow-orb glow-orb-gold w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2" />
        <div className="glow-orb glow-orb-emerald w-[400px] h-[400px] top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 badge badge-gold mb-6 animate-fade-in">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                <span>Free Trading Education Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6 animate-fade-up">
                <span className="text-white">Master Trading</span>
                <br />
                <span className="text-gradient-gold">With Confidence</span>
              </h1>

              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up-delay">
                Learn trading through{" "}
                <span className="text-emerald-light font-medium">price action</span>,{" "}
                <span className="text-gold font-medium">candlestick patterns</span>,{" "}
                <span className="text-emerald-light font-medium">trading psychology</span> and{" "}
                <span className="text-gold font-medium">risk management</span>.
              </p>

              {/* Checkpoints */}
              <div className="grid grid-cols-2 gap-2 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  "100% Free Content",
                  "No Financial Advice",
                  "Educational Focus",
                  "Community Driven",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="https://t.me/+acQi9-pYh4c1OTE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 btn-gold text-base px-7 py-3.5 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                  Join Telegram
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/beginner-guides"
                  className="inline-flex items-center justify-center gap-2 btn-outline-gold text-base px-7 py-3.5 rounded-xl"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Guides
                </Link>
              </div>
            </div>

            {/* Logo / Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Outer glow rings */}
                <div className="absolute inset-0 rounded-full bg-gold/5 scale-110 animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full bg-emerald/5 scale-125 animate-pulse-slow [animation-delay:1s]" />

                {/* Logo */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-gold/30 shadow-gold animate-float">
                  <Image
                    src="/logo.png"
                    alt="Zenith Trader Academy"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass-gold rounded-xl px-3 py-2 text-xs font-medium text-gold border border-gold/20 animate-float [animation-delay:1s]">
                  📊 Price Action
                </div>
                <div className="absolute -bottom-4 -left-4 glass-emerald rounded-xl px-3 py-2 text-xs font-medium text-emerald border border-emerald/20 animate-float [animation-delay:2s]">
                  🧠 Psychology
                </div>
                <div className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 text-xs font-medium text-gray-300 border border-border animate-float [animation-delay:1.5s]">
                  🛡️ Risk Mgmt
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="card text-center p-5">
                <p className="text-2xl sm:text-3xl font-bold text-gradient-gold font-display mb-1">
                  {value}
                </p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TICKER ──────────────────────────────────────── */}
      <div className="bg-surface border-y border-border py-3 overflow-hidden">
        <div className="ticker-wrapper">
          <div className="flex gap-8 animate-ticker-scroll whitespace-nowrap w-max">
            {[
              "📊 Candlestick Patterns",
              "🧠 Trading Psychology",
              "🛡️ Risk Management",
              "📈 Price Action",
              "📚 Beginner Guides",
              "💡 Pattern Recognition",
              "⚖️ Position Sizing",
              "🎯 Entry & Exit Strategy",
              "📊 Candlestick Patterns",
              "🧠 Trading Psychology",
              "🛡️ Risk Management",
              "📈 Price Action",
              "📚 Beginner Guides",
              "💡 Pattern Recognition",
              "⚖️ Position Sizing",
              "🎯 Entry & Exit Strategy",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                {item}
                <span className="text-gold/40">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CATEGORIES ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 badge badge-emerald mb-4">
            <Play className="w-3.5 h-3.5" />
            <span>Start Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            What Would You Like to{" "}
            <span className="text-gradient-gold">Learn Today?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your learning path — every topic is covered with in-depth educational articles
            and practical examples.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(({ href, icon: Icon, title, description, color, count, emoji }) => (
            <Link
              key={href}
              href={href}
              className={`card card-${color === "emerald" ? "emerald" : ""} group p-6 flex flex-col h-full`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-xl
                  ${color === "gold"
                    ? "bg-gold/10 group-hover:bg-gold/15"
                    : "bg-emerald/10 group-hover:bg-emerald/15"
                  } transition-all duration-300`}
              >
                {emoji}
              </div>

              {/* Badge */}
              <div className={`badge ${color === "gold" ? "badge-gold" : "badge-emerald"} text-xs mb-4 self-start`}>
                {count}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient-gold transition-all">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

              <div
                className={`mt-4 flex items-center gap-1 text-sm font-medium
                  ${color === "gold" ? "text-gold" : "text-emerald"}`}
              >
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FEATURED ARTICLES ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 badge badge-gold mb-3">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                <span>Featured Content</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Latest{" "}
                <span className="text-gradient-gold">Articles</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col h-full overflow-hidden"
              >
                {/* Category tag */}
                <div className="p-6 pb-0">
                  <span className="tag text-xs">{post.category}</span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-gold-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted">{post.readTime} min read</span>
                    <div className="flex items-center gap-1 text-sm text-gold group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY LEARN ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 badge badge-gold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Why Zenith Trader Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            Education Built for{" "}
            <span className="text-gradient-emerald">Real Traders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We focus on what actually matters in trading — the fundamentals that separate
            disciplined traders from impulsive ones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyLearn.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 group">
              <div className="w-10 h-10 rounded-xl bg-gold/8 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TELEGRAM CTA ────────────────────────────────── */}
      <TelegramCTA variant="banner" />

      {/* ─── DISCLAIMER ──────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass rounded-xl p-5 border border-border text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-400">Educational Disclaimer:</strong> All content on
            Zenith Trader Academy is for educational purposes only. Nothing on this platform
            constitutes financial advice, investment advice, or trading recommendations. Trading
            financial instruments involves risk, and you may lose more than you invest. Always
            conduct your own research and consult a qualified financial advisor before making any
            investment decisions.
          </p>
        </div>
      </section>
    </div>
  );
    }
