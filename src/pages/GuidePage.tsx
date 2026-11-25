import React from 'react';
import { Moon, Sun, Droplets, CalendarCheck, Ban, ArrowRight } from 'lucide-react';
import { GUIDE_STEPS, IMAGES } from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { MedicalNotice } from '../components/MedicalNotice';
import { ConsultationCard } from '../components/ConsultationCard';
import { VisualMedia } from '../components/VisualMedia';

interface GuidePageProps {
  onNavigate: (path: string) => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({ onNavigate }) => {
  return (
    <div className="pb-16 space-y-14 lg:space-y-18">
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Chăm sóc an toàn mỗi ngày
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              Hướng dẫn sử dụng &amp; bảo quản lens
            </h1>
            <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              Thực hiện đúng quy trình đeo, tháo, vệ sinh và lịch tái khám giúp bảo vệ bề mặt giác
              mạc và duy trì trải nghiệm thoải mái cùng LUMORA Ortho-K.
            </p>
          </div>
          <div className="lg:col-span-5">
            <VisualMedia
              src={IMAGES.careKit}
              alt="Bộ dụng cụ vệ sinh, dung dịch và hộp bảo quản kính áp tròng Ortho-K"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Đeo lens */}
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
          <VisualMedia
            src={IMAGES.nightRoutine}
            alt="Không gian vệ sinh và chuẩn bị đeo lens ban đêm"
            aspectRatio="16/9"
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F1] dark:bg-[#141B29] flex items-center justify-center text-[#5B8FB9]">
              <Moon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              1. Các bước đeo lens buổi tối
            </h2>
          </div>
          <ol className="space-y-3 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
            {GUIDE_STEPS.wear.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums shrink-0">
                  0{i + 1}.
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tháo lens */}
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
          <VisualMedia
            src={IMAGES.morningClarity}
            alt="Buổi sáng thức dậy và tháo lens đúng cách"
            aspectRatio="16/9"
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F1] dark:bg-[#141B29] flex items-center justify-center text-[#5B8FB9]">
              <Sun className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              2. Các bước tháo lens buổi sáng
            </h2>
          </div>
          <ol className="space-y-3 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
            {GUIDE_STEPS.remove.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums shrink-0">
                  0{i + 1}.
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Vệ sinh & bảo quản */}
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F1] dark:bg-[#141B29] flex items-center justify-center text-[#5B8FB9]">
              <Droplets className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              3. Vệ sinh &amp; bảo quản đúng chuẩn
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
            {GUIDE_STEPS.care.map((step) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="text-[#5B8FB9] font-bold">•</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Những điều cần tránh */}
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F4F1] dark:bg-[#141B29] flex items-center justify-center text-[#5B8FB9]">
              <Ban className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              4. Những điều cần tuyệt đối tránh
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
            {GUIDE_STEPS.avoid.map((step) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="text-[#5B8FB9] font-bold">•</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lịch tái khám kèm ảnh thăm khám */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <VisualMedia
              src={IMAGES.eyeExam}
              alt="Kiểm tra giác mạc định kỳ cùng chuyên viên khúc xạ"
              aspectRatio="4/3"
            />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <CalendarCheck className="w-6 h-6 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                Lịch tái khám định kỳ khuyến nghị
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { time: 'Sau đêm đầu tiên', detail: 'Kiểm tra độ vừa vặn của lens và phản ứng ban đầu của giác mạc.' },
                { time: 'Sau 1 tuần', detail: 'Đánh giá mức độ ổn định thị lực ban ngày và kiểm tra lại thao tác vệ sinh.' },
                { time: 'Sau 1 tháng', detail: 'Theo dõi đáp ứng giác mạc theo chu kỳ và cập nhật hồ sơ trên ứng dụng.' },
                { time: 'Mỗi 3 – 6 tháng', detail: 'Khám định kỳ toàn diện, kiểm tra tình trạng bề mặt kính và điều chỉnh nếu cần.' },
              ].map((item) => (
                <div
                  key={item.time}
                  className="rounded-2xl border border-[#C9CDD6]/65 dark:border-[#2B354A] bg-[#F5F4F1]/70 dark:bg-[#141B29] p-4 space-y-1"
                >
                  <p className="font-display text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                    {item.time}
                  </p>
                  <p className="text-xs text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#C9CDD6]/50 dark:border-[#2B354A]">
              <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8]">
                Lịch tái khám cụ thể có thể thay đổi theo chỉ định trực tiếp của chuyên viên khúc xạ hoặc bác sĩ.
              </p>
              <a
                href="#/dat-hang"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/dat-hang');
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] hover:underline"
              >
                <span>Đăng ký tư vấn ngay</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ConsultationCard compact />
        <MedicalNotice />
      </div>
    </div>
  );
};
