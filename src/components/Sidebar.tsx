"use client";
import { useState } from "react";
import Link from "next/link";
import { posts } from "@/lib/posts";

const categories = [
  "Candlestick Patterns",
  "Trading Psychology",
  "Risk Management",
  "Beginner Guides",
  "Price Action",
  "Strategy",
];

export default function Sidebar({
  onSearch,
  onCategory,
  activeCategory,
}: {
  onSearch?: (q: string) => void;
  onCategory?: (c: string) => void;
  activeCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const recent = posts.slice(0, 5);

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
          Search
        </h3>
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      {/* Categories */}
      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategory?.("")}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                activeCategory === ""
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Posts
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategory?.(cat)}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
          Recent Posts
        </h3>
        <ul className="space-y-3">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block text-sm text-zinc-400 hover:text-emerald-400 transition-colors leading-snug"
              >
                {post.title}
              </Link>
              <span className="text-xs text-zinc-600">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Telegram Widget */}
      <div className="rounded-2xl p-5 border border-emerald-500/30 bg-emerald-500/5 text-center">
        <div className="text-3xl mb-3">✈️</div>
        <h3 className="text-white font-bold mb-2">Join Our Community</h3>
        <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
          Get daily trading education, chart analysis and market insights.
        </p>
        <a
          href="https://t.me/+acQi9-pYh4c1OTE1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-2.5 rounded-xl text-sm transition-colors"
        >
          Join Telegram Free
        </a>
      </div>
    </aside>
  );
}
