import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, IMAGES } from '../data/lumoraData';
import { BlogPost } from '../types';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { VisualMedia } from '../components/VisualMedia';
import { MedicalNotice } from '../components/MedicalNotice';

interface BlogPageProps {
  slug?: string;
  onNavigate: (path: string) => void;
}

const BLOG_CATEGORIES: Array<'Tất cả' | BlogPost['category']> = [
  'Tất cả',
  'Hợp tác thương hiệu',
  'Cận thị học đường',
  'Kiến thức Ortho-K',
  'Chăm sóc mắt',
  'Theo dõi thị lực',
];

export const BlogPage: React.FC<BlogPageProps> = ({ slug, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'Tất cả' | BlogPost['category']>('Tất cả');

  const activePost = slug ? BLOG_POSTS.find((p) => p.slug === slug) : undefined;

  if (slug && activePost) {
    const related = BLOG_POSTS.filter((p) => p.slug !== activePost.slug).slice(0, 3);
    const isCollabPost = activePost.category === 'Hợp tác thương hiệu';

    return (
      <article className="pb-16 space-y-12">
        <header className="border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <a
              href="#/tin-tuc"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/tin-tuc');
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#5B8FB9] dark:text-[#7EB2DB] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Quay lại danh sách bài viết</span>
            </a>

            <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
              <span>{activePost.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{activePost.date}</span>
              <span aria-hidden="true">·</span>
              <span>{activePost.readTime}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1] leading-tight">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
              {activePost.excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <VisualMedia
            src={activePost.image}
            alt={activePost.imageAlt}
            aspectRatio={isCollabPost ? '4/3' : '16/9'}
            imgClassName={isCollabPost ? 'object-cover object-top' : 'object-cover object-center'}
          />

          {/* Key Takeaways */}
          <div className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 space-y-3">
            <h2 className="font-display text-base font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Điểm chính cần nhớ
            </h2>
            <ul className="space-y-2 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
              {activePost.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[#5B8FB9] dark:text-[#7EB2DB] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-5 text-base text-[#1D2433]/85 dark:text-[#C9CDD6] leading-[1.8]">
            {activePost.content.slice(0, 2).map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            {isCollabPost && (
              <div className="py-2">
                <VisualMedia
                  src={IMAGES.collabNight}
                  alt="LUMORA x HIEUTHUHAI – Ấn phẩm phiên bản ban đêm: Giấc ngủ hôm nay, thị lực ngày mai"
                  aspectRatio="16/9"
                />
              </div>
            )}

            {activePost.content.slice(2).map((para, index) => (
              <p key={index + 2}>{para}</p>
            ))}
          </div>

          <MedicalNotice />
        </div>

        {/* Related Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-[#C9CDD6]/60 dark:border-[#2B354A]">
          <h2 className="font-display text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1] mb-6">
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <div
                key={item.slug}
                className="rounded-2xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col justify-between"
              >
                <div className="p-4 pb-0">
                  <VisualMedia src={item.image} alt={item.imageAlt} aspectRatio="4/3" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      <a
                        href={`#/tin-tuc/${item.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/tin-tuc/${item.slug}`);
                        }}
                        className="hover:text-[#5B8FB9]"
                      >
                        {item.title}
                      </a>
                    </h3>
                  </div>
                  <a
                    href={`#/tin-tuc/${item.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/tin-tuc/${item.slug}`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B8FB9] dark:text-[#7EB2DB]"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    );
  }

  const posts =
    selectedCategory === 'Tất cả'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pb-16 space-y-12">
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Tin tức &amp; Kiến thức
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1] max-w-3xl">
            Tin tức &amp; Blog chăm sóc thị lực
          </h1>
          <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] max-w-2xl leading-relaxed">
            Cập nhật thông tin hợp tác thương hiệu cùng kiến thức khoa học dành cho học sinh, sinh
            viên và phụ huynh về cận thị học đường và Ortho-K.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category filter */}
        <div role="tablist" aria-label="Phân loại bài viết" className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433]'
                  : 'border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] text-[#1D2433]/75 dark:text-[#C9CDD6] hover:border-[#5B8FB9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col"
            >
              <a
                href={`#/tin-tuc/${post.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/tin-tuc/${post.slug}`);
                }}
                className="block p-5 pb-0"
              >
                <VisualMedia
                  src={post.image}
                  alt={post.imageAlt}
                  aspectRatio="4/3"
                  imgClassName={
                    post.category === 'Hợp tác thương hiệu'
                      ? 'object-cover object-top'
                      : 'object-cover object-center'
                  }
                />
              </a>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                    <a
                      href={`#/tin-tuc/${post.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/tin-tuc/${post.slug}`);
                      }}
                      className="hover:text-[#5B8FB9] transition-colors"
                    >
                      {post.title}
                    </a>
                  </h2>

                  <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <a
                    href={`#/tin-tuc/${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/tin-tuc/${post.slug}`);
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1] hover:text-[#5B8FB9]"
                  >
                    <span>Đọc chi tiết</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
