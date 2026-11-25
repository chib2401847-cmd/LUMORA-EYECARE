import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/lumoraData';
import { FAQItem } from '../types';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { ConsultationCard } from '../components/ConsultationCard';

const CATEGORIES: Array<'Tất cả' | FAQItem['category']> = [
  'Tất cả',
  'Sản phẩm',
  'An toàn & Hiệu quả',
  'Sử dụng & Bảo quản',
  'Giá & Đặt hàng',
];

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Tất cả' | FAQItem['category']>('Tất cả');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const filtered =
    selectedCategory === 'Tất cả'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pb-16 space-y-14">
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Giải đáp thắc mắc
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1] max-w-3xl">
            Câu hỏi thường gặp (FAQ)
          </h1>
          <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] max-w-2xl leading-relaxed">
            Tổng hợp những câu hỏi phổ biến nhất về lens ngủ LUMORA Ortho-K, mức độ an toàn, cách
            vệ sinh, khoảng giá và quy trình đặt hàng.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Lọc câu hỏi theo chủ đề"
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
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

        {/* Accordion List */}
        <div className="space-y-3">
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-[#F5F4F1]/50 dark:hover:bg-[#141B29]/50 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-[#5B8FB9] dark:text-[#7EB2DB]">
                      {item.category}
                    </p>
                    <h2 className="font-display text-base sm:text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      {item.question}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1D2433]/60 dark:text-[#9BA5B8] shrink-0 mt-1 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed border-t border-[#C9CDD6]/40 dark:border-[#2B354A]/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationCard
          heading="Chưa thấy câu trả lời cho trường hợp của bạn?"
          subheading="Những vấn đề liên quan đến độ khúc xạ riêng hoặc thông tin chi tiết gói sản phẩm, vui lòng liên hệ trực tiếp để được tư vấn cụ thể."
        />
      </div>
    </div>
  );
};
