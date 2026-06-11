import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Zenith Trader Academy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Article */}
        <article>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-zinc-300">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {post.category}
            </span>
            <span className="text-xs text-zinc-500">{post.date}</span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Content */}
          <div
            className="prose prose-invert prose-emerald max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-zinc-300 prose-li:mb-1
              prose-strong:text-white
              prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ol:my-4
              prose-blockquote:border-emerald-500 prose-blockquote:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/5 text-center">
            <h3 className="text-2xl font-black text-white mb-3">
              Want to Learn More?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto">
              Join our Telegram community for daily trading education, chart
              breakdowns and market insights.
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

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="glass-card rounded-xl p-4 border border-white/5 hover:border-emerald-500/30 transition-all group"
                  >
                    <span className="text-xs text-emerald-400 mb-2 block">
                      {r.category}
                    </span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {r.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar — static version for server component */}
        <aside className="space-y-6">
          {/* Back to blog */}
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Blog
          </Link>

          {/* Categories */}
          <div className="glass-card rounded-2xl p-5 border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {[
                "Candlestick Patterns",
                "Trading Psychology",
                "Risk Management",
                "Beginner Guides",
                "Price Action",
                "Strategy",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="block text-sm text-zinc-400 hover:text-emerald-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    {cat}
                  </Link>
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
              {posts.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block text-sm text-zinc-400 hover:text-emerald-400 transition-colors leading-snug"
                  >
                    {p.title}
                  </Link>
                  <span className="text-xs text-zinc-600">{p.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Telegram */}
          <div className="rounded-2xl p-5 border border-emerald-500/30 bg-emerald-500/5 text-center">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="text-white font-bold mb-2">Join Our Community</h3>
            <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
              Daily trading education and market insights.
            </p>
            <a
              href="https://t.me/+acQi9-pYh4c1OTE1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-2.5 rounded-xl text-sm transition-colors"
            >
              Join Free
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

// Simple markdown-to-HTML converter
function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hul])/gm, "<p>")
    .replace(/(?<![>])$/gm, "</p>")
    .replace(/<p><\/p>/g, "")
    .replace(/<p>(<[hul])/g, "$1")
    .replace(/(<\/[hul][^>]*>)<\/p>/g, "$1");
                    }
