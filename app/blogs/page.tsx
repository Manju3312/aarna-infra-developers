import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOGS } from '@/data/blogs';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Knowledge Hub & Legal Guides | Aarna Infra Developers',
  description:
    'Authoritative real estate guides covering 30-year link document verification, HMDA vs DTCP vs TSRERA, first-time buyer checklists, and highway corridor analyses.',
};

export default function BlogsPage() {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65080F] border border-amber-400/50 text-amber-200 text-xs font-mono font-bold uppercase tracking-widest shadow-md">
          <BookOpen className="w-3.5 h-3.5 text-amber-300" />
          Sovereign Knowledge Hub
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-white">
          Real Estate Advisory & Statutory Guides
        </h1>
        <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans">
          Deep-dive research papers, legal checklists, and corridor forecasts authored by industry veteran Arjun Kommalapati and our Senior Legal Counsel.
        </p>
      </div>

      {/* Featured Articles Grid (Crisp White Luxury Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <article
            key={blog.slug}
            className="group rounded-3xl bg-white text-zinc-900 border border-amber-300/40 hover:border-[#750A14] transition-all overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(117,10,20,0.18)]"
          >
            <div>
              {/* Cover Image */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#500208]/90 backdrop-blur-md text-amber-300 border border-amber-400/40">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#750A14]" />
                    {blog.publishedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#750A14]" />
                    {blog.readTime}
                  </span>
                </div>

                <h2 className="font-serif font-black text-xl text-[#500208] group-hover:text-[#750A14] transition-colors line-clamp-2 leading-tight">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>

                <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed font-sans">
                  {blog.excerpt}
                </p>

                {/* Key takeaway snippet */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#750A14] block mb-1 font-bold">Key Takeaway:</span>
                  <p className="text-[11px] text-zinc-700 bg-[#FFF9F2] p-2.5 rounded-xl border border-amber-200/80 line-clamp-2">
                    💡 {blog.keyTakeaways[0]}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer with Author & Link */}
            <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between mt-4">
              <span className="text-[11px] text-zinc-600 flex items-center gap-1.5 truncate max-w-[200px]">
                <User className="w-3.5 h-3.5 text-[#750A14] shrink-0" />
                <span className="truncate font-medium">{blog.author.split('(')[0]}</span>
              </span>

              <Link
                href={`/blogs/${blog.slug}`}
                className="text-xs font-mono font-bold text-[#750A14] hover:text-[#500208] flex items-center gap-1 group/btn"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
