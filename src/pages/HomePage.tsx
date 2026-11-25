import React from 'react';
import { motion } from 'motion/react';
import {
  Moon,
  Glasses,
  ShieldCheck,
  Users,
  ArrowRight,
  Smartphone,
  Bell,
  History,
  Gift,
  Check,
  QrCode,
  Sparkles,
} from 'lucide-react';
import {
  BRAND,
  IMAGES,
  COLLAB_CAMPAIGN,
  FOUR_BENEFITS,
  PRODUCT_TIERS,
  BLOG_POSTS,
  PROMOTIONS,
} from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { ConsultationCard } from '../components/ConsultationCard';
import { MedicalNotice } from '../components/MedicalNotice';
import { VisualMedia } from '../components/VisualMedia';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const benefitIcons = [Moon, Glasses, ShieldCheck, Users];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const go = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/60 dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#0F141F]">
        <WaveBackdrop variant="hero" className="absolute inset-x-0 bottom-0 h-72 opacity-80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#5B8FB9] dark:text-[#7EB2DB]">
                LUMORA Eyecare · {BRAND.location}
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.18] text-[#1D2433] dark:text-[#F5F4F1]">
                {BRAND.mainSlogan}
              </h1>

              <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed max-w-xl">
                <span className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  {BRAND.productSloganVi}
                </span>{' '}
                — Giải pháp kính áp tròng ban đêm{' '}
                <span className="font-semibold">LUMORA Ortho-K</span> hỗ trợ kiểm soát cận thị,
                kết hợp ứng dụng theo dõi thị lực dành cho học sinh, sinh viên và người trẻ.
              </p>

              {/* 3 Price Tiers Summary */}
              <div className="rounded-2xl border border-[#C9CDD6] dark:border-[#2B354A] bg-white/85 dark:bg-[#171E2C]/90 p-4 sm:p-5 max-w-lg space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-xs font-medium text-[#1D2433]/70 dark:text-[#9BA5B8]">
                    3 phiên bản Ortho-K · Giá từ
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#1D2433] dark:text-[#F5F4F1] tabular-nums">
                    10.499.000đ
                  </span>
                </div>
                <p className="text-xs font-medium text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                  Các mức giá: {BRAND.priceTiersSummary}
                </p>
                <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8]">
                  Giá cuối cùng theo từng dòng được LUMORA tư vấn cụ thể khi liên hệ.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#/dat-hang"
                  onClick={(e) => go(e, '/dat-hang')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B8FB9]"
                >
                  <span>Đặt hàng ngay</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#/san-pham"
                  onClick={(e) => go(e, '/san-pham')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#5B8FB9]/60 bg-[#5B8FB9]/10 text-[#1D2433] dark:text-[#F5F4F1] dark:bg-[#7EB2DB]/15 text-sm font-semibold hover:bg-[#5B8FB9]/20 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B8FB9]"
                >
                  <span>Xem 3 dòng sản phẩm</span>
                </a>
              </div>
            </motion.div>

            {/* Right Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex"
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] shadow-sm min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">
                <img
                  src={BRAND.productImgSrc}
                  alt="Hộp sản phẩm kính áp tròng ban đêm LUMORA Ortho-K kèm lens và hộp bảo quản"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-left sm:object-[20%_center] lg:object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BRAND COLLABORATION: LUMORA x HIEUTHUHAI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 lg:p-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>{COLLAB_CAMPAIGN.subtitle}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
                {COLLAB_CAMPAIGN.title}
              </h2>
              <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
                {COLLAB_CAMPAIGN.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`#/tin-tuc/${COLLAB_CAMPAIGN.articleSlug}`}
                onClick={(e) => go(e, `/tin-tuc/${COLLAB_CAMPAIGN.articleSlug}`)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <span>Đọc bài viết về màn collab</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-6">
              <VisualMedia
                src={IMAGES.collabDay}
                alt="Chiến dịch hợp tác LUMORA Eyecare x HIEUTHUHAI phiên bản ban ngày"
                aspectRatio="4/3"
                imgClassName="object-cover object-top"
              />
            </div>
            <div className="lg:col-span-6">
              <VisualMedia
                src={IMAGES.collabNight}
                alt="Chiến dịch hợp tác LUMORA Eyecare x HIEUTHUHAI phiên bản ban đêm"
                aspectRatio="4/3"
                imgClassName="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 LỢI ÍCH NỔI BẬT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Giá trị sử dụng thực tế
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
            Vì sao nhiều học sinh, sinh viên tìm hiểu LUMORA Ortho-K?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUR_BENEFITS.map((item, idx) => {
            const Icon = benefitIcons[idx];
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 space-y-3.5"
              >
                <div className="w-11 h-11 rounded-xl border border-[#C9CDD6]/70 dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#1D2433] flex items-center justify-center text-[#1D2433] dark:text-[#7EB2DB]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#1D2433] dark:text-[#F5F4F1] leading-snug">
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

      {/* 4. 3 SẢN PHẨM & 3 MỨC GIÁ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Bộ sưu tập sản phẩm
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              3 phiên bản LUMORA Ortho-K phù hợp từng nhu cầu thị lực
            </h2>
          </div>
          <a
            href="#/san-pham"
            onClick={(e) => go(e, '/san-pham')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] hover:underline whitespace-nowrap"
          >
            <span>So sánh chi tiết sản phẩm</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_TIERS.map((tier) => (
            <article
              key={tier.id}
              className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="p-4 pb-0">
                  <VisualMedia
                    src={tier.image}
                    alt={tier.imageAlt}
                    aspectRatio="4/3"
                    imgClassName={`object-cover ${tier.imagePosition || 'object-center'}`}
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-[#5B8FB9] dark:text-[#7EB2DB]">
                      {tier.subtitle}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      {tier.name}
                    </h3>
                    <p className="font-display text-2xl font-bold text-[#1D2433] dark:text-[#F5F4F1] tabular-nums pt-1">
                      {tier.priceDisplay}
                    </p>
                  </div>

                  <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                    {tier.suitableFor}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#C9CDD6]/50 dark:border-[#2B354A] text-xs text-[#1D2433]/80 dark:text-[#C9CDD6]">
                    {tier.included.slice(0, 3).map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Check
                          className="w-3.5 h-3.5 text-[#5B8FB9] dark:text-[#7EB2DB] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 flex gap-2.5">
                <a
                  href={`#/dat-hang?goi=${tier.id}`}
                  onClick={(e) => go(e, `/dat-hang?goi=${tier.id}`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <span>Đặt hàng gói này</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="#/san-pham"
                  onClick={(e) => go(e, '/san-pham')}
                  className="inline-flex items-center justify-center px-3.5 py-3 rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] text-xs font-medium text-[#1D2433] dark:text-[#F5F4F1] hover:border-[#5B8FB9] whitespace-nowrap"
                >
                  Chi tiết
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. VẤN ĐỀ -> GIẢI PHÁP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 min-h-[260px]">
              <img
                src={IMAGES.studentStudy}
                alt="Sinh viên học tập với ánh sáng tốt để bảo vệ thị lực"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
                  Vấn đề &amp; Giải pháp
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
                  Cận thị ngày một tăng — Bạn có biết thị lực mình thay đổi ra sao?
                </h2>
                <p className="text-sm sm:text-base text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  Lịch học tập dày đặc và thời gian dùng màn hình kéo dài khiến cận thị ở học sinh,
                  sinh viên gia tăng nhanh. Nhiều bạn chỉ đi đo lại mắt khi độ cận đã tăng rõ rệt.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9CDD6]/60 dark:border-[#2B354A] bg-[#F5F4F1]/75 dark:bg-[#141B29] p-5 space-y-2">
                <h3 className="font-display text-base sm:text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Đồng hành cả ban đêm lẫn thói quen mỗi ngày
                </h3>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  LUMORA kết hợp kính áp tròng ban đêm Ortho-K với ứng dụng theo dõi thị lực cá
                  nhân hóa và lịch tái khám định kỳ, giúp bạn chủ động quan sát tiến trình đôi mắt
                  của chính mình.
                </p>
              </div>

              <div>
                <a
                  href="#/gioi-thieu"
                  onClick={(e) => go(e, '/gioi-thieu')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1] hover:text-[#5B8FB9] dark:hover:text-[#7EB2DB] transition-colors"
                >
                  <span>Đọc câu chuyện thương hiệu LUMORA</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GIỚI THIỆU NHANH ỨNG DỤNG THEO DÕI THỊ LỰC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Ứng dụng đồng hành
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              Theo dõi tình trạng và tiến trình thị lực ngay trên điện thoại
            </h2>
            <p className="text-sm sm:text-base text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
              Mỗi hộp LUMORA Ortho-K đều có mã QR kết nối ứng dụng. Bạn có thể lưu lịch sử đo
              khúc xạ, nhận nhắc lịch giờ đeo – tháo lens và lịch tái khám định kỳ để hình thành
              thói quen chăm sóc mắt bền vững.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="rounded-xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-4 space-y-2">
                <History className="w-5 h-5 text-[#5B8FB9]" aria-hidden="true" />
                <p className="text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Lưu lịch sử
                </p>
                <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8]">
                  Ghi nhận các mốc đo thị lực và cảm nhận khi đeo kính.
                </p>
              </div>
              <div className="rounded-xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-4 space-y-2">
                <Bell className="w-5 h-5 text-[#5B8FB9]" aria-hidden="true" />
                <p className="text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Nhắc lịch thông minh
                </p>
                <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8]">
                  Nhắc giờ đeo lens buổi tối, vệ sinh kính và lịch tái khám.
                </p>
              </div>
              <div className="rounded-xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-4 space-y-2">
                <QrCode className="w-5 h-5 text-[#5B8FB9]" aria-hidden="true" />
                <p className="text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Quét QR trên hộp
                </p>
                <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8]">
                  Tải và đồng bộ nhanh thông tin sản phẩm chính hãng.
                </p>
              </div>
            </div>

            <div>
              <a
                href="#/ung-dung"
                onClick={(e) => go(e, '/ung-dung')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#1D2433]/20 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1] hover:border-[#5B8FB9] transition-colors"
              >
                <Smartphone className="w-4 h-4 text-[#5B8FB9]" aria-hidden="true" />
                <span>Khám phá &amp; dùng thử mô phỏng app</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <VisualMedia
              src={IMAGES.appMockup}
              alt="Điện thoại hiển thị ứng dụng theo dõi thị lực LUMORA bên cạnh hộp đựng lens"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* 7. 3 BƯỚC SỬ DỤNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Quy trình đồng hành
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
            3 bước bắt đầu cùng LUMORA Ortho-K
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              image: IMAGES.eyeExam,
              alt: 'Thăm khám và đo bản đồ giác mạc cùng chuyên viên khúc xạ',
              title: 'Tư vấn & thăm khám chuyên môn',
              desc: 'Đăng ký thông tin để được tư vấn chọn dòng Standard, Plus hay Pro, đồng thời thăm khám khúc xạ và đo giác mạc trước khi chốt kính.',
            },
            {
              step: '02',
              image: IMAGES.nightRoutine,
              alt: 'Chuẩn bị vệ sinh và đeo lens LUMORA Ortho-K trước khi đi ngủ',
              title: 'Vệ sinh & đeo lens ban đêm',
              desc: 'Vệ sinh tay và đeo lens theo đúng hướng dẫn trước khi đi ngủ. Quét mã QR trên hộp để kích hoạt nhắc lịch trên ứng dụng.',
            },
            {
              step: '03',
              image: IMAGES.morningClarity,
              alt: 'Thức dậy buổi sáng với tầm nhìn thoải mái sau giấc ngủ',
              title: 'Tháo lens buổi sáng & tái khám',
              desc: 'Tháo và bảo quản kính sạch sẽ mỗi sáng, sinh hoạt thoải mái ban ngày và duy trì lịch tái khám định kỳ theo hẹn.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col"
            >
              <div className="p-4 pb-0">
                <VisualMedia src={item.image} alt={item.alt} aspectRatio="4/3" />
              </div>
              <div className="p-6 space-y-2.5">
                <span className="font-display text-sm font-bold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                  Bước {item.step}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. KHUYẾN MÃI NỔI BẬT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
                Ưu đãi &amp; Quà tặng kèm
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
                Chương trình dành cho khách hàng LUMORA
              </h2>
            </div>
            <a
              href="#/khuyen-mai"
              onClick={(e) => go(e, '/khuyen-mai')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] hover:underline whitespace-nowrap"
            >
              <span>Xem tất cả ưu đãi</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROMOTIONS.slice(0, 2).map((promo) => (
              <div
                key={promo.id}
                className="rounded-2xl border border-[#C9CDD6]/65 dark:border-[#2B354A] bg-[#F5F4F1]/70 dark:bg-[#141B29] overflow-hidden grid grid-cols-1 sm:grid-cols-12"
              >
                <div className="sm:col-span-5 min-h-[180px]">
                  <img
                    src={promo.image}
                    alt={promo.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-left sm:object-center"
                  />
                </div>
                <div className="sm:col-span-7 p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#5B8FB9] dark:text-[#7EB2DB]">
                      <Gift className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{promo.subtitle}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      {promo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                      {promo.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#/dat-hang"
                      onClick={(e) => go(e, '/dat-hang')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1] hover:text-[#5B8FB9] transition-colors"
                    >
                      <span>{promo.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 3 TIN MỚI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Tin tức &amp; Kiến thức
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              Bài viết mới từ LUMORA
            </h2>
          </div>
          <a
            href="#/tin-tuc"
            onClick={(e) => go(e, '/tin-tuc')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] hover:underline whitespace-nowrap"
          >
            <span>Xem toàn bộ bài viết</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col"
            >
              <a
                href={`#/tin-tuc/${post.slug}`}
                onClick={(e) => go(e, `/tin-tuc/${post.slug}`)}
                className="block p-4 pb-0"
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
                  <h3 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1] leading-snug">
                    <a
                      href={`#/tin-tuc/${post.slug}`}
                      onClick={(e) => go(e, `/tin-tuc/${post.slug}`)}
                      className="hover:text-[#5B8FB9] dark:hover:text-[#7EB2DB] transition-colors"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <a
                    href={`#/tin-tuc/${post.slug}`}
                    onClick={(e) => go(e, `/tin-tuc/${post.slug}`)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1] hover:text-[#5B8FB9]"
                  >
                    <span>Đọc bài viết</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. THẺ TƯ VẤN TRỰC TIẾP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationCard />
      </div>

      {/* 11. BANNER KÊU GỌI ĐẶT HÀNG CUỐI TRANG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#C9CDD6] dark:border-[#2B354A] min-h-[300px] sm:min-h-[340px] flex items-center">
          <img
            src={BRAND.productImgSrc}
            alt="LUMORA Ortho-K – Đăng ký tư vấn và đặt hàng"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#1D2433]/92 via-[#1D2433]/82 to-[#1D2433]/65"
          />

          <div className="relative z-10 p-7 sm:p-12 max-w-2xl space-y-4 text-[#F5F4F1]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7EB2DB]">
              {BRAND.productSloganEn}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Sẵn sàng chọn phiên bản phù hợp cho đôi mắt của bạn?
            </h2>
            <p className="text-sm sm:text-base text-[#F5F4F1]/85 leading-relaxed">
              Đăng ký đặt hàng với 3 mức giá minh bạch (10.499.000đ · 14.499.000đ · 19.499.000đ).
              Bộ phận Chăm sóc khách hàng LUMORA sẽ liên hệ tư vấn cụ thể trước khi xác nhận đơn.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#/dat-hang"
                onClick={(e) => go(e, '/dat-hang')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F5F4F1] text-[#1D2433] text-sm font-semibold hover:bg-white transition-colors whitespace-nowrap"
              >
                <span>Đặt hàng &amp; Đăng ký tư vấn</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#/huong-dan"
                onClick={(e) => go(e, '/huong-dan')}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#F5F4F1]/40 text-[#F5F4F1] text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Xem hướng dẫn sử dụng
              </a>
            </div>
          </div>
        </div>

        <MedicalNotice />
      </section>
    </div>
  );
};
