import React, { useState, useEffect } from 'react';
import { Phone, Mail, ExternalLink, Info, CheckCircle2, Check } from 'lucide-react';
import { BRAND, CONTACT, PRODUCT_TIERS } from '../data/lumoraData';
import { ProductTier } from '../types';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { MedicalNotice } from '../components/MedicalNotice';

interface OrderPageProps {
  initialTierId?: ProductTier['id'];
}

export const OrderPage: React.FC<OrderPageProps> = ({ initialTierId }) => {
  const [selectedTierId, setSelectedTierId] = useState<ProductTier['id']>(
    initialTierId || 'plus'
  );

  useEffect(() => {
    if (initialTierId) {
      setSelectedTierId(initialTierId);
    }
  }, [initialTierId]);

  const activeTier = PRODUCT_TIERS.find((t) => t.id === selectedTierId) || PRODUCT_TIERS[1];

  return (
    <div className="pb-16 space-y-12 lg:space-y-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Đăng ký đặt hàng &amp; Tư vấn cá nhân hóa
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              Đặt hàng LUMORA Ortho-K
            </h1>
            <p className="text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed max-w-2xl">
              Chọn dòng sản phẩm bạn quan tâm trong 3 phiên bản ({BRAND.priceTiersSummary}) và điền
              biểu mẫu đăng ký bên dưới để nhận tư vấn trực tiếp.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] aspect-[16/10]">
              <img
                src={activeTier.image}
                alt={activeTier.imageAlt}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover ${activeTier.imagePosition || 'object-center'}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chọn nhanh phiên bản sản phẩm muốn đăng ký */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
            1. Chọn phiên bản sản phẩm bạn muốn tìm hiểu &amp; đặt hàng
          </h2>
          <span className="text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
            Có thể điều chỉnh sau khi trao đổi cùng chuyên viên
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRODUCT_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTierId(tier.id)}
                className={`rounded-2xl border p-4 text-left transition-colors flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'border-[#1D2433] dark:border-[#7EB2DB] bg-white dark:bg-[#171E2C] ring-1 ring-[#1D2433] dark:ring-[#7EB2DB]'
                    : 'border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white/70 dark:bg-[#171E2C]/70 hover:border-[#5B8FB9]'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <img
                    src={tier.image}
                    alt={tier.name}
                    referrerPolicy="no-referrer"
                    className={`w-20 h-16 rounded-xl object-cover shrink-0 ${tier.imagePosition || 'object-center'}`}
                  />
                  <div className="space-y-0.5 min-w-0">
                    <p className="font-display text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      {tier.name}
                    </p>
                    <p className="font-display text-lg font-bold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                      {tier.priceDisplay}
                    </p>
                    <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8] line-clamp-2">
                      {tier.suitableFor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#C9CDD6]/50 dark:border-[#2B354A] text-xs font-medium">
                  <span className={isSelected ? 'text-[#1D2433] dark:text-[#F5F4F1]' : 'text-[#1D2433]/65 dark:text-[#9BA5B8]'}>
                    {isSelected ? 'Đang chọn phiên bản này' : 'Nhấn để chọn'}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[#5B8FB9]" aria-hidden="true" />}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quy trình 3 bước */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              step: 'Bước 01',
              title: 'Điền form đăng ký',
              desc: 'Cung cấp thông tin liên hệ và ghi chú dòng sản phẩm quan tâm (Standard, Plus hoặc Pro).',
            },
            {
              step: 'Bước 02',
              title: 'LUMORA liên hệ tư vấn & xác nhận giá',
              desc: 'Bộ phận CSKH trao đổi tình trạng mắt, hướng dẫn thăm khám và xác nhận mức giá phù hợp.',
            },
            {
              step: 'Bước 03',
              title: 'Xác nhận và giao hàng',
              desc: 'Hoàn tất xác nhận đơn hàng, nhận bộ sản phẩm kèm mã QR ứng dụng và lịch theo dõi.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 space-y-2"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B8FB9] dark:text-[#7EB2DB]">
                {item.step}
              </p>
              <h2 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                {item.title}
              </h2>
              <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form nhúng + Thẻ tư vấn bên cạnh */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Embedded Google Form */}
          <div className="lg:col-span-8 space-y-5">
            <div className="rounded-2xl border border-[#5B8FB9]/40 bg-[#5B8FB9]/10 dark:bg-[#7EB2DB]/12 p-5 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#5B8FB9] dark:text-[#7EB2DB] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1 text-sm text-[#1D2433] dark:text-[#F5F4F1]">
                <p className="font-semibold">
                  

            <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#C9CDD6]/60 dark:border-[#2B354A]">
                <div>
                  <h2 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                    2. Biểu mẫu đăng ký đặt hàng LUMORA
                  </h2>
                  <p className="text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
                    Nếu biểu mẫu bên dưới không hiển thị trên trình duyệt của bạn, hãy bấm nút mở
                    tab mới.
                  </p>
                </div>

                <a
                  href={BRAND.orderFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                >
                  <span>Mở form đặt hàng</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="w-full overflow-hidden rounded-2xl border border-[#C9CDD6]/50 dark:border-[#2B354A] bg-[#F5F4F1]">
                <iframe
                  title="Form đăng ký đặt hàng LUMORA Eyecare"
                  src={BRAND.orderFormUrl}
                  className="w-full h-[680px] border-0"
                  loading="lazy"
                >
                  Đang tải biểu mẫu đặt hàng...
                </iframe>
              </div>
            </div>
          </div>

          {/* Right: Tư vấn trước khi đặt */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-7 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5B8FB9] dark:text-[#7EB2DB]">
                  Hỗ trợ trước khi đặt hàng
                </p>
                <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Muốn hỏi trước khi đặt? Tư vấn trực tiếp với {CONTACT.advisorName}
                </h2>
                <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8]">
                  {CONTACT.advisorTitle} · Giờ làm việc: {BRAND.workingHoursPlaceholder}
                </p>
              </div>

              <p className="text-sm text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
                Bạn đang phân vân giữa 3 mức giá 10.499.000đ, 14.499.000đ và 19.499.000đ? Hãy gọi
                hoặc gửi email để được tư vấn dòng phù hợp với độ cận hiện tại của bạn.
              </p>

              <div className="space-y-3">
                <a
                  href={CONTACT.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold hover:opacity-90 transition-opacity tabular-nums"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Gọi ngay · {CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={CONTACT.emailHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#5B8FB9]/50 bg-[#5B8FB9]/10 text-[#1D2433] dark:text-[#F5F4F1] text-sm font-semibold hover:bg-[#5B8FB9]/20 transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Gửi email tư vấn</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#C9CDD6]/50 dark:border-[#2B354A] space-y-2 text-xs text-[#1D2433]/75 dark:text-[#C9CDD6]">
                <p className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Cam kết đồng hành sau đặt hàng:
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Tư vấn &amp; xác nhận rõ từng hạng mục trước khi giao.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Hướng dẫn chi tiết đeo – tháo – vệ sinh &amp; cài đặt ứng dụng.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Nhắc lịch tái khám định kỳ và chăm sóc khách hàng dài lâu.</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalNotice />
      </div>
    </div>
  );
};
