import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { PROMOTIONS, IMAGES } from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { VisualMedia } from '../components/VisualMedia';
import { ConsultationCard } from '../components/ConsultationCard';
import { MedicalNotice } from '../components/MedicalNotice';

interface PromotionsPageProps {
  onNavigate: (path: string) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-16 space-y-14">
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Ưu đãi &amp; Chăm sóc khách hàng
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              Chương trình khuyến mãi LUMORA
            </h1>
            <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              Các quyền lợi ưu đãi lần đầu mua hàng, voucher, tích điểm khách hàng thân thiết và quà
              tặng bộ dụng cụ vệ sinh lens dành cho khách hàng đăng ký cả 3 dòng sản phẩm.
            </p>
          </div>
          <div className="lg:col-span-5">
            <VisualMedia
              src={IMAGES.careKit}
              alt="Quà tặng bộ dụng cụ vệ sinh và bảo quản kính áp tròng chính hãng LUMORA"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROMOTIONS.map((promo, idx) => (
            <div
              key={promo.id}
              className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="p-5 pb-0">
                  <VisualMedia
                    src={promo.image}
                    alt={promo.imageAlt}
                    aspectRatio="16/10"
                    imgClassName={
                      promo.id === 'first-order' ? 'object-cover object-left sm:object-center' : 'object-cover object-center'
                    }
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                      Ưu đãi 0{idx + 1}
                    </span>
                    <Gift className="w-5 h-5 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      {promo.title}
                    </h2>
                    <p className="text-xs font-medium text-[#1D2433]/65 dark:text-[#9BA5B8]">
                      {promo.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
                    {promo.description}
                  </p>

                  <div className="rounded-2xl border border-[#C9CDD6]/60 dark:border-[#2B354A] bg-[#F5F4F1]/75 dark:bg-[#141B29] p-4 space-y-2 text-xs">
                    <p className="text-[#1D2433] dark:text-[#F5F4F1]">
                      <span className="font-semibold">Mức ưu đãi:</span> {promo.discountPlaceholder}
                    </p>
                    <p className="text-[#1D2433]/75 dark:text-[#C9CDD6]">
                      <span className="font-semibold">Điều kiện áp dụng:</span>{' '}
                      {promo.conditionPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <a
                  href="#/dat-hang"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/dat-hang');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>{promo.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ConsultationCard
          heading="Hỏi chi tiết về ưu đãi & voucher"
          subheading="Liên hệ trực tiếp với Huỳnh Duy Anh để kiểm tra mức ưu đãi áp dụng hiện hành và điều kiện đi kèm."
        />
        <MedicalNotice />
      </div>
    </div>
  );
};
