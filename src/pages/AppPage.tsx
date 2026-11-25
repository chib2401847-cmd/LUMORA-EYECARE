import React, { useState } from 'react';
import { Bell, Calendar, History, QrCode, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGES, BRAND } from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { VisualMedia } from '../components/VisualMedia';
import { ConsultationCard } from '../components/ConsultationCard';

interface AppPageProps {
  onNavigate: (path: string) => void;
}

type SimTab = 'cycle' | 'reminders' | 'history';

export const AppPage: React.FC<AppPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<SimTab>('cycle');

  return (
    <div className="pb-16 space-y-16 lg:space-y-20">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
              Hệ sinh thái công nghệ LUMORA
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
              Ứng dụng theo dõi thị lực cá nhân hóa
            </h1>
            <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              Đồng bộ cùng cả 3 phiên bản LUMORA Ortho-K để bạn chủ động ghi nhận tình trạng mắt
              theo chu kỳ, nhận nhắc lịch sử dụng hằng ngày và không bỏ lỡ buổi tái khám quan trọng.
            </p>
          </div>
          <div className="lg:col-span-5">
            <VisualMedia
              src={IMAGES.appMockup}
              alt="Ứng dụng theo dõi thị lực LUMORA trên điện thoại bên cạnh hộp đựng lens"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* Interactive App Simulator + Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Simulator */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                Mô phỏng trải nghiệm trên điện thoại
              </h2>
              <p className="text-sm text-[#1D2433]/75 dark:text-[#C9CDD6]">
                Chọn từng mục bên dưới để xem trước cách ứng dụng hỗ trợ theo dõi thói quen chăm sóc
                mắt (dữ liệu minh họa mẫu).
              </p>
            </div>

            {/* Simulator Frame */}
            <div className="rounded-3xl border border-[#C9CDD6] dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-5 sm:p-6 max-w-md shadow-sm space-y-5">
              {/* App Header */}
              <div className="flex items-center justify-between border-b border-[#C9CDD6]/50 dark:border-[#2B354A] pb-3.5">
                <div>
                  <p className="text-xs text-[#5B8FB9] dark:text-[#7EB2DB] font-medium">
                    Hồ sơ mẫu · Sinh viên
                  </p>
                  <p className="font-display text-base font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                    Nhật ký thị lực LUMORA
                  </p>
                </div>
                <Smartphone className="w-5 h-5 text-[#1D2433]/60 dark:text-[#9BA5B8]" aria-hidden="true" />
              </div>

              {/* Segmented Tabs */}
              <div
                role="tablist"
                aria-label="Tính năng ứng dụng mô phỏng"
                className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#F5F4F1] dark:bg-[#141B29]"
              >
                {[
                  { id: 'cycle' as const, label: 'Chu kỳ' },
                  { id: 'reminders' as const, label: 'Nhắc lịch' },
                  { id: 'history' as const, label: 'Lịch sử' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-white dark:bg-[#1D2433] text-[#1D2433] dark:text-[#F5F4F1] shadow-sm'
                        : 'text-[#1D2433]/65 dark:text-[#9BA5B8] hover:text-[#1D2433] dark:hover:text-[#F5F4F1]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'cycle' && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-[#F5F4F1] dark:bg-[#141B29] p-4 space-y-2">
                    <p className="text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
                      Chu kỳ theo dõi hiện tại
                    </p>
                    <p className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1] tabular-nums">
                      Tuần 04 · Đeo đều 7/7 đêm
                    </p>
                    <p className="text-xs text-[#1D2433]/75 dark:text-[#C9CDD6]">
                      Ghi chú sáng nay: Mắt thoải mái, không cộm, đã vệ sinh hộp đựng.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      Nhật ký nhanh hôm nay
                    </p>
                    <div className="flex items-center justify-between py-2 border-b border-[#C9CDD6]/40 dark:border-[#2B354A]">
                      <span className="text-[#1D2433]/75 dark:text-[#C9CDD6]">Thời gian ngủ đeo lens</span>
                      <span className="font-semibold tabular-nums">7 giờ 30 phút</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-[#C9CDD6]/40 dark:border-[#2B354A]">
                      <span className="text-[#1D2433]/75 dark:text-[#C9CDD6]">Thay dung dịch bảo quản</span>
                      <span className="font-semibold text-[#5B8FB9] dark:text-[#7EB2DB]">Đã hoàn thành</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reminders' && (
                <div className="space-y-3">
                  {[
                    { time: '22:00', title: 'Rửa tay & đeo lens LUMORA Ortho-K', freq: 'Hằng ngày' },
                    { time: '06:30', title: 'Nhỏ nước mắt nhân tạo & tháo lens', freq: 'Hằng ngày' },
                    { time: '09:00', title: 'Lịch tái khám định kỳ tháng thứ 1', freq: 'Theo lịch hẹn' },
                  ].map((rem) => (
                    <div
                      key={rem.title}
                      className="rounded-xl border border-[#C9CDD6]/60 dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] p-3.5 flex items-start gap-3"
                    >
                      <span className="font-display text-sm font-bold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums shrink-0">
                        {rem.time}
                      </span>
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                          {rem.title}
                        </p>
                        <p className="text-[11px] text-[#1D2433]/65 dark:text-[#9BA5B8]">
                          {rem.freq}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-3 text-xs">
                  <p className="text-[#1D2433]/70 dark:text-[#9BA5B8]">
                    Lịch sử các buổi kiểm tra cùng chuyên viên khúc xạ (mẫu tham khảo):
                  </p>
                  {[
                    { date: '15/11/2026', note: 'Tái khám tuần 4 — Giác mạc ổn định, tiếp tục duy trì lịch vệ sinh.' },
                    { date: '25/10/2026', note: 'Tái khám tuần 1 — Thích nghi tốt với thao tác đeo và tháo.' },
                    { date: '18/10/2026', note: 'Đo khám ban đầu — Tư vấn thông số và nhận bộ LUMORA Ortho-K.' },
                  ].map((entry) => (
                    <div
                      key={entry.date}
                      className="rounded-xl border border-[#C9CDD6]/60 dark:border-[#2B354A] p-3.5 space-y-1"
                    >
                      <p className="font-semibold text-[#5B8FB9] dark:text-[#7EB2DB] tabular-nums">
                        {entry.date}
                      </p>
                      <p className="text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
                        {entry.note}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Features + Eye Exam photo */}
          <div className="lg:col-span-6 space-y-6">
            <VisualMedia
              src={IMAGES.eyeExam}
              alt="Theo dõi và cập nhật kết quả đo giác mạc định kỳ vào ứng dụng LUMORA"
              aspectRatio="4/3"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Calendar,
                  title: 'Theo dõi theo chu kỳ',
                  desc: 'Ghi nhận đều đặn số giờ đeo ban đêm và cảm giác mắt mỗi sáng.',
                },
                {
                  icon: Bell,
                  title: 'Nhắc lịch chủ động',
                  desc: 'Không quên giờ đeo – tháo lens, thay dung dịch và lịch tái khám định kỳ.',
                },
                {
                  icon: History,
                  title: 'Lưu lịch sử thị lực',
                  desc: 'Lưu trữ có hệ thống kết quả các lần thăm khám để dễ đối chiếu.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Kết nối chăm sóc khách hàng',
                  desc: 'Hỗ trợ liên hệ nhanh khi cần giải đáp thao tác vệ sinh hoặc đặt lịch.',
                },
              ].map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-[#C9CDD6]/75 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-5 space-y-2"
                  >
                    <Icon className="w-5 h-5 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
                    <h3 className="font-display text-sm font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QR Download Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B8FB9] dark:text-[#7EB2DB]">
              <QrCode className="w-4 h-4" aria-hidden="true" />
              <span>Hướng dẫn tải &amp; kích hoạt</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Quét mã QR ngay trên hộp sản phẩm LUMORA Ortho-K
            </h2>
            <ol className="space-y-2.5 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6] list-decimal pl-5">
              <li>Mở camera điện thoại hoặc ứng dụng quét mã QR.</li>
              <li>Hướng camera vào mã QR in trên hộp bao bì sản phẩm LUMORA Ortho-K.</li>
              <li>Truy cập liên kết tải ứng dụng và đăng nhập bằng thông tin khách hàng đã đăng ký.</li>
              <li>Thiết lập khung giờ nhắc đeo – tháo lens phù hợp với lịch sinh hoạt của bạn.</li>
            </ol>
            <div className="pt-2">
              <a
                href="#/dat-hang"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/dat-hang');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Đăng ký đặt hàng LUMORA Ortho-K</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <VisualMedia
              src={BRAND.productImgSrc}
              alt="Hộp sản phẩm LUMORA Ortho-K tích hợp mã QR tải ứng dụng"
              aspectRatio="4/3"
              imgClassName="object-cover object-left"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationCard compact />
      </div>
    </div>
  );
};
