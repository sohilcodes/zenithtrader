"use client";
import { useState, useMemo } from "react";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "" || p.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Knowledge Hub
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Trading{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Blog
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          In-depth articles on candlestick patterns, trading psychology, risk
          management and more.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-zinc-500 text-sm">
              Showing{" "}
              <span className="text-white font-semibold">{filtered.length}</span>{" "}
              articles
            </p>
            {(search || category) && (
              <button
                onClick={() => { setSearch(""); setCategory(""); }}
                className="text-xs text-zinc-500 hover:text-white transition-colors underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="glass-card rounded-2xl p-16 text-center border border-white/5">
              <p className="text-zinc-500 text-lg">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        <Sidebar
          onSearch={setSearch}
          onCategory={setCategory}
          activeCategory={category}
        />
      </div>
    </main>
  );
}
