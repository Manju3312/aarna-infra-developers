import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOGS, getBlogBySlug } from '@/data/blogs';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Article Not Found | Aarna Infra Developers' };
  }

  return {
    title: `${blog.title} | Aarna Infra Knowledge Hub`,
    description: blog.excerpt,
    authors: [{ name: blog.author }],
    keywords: blog.tags,
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <article className="space-y-12 py-8 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back to Hub */}
      <div>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-200 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Knowledge Hub</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#65080F] border border-amber-400/50 text-amber-200 text-xs font-mono font-bold uppercase tracking-widest shadow-md">
          {blog.category}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-amber-200/90 pt-2 border-b border-white/10 pb-4">
          <span className="flex items-center gap-1.5 text-amber-300 font-bold">
            <User className="w-4 h-4 text-amber-300" />
            {blog.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            {blog.publishedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            {blog.readTime}
          </span>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="relative h-72 sm:h-[420px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Key Takeaways Box (Crisp White Card with Maroon Border) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white text-zinc-900 border border-amber-300/60 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#750A14] uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          Executive Takeaways for Investors
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800">
          {blog.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#750A14] shrink-0 mt-0.5" />
              <span className="font-medium">{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Article Body Content (Crisp White Reading Surface) */}
      <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/40 p-6 sm:p-10 space-y-6 font-sans leading-relaxed text-sm sm:text-base shadow-2xl">
        {blog.content.split('\n\n').map((paragraph, idx) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-xl sm:text-2xl font-serif font-black text-[#500208] pt-4 pb-1 border-b border-zinc-200">
                {trimmed.replace('### ', '')}
              </h3>
            );
          }

          if (trimmed.startsWith('#### ')) {
            return (
              <h4 key={idx} className="text-lg font-serif font-bold text-[#750A14] pt-2">
                {trimmed.replace('#### ', '')}
              </h4>
            );
          }

          if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
            const items = trimmed.split('\n');
            return (
              <ul key={idx} className="space-y-2 pl-4 text-xs sm:text-sm text-zinc-700 list-disc marker:text-[#750A14]">
                {items.map((it, i) => (
                  <li key={i}>{it.replace(/^[-*0-9.]+\s*/, '')}</li>
                ))}
              </ul>
            );
          }

          return (
            <p key={idx} className="text-zinc-700 leading-relaxed text-xs sm:text-sm">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Tags Pill Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs font-mono text-amber-200 mr-2 font-bold">Topics:</span>
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-[11px] font-mono bg-white text-zinc-800 border border-amber-300 shadow-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Advisory Intake CTA */}
      <div className="pt-8">
        <LeadIntakeForm
          source={`Blog Article: ${blog.slug}`}
          title="Have Questions on Plot Legalities or Title Diligence?"
          subtitle="Consult our Senior Legal and Land Advisory desk in Madhapur directly."
        />
      </div>

      {/* Related Reading (Crisp White Cards) */}
      <div className="pt-10 border-t border-white/10 space-y-6">
        <h3 className="text-2xl font-serif font-black text-white">Recommended Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedBlogs.map((rel) => (
            <Link
              key={rel.slug}
              href={`/blogs/${rel.slug}`}
              className="p-5 rounded-2xl bg-white text-zinc-900 border border-amber-300/40 hover:border-[#750A14] transition-all space-y-2 block group shadow-md"
            >
              <span className="text-[10px] font-mono uppercase text-[#750A14] block font-bold">{rel.category}</span>
              <h4 className="font-serif font-bold text-sm text-[#500208] group-hover:text-[#750A14] transition-colors line-clamp-2">
                {rel.title}
              </h4>
              <p className="text-xs text-zinc-600 line-clamp-2">{rel.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
