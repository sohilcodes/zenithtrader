import Link from "next/link";
import { Post } from "@/lib/posts";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group glass-card rounded-2xl p-6 hover:border-emerald-500/50 border border-white/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {post.category}
          </span>
          <span className="text-xs text-zinc-500">{post.readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <span className="text-xs text-zinc-500">{post.date}</span>
          <span className="text-xs text-emerald-400 font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
