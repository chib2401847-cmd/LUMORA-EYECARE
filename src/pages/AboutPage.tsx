import React from 'react';
import { Phone, Mail, Eye, Sparkles, Check } from 'lucide-react';
import {
  BRAND,
  CONTACT,
  IMAGES,
  COLLAB_CAMPAIGN,
  CORE_VALUES,
  CORPORATE_CULTURE,
} from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { VisualMedia } from '../components/VisualMedia';
import { ConsultationCard } from '../components/ConsultationCard';

const CORE_VALUE_IMAGES = [
  { src: IMAGES.eyeExam, alt: 'Tận tâm lắng nghe và thăm khám kỹ lưỡng cho từng khách hàng' },
  { src: IMAGES.orthoKPro, alt: 'Thiết kế tròng kính cá nhân hóa theo thông số giác mạc riêng' },
  { src: IMAGES.appMockup, alt: 'Ứng dụng công nghệ theo dõi thị lực chủ động hằng ngày' },
  { src: IMAGES.morningClarity, alt: 'Mang lại sự sáng rõ và an tâm mỗi buổi sáng' },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="pb-16 space-y-16 lg:space-y-20">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Về chúng tôi · Hoạt động từ {BRAND.since}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              {BRAND.mainSlogan}
            </h1>
            <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              {BRAND.legalName} hoạt động trong lĩnh vực chăm sóc thị lực và công nghệ y tế, khởi
              đầu tại {BRAND.location} với định hướng mở rộng phục vụ người trẻ trên khắp các thành
              phố lớn tại Việt Nam.
            </p>
          </div>
          <div className="lg:col-span-5">
            <VisualMedia
              src={IMAGES.eyeExam}
              alt="Không gian chăm sóc thị lực hiện đại và thân thiện tại LUMORA"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* Câu chuyện thương hiệu & Ý nghĩa logo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Câu chuyện thương hiệu LUMORA
            </h2>
            <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              LUMORA bắt đầu từ một mong muốn giản dị nhưng thiết thực: giúp học sinh, sinh viên
              và người trẻ Việt Nam chăm sóc đôi mắt thuận tiện và chủ động hơn trong bối cảnh tỷ
              lệ cận thị ngày càng phổ biến.
            </p>
            <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              Thay vì chỉ dừng lại ở việc bán kính áp tròng ban đêm, chúng tôi xây dựng hệ sinh
              thái đồng hành gồm 3 phiên bản lens <span className="font-semibold">LUMORA Ortho-K</span>,
              ứng dụng theo dõi tình trạng và tiến trình thị lực, cùng sự tư vấn tận tâm để mỗi
              người dùng hiểu rõ đôi mắt của mình đang thay đổi như thế nào qua từng tháng.
            </p>
            <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              Tên gọi <span className="font-semibold">LUMORA</span> gợi liên tưởng đến ánh sáng và
              tầm nhìn — đại diện cho hy vọng mang lại sự sáng rõ và thói quen bảo vệ thị lực bền
              vững cho thế hệ trẻ.
            </p>

            <div className="pt-2">
              <VisualMedia
                src={IMAGES.studentStudy}
                alt="Người trẻ học tập chủ động với thói quen bảo vệ mắt lành mạnh"
                aspectRatio="16/9"
              />
            </div>
          </div>

          {/* Ý nghĩa logo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
              <div className="rounded-2xl bg-[#F5F4F1] p-6 flex items-center justify-center border border-[#C9CDD6]/50">
                <img
                  src={BRAND.logoSrc}
                  alt="Biểu tượng đôi mắt và ánh sáng trên nền họa tiết sóng tròn của LUMORA Eyecare"
                  referrerPolicy="no-referrer"
                  className="w-52 h-52 object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B8FB9] dark:text-[#7EB2DB]">
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>Ý nghĩa biểu trưng</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  Đôi mắt nét vẽ tay &amp; Tia sáng đồng hành
                </h3>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  Biểu tượng đôi mắt vẽ tay gần gũi kết hợp các tia sáng tỏa đều tượng trưng cho sự
                  tỉnh táo và tầm nhìn rõ ràng mỗi sớm mai. Vòng sóng tròn bao quanh gợi nhắc đường
                  cong giác mạc và nhịp chăm sóc đều đặn mỗi ngày.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiến dịch hợp tác thương hiệu: LUMORA x HIEUTHUHAI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-7 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
                Hợp tác thương hiệu
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                {COLLAB_CAMPAIGN.title} — Lan tỏa thói quen chăm sóc mắt chủ động cho thế hệ trẻ
              </h2>
              <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
                {COLLAB_CAMPAIGN.summary}
              </p>
              <ul className="space-y-2 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
                {COLLAB_CAMPAIGN.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#5B8FB9] dark:text-[#7EB2DB] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <VisualMedia
                src={IMAGES.collabDay}
                alt="LUMORA x HIEUTHUHAI – Chiến dịch hợp tác phiên bản ban ngày"
                aspectRatio="4/3"
                imgClassName="object-cover object-top"
              />
              <VisualMedia
                src={IMAGES.collabNight}
                alt="LUMORA x HIEUTHUHAI – Chiến dịch hợp tác phiên bản ban đêm"
                aspectRatio="4/3"
                imgClassName="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tầm nhìn & Sứ mạng */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-7 sm:p-9 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Tầm nhìn
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Tiên phong chăm sóc và kiểm soát cận thị ứng dụng công nghệ
            </h2>
            <p className="text-sm sm:text-base text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
              Trở thành thương hiệu hàng đầu Việt Nam về chăm sóc và kiểm soát cận thị, tiên phong
              ứng dụng công nghệ số để đồng hành lâu dài cùng sức khỏe thị lực của học sinh, sinh
              viên và người trẻ.
            </p>
          </div>

          <div className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-7 sm:p-9 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Sứ mạng
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Thuận tiện, cá nhân hóa và an toàn cho người trẻ
            </h2>
            <p className="text-sm sm:text-base text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
              Mang đến giải pháp chăm sóc và kiểm soát cận thị kết hợp công nghệ, giúp người trẻ chủ
              động theo dõi và bảo vệ thị lực một cách thuận tiện, cá nhân hóa và an toàn theo chuẩn
              mực chuyên môn.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Giá trị cốt lõi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Giá trị cốt lõi
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
            4 trụ cột định hình cách làm việc của LUMORA
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={val.key}
              className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] overflow-hidden flex flex-col"
            >
              <div className="p-3.5 pb-0">
                <VisualMedia
                  src={CORE_VALUE_IMAGES[idx].src}
                  alt={CORE_VALUE_IMAGES[idx].alt}
                  aspectRatio="4/3"
                />
              </div>
              <div className="p-5 space-y-2.5 flex-1">
                <p className="text-xs font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                  0{idx + 1} · {val.key}
                </p>
                <h3 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  {val.viTitle}
                </h3>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Văn hóa & Chuẩn mực doanh nghiệp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-7 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
                Văn hóa &amp; Chuẩn mực
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                An toàn – Trung thực – Tận tâm – Đổi mới – Trách nhiệm
              </h2>
              <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                Tính cách thương hiệu LUMORA được xây dựng trên 5 điểm chạm: Quan tâm · Hiện đại ·
                Thân thiện · Đáng tin cậy · Chủ động — thể hiện nhất quán trong từng sản phẩm, ứng
                dụng theo dõi và mỗi buổi tư vấn cùng người trẻ.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <VisualMedia
                src={IMAGES.campusOutdoor}
                alt="Đồng hành cùng học sinh, sinh viên Việt Nam tự tin hoạt động ngoài trời"
                aspectRatio="4/3"
              />
              <VisualMedia
                src={IMAGES.careKit}
                alt="Chuẩn mực vệ sinh và an toàn trong từng bộ sản phẩm LUMORA"
                aspectRatio="4/3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORPORATE_CULTURE.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#C9CDD6]/60 dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] p-5 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5B8FB9] dark:text-[#7EB2DB]">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Nguyên tắc 0{index + 1}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đội ngũ Chăm sóc khách hàng */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Đội ngũ đồng hành
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
            Phụ trách Chăm sóc khách hàng
          </h2>
        </div>

        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-9 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C9CDD6]/50 dark:border-[#2B354A] pb-5">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                {CONTACT.advisorName}
              </h3>
              <p className="text-sm font-medium text-[#5B8FB9] dark:text-[#7EB2DB]">
                {CONTACT.advisorTitle} · LUMORA Eyecare
              </p>
            </div>
            <p className="text-xs font-medium text-[#1D2433]/70 dark:text-[#9BA5B8]">
              Giờ làm việc: {BRAND.workingHoursPlaceholder}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed max-w-3xl">
            Phụ trách trực tiếp việc tiếp nhận yêu cầu tư vấn, giải đáp thắc mắc về 3 dòng sản
            phẩm LUMORA Ortho-K, hỗ trợ xác nhận đơn hàng cũng như nhắc lịch và đồng hành chăm sóc
            khách hàng trong suốt quá trình sử dụng.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold tabular-nums"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] text-sm font-medium text-[#1D2433] dark:text-[#F5F4F1] hover:border-[#5B8FB9]"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationCard compact />
      </div>
    </div>
  );
};
