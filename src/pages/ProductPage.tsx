import React, { useState } from 'react';
import {
  Moon,
  Glasses,
  ShieldCheck,
  Users,
  PackageCheck,
  Check,
  ArrowRight,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import {
  BRAND,
  IMAGES,
  FOUR_BENEFITS,
  PRODUCT_TIERS,
  WHAT_IS_IN_BOX,
} from '../data/lumoraData';
import { ProductTier } from '../types';
import { ConsultationCard } from '../components/ConsultationCard';
import { MedicalNotice } from '../components/MedicalNotice';
import { VisualMedia } from '../components/VisualMedia';

interface ProductPageProps {
  onNavigate: (path: string) => void;
}

const icons = [Moon, Glasses, ShieldCheck, Users];

export const ProductPage: React.FC<ProductPageProps> = ({ onNavigate }) => {
  const [selectedTierId, setSelectedTierId] = useState<ProductTier['id']>('plus');
  const activeTier = PRODUCT_TIERS.find((t) => t.id === selectedTierId) || PRODUCT_TIERS[1];

  const go = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="pb-16 space-y-16 lg:space-y-20">
      {/* PDP Interactive Module */}
      <section className="border-b border-[#C9CDD6]/70 dark:border-[#2B354A] bg-white/50 dark:bg-[#141B29]/50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Gallery Left */}
            <div className="lg:col-span-6 space-y-4">
              <div className="overflow-hidden rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] aspect-[4/3]">
                <img
                  src={activeTier.image}
                  alt={activeTier.imageAlt}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover ${activeTier.imagePosition || 'object-center'}`}
                />
              </div>

              {/* Thumbnail strip to quickly preview all 3 lines */}
              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTierId(tier.id)}
                    className={`rounded-2xl border p-2 text-left transition-colors ${
                      selectedTierId === tier.id
                        ? 'border-[#1D2433] dark:border-[#F5F4F1] bg-white dark:bg-[#171E2C]'
                        : 'border-[#C9CDD6]/70 dark:border-[#2B354A] bg-white/60 dark:bg-[#171E2C]/60 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl mb-2">
                      <img
                        src={tier.image}
                        alt={tier.name}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover ${tier.imagePosition || 'object-center'}`}
                      />
                    </div>
                    <p className="text-[11px] font-semibold text-[#1D2433] dark:text-[#F5F4F1] truncate">
                      {tier.name.replace('LUMORA Ortho-K ', '')}
                    </p>
                    <p className="text-[11px] font-bold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                      {tier.priceDisplay}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Info Right */}
            <div className="lg:col-span-6 rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
                  {activeTier.subtitle}
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  {activeTier.name}
                </h1>
                <p className="text-sm font-medium text-[#1D2433]/75 dark:text-[#C9CDD6]">
                  {BRAND.productSloganVi} · {BRAND.productSloganEn}
                </p>
              </div>

              {/* Tier Selector Buttons */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#1D2433]/75 dark:text-[#9BA5B8]">
                  Chọn phiên bản để xem chi tiết &amp; mức giá:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {PRODUCT_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`px-3 py-3 rounded-xl border text-center transition-colors ${
                        selectedTierId === tier.id
                          ? 'bg-[#1D2433] text-[#F5F4F1] border-[#1D2433] dark:bg-[#F5F4F1] dark:text-[#1D2433] dark:border-[#F5F4F1]'
                          : 'border-[#C9CDD6] dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] text-[#1D2433] dark:text-[#F5F4F1] hover:border-[#5B8FB9]'
                      }`}
                    >
                      <span className="block text-xs font-semibold">
                        {tier.name.replace('LUMORA Ortho-K ', '')}
                      </span>
                      <span className="block text-xs font-bold tabular-nums mt-0.5 opacity-90">
                        {tier.priceDisplay}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#C9CDD6]/70 dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#141B29] p-5 space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium text-[#1D2433]/70 dark:text-[#9BA5B8]">
                    Giá niêm yết tham khảo
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#1D2433] dark:text-[#F5F4F1] tabular-nums">
                    {activeTier.priceDisplay}
                  </span>
                </div>
                <p className="text-xs text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
                  {activeTier.description}
                </p>
                <p className="text-xs font-medium text-[#5B8FB9] dark:text-[#7EB2DB] pt-1">
                  {BRAND.priceNote}.
                </p>
              </div>

              <ul className="space-y-2.5 text-sm text-[#1D2433]/85 dark:text-[#C9CDD6]">
                {activeTier.included.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#5B8FB9] dark:text-[#7EB2DB] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`#/dat-hang?goi=${activeTier.id}`}
                  onClick={(e) => go(e, `/dat-hang?goi=${activeTier.id}`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <span>Đặt hàng {activeTier.name.replace('LUMORA Ortho-K ', '')}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#/huong-dan"
                  onClick={(e) => go(e, '/huong-dan')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] text-sm font-medium text-[#1D2433] dark:text-[#F5F4F1] hover:border-[#5B8FB9] whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  <span>Hướng dẫn dùng</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* So sánh 3 dòng sản phẩm */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            3 lựa chọn sản phẩm
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
            So sánh 3 phiên bản LUMORA Ortho-K
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCT_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border p-6 flex flex-col justify-between gap-6 ${
                selectedTierId === tier.id
                  ? 'border-[#1D2433] dark:border-[#7EB2DB] bg-white dark:bg-[#171E2C]'
                  : 'border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C]'
              }`}
            >
              <div className="space-y-4">
                <VisualMedia
                  src={tier.image}
                  alt={tier.imageAlt}
                  aspectRatio="4/3"
                  imgClassName={`object-cover ${tier.imagePosition || 'object-center'}`}
                />
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#5B8FB9] dark:text-[#7EB2DB]">
                    {tier.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                    {tier.name}
                  </h3>
                  <p className="font-display text-2xl font-bold text-[#1D2433] dark:text-[#F5F4F1] tabular-nums">
                    {tier.priceDisplay}
                  </p>
                </div>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  {tier.suitableFor}
                </p>
                <ul className="space-y-2 text-xs text-[#1D2433]/80 dark:text-[#C9CDD6] pt-2 border-t border-[#C9CDD6]/50 dark:border-[#2B354A]">
                  {tier.included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`#/dat-hang?goi=${tier.id}`}
                onClick={(e) => go(e, `/dat-hang?goi=${tier.id}`)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Chọn &amp; Đặt hàng ({tier.priceDisplay})</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Lợi ích & Công dụng */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Tính năng &amp; Công dụng
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
            Giải pháp chăm sóc thị lực ban đêm kết hợp theo dõi định kỳ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUR_BENEFITS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 space-y-3"
              >
                <Icon className="w-6 h-6 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bao bì & Có gì trong hộp (kèm ảnh bộ dụng cụ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
            <VisualMedia
              src={IMAGES.careKit}
              alt="Bộ dụng cụ vệ sinh và bảo quản kính áp tròng tặng kèm của LUMORA"
              aspectRatio="4/3"
            />
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B8FB9] dark:text-[#7EB2DB]">
              <PackageCheck className="w-4 h-4" aria-hidden="true" />
              <span>Thiết kế bao bì &amp; Bộ quà tặng</span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Gọn gàng, sạch sẽ và sẵn sàng kết nối ứng dụng
            </h2>
            <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
              Bao bì LUMORA Ortho-K được thiết kế nhỏ gọn, hiện đại theo tông trắng ngà và họa tiết
              đường sóng đặc trưng. Trên hộp thể hiện rõ thông tin sản phẩm, hướng dẫn sử dụng –
              bảo quản và mã QR để bạn tải ứng dụng theo dõi thị lực ngay lập tức.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#C9CDD6]/60 dark:border-[#2B354A]">
              <h3 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                Bảng thành phần: Có gì trong hộp LUMORA Ortho-K?
              </h3>
            </div>
            <div className="divide-y divide-[#C9CDD6]/50 dark:divide-[#2B354A]">
              {WHAT_IS_IN_BOX.map((row, index) => (
                <div
                  key={row.item}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums mt-1">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                        {row.item}
                      </p>
                      <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8] mt-0.5">
                        {row.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phù hợp với ai & Lưu ý quan trọng (kèm ảnh thăm khám) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4">
            <VisualMedia
              src={IMAGES.eyeExam}
              alt="Thăm khám khúc xạ và kiểm tra giác mạc trước khi sử dụng LUMORA Ortho-K"
              aspectRatio="auto"
              className="h-full min-h-[260px]"
            />
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-7 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              LUMORA Ortho-K phù hợp với ai?
            </h2>
            <ul className="space-y-3 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#5B8FB9] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Học sinh, sinh viên bị cận thị cần kiểm soát tiến triển độ cận và theo dõi định
                  kỳ.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#5B8FB9] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Người trẻ học tập, chơi thể thao muốn hạn chế sự vướng víu của kính gọng ban ngày.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#5B8FB9] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Trẻ em và người lớn được chuyên viên khúc xạ/bác sĩ đánh giá đủ điều kiện sử dụng.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                Lưu ý quan trọng
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
              <li>
                • Không tự ý mua hoặc đeo lens khi chưa có kết quả đo khám khúc xạ phù hợp.
              </li>
              <li>
                • Duy trì vệ sinh tay, làm sạch kính bằng dung dịch chuyên dụng và tái khám đúng hẹn.
              </li>
              <li>
                • Hiệu quả nhìn rõ ban ngày mang tính tạm thời; kết quả có thể khác nhau tùy cơ địa.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ConsultationCard />
        <MedicalNotice />
      </div>
    </div>
  );
};
