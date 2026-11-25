import React, { useState } from 'react';
import { MapPin, Clock, Send, CheckCircle2, Share2 } from 'lucide-react';
import { BRAND, CONTACT } from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { ConsultationCard } from '../components/ConsultationCard';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Vui lòng nhập đầy đủ họ tên, số điện thoại và nội dung cần giải đáp.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pb-16 space-y-14">
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            Kết nối cùng LUMORA Eyecare
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1] max-w-3xl">
            Liên hệ &amp; Tư vấn trực tiếp
          </h1>
          <p className="text-base sm:text-lg text-[#1D2433]/80 dark:text-[#C9CDD6] max-w-2xl leading-relaxed">
            Đội ngũ Chăm sóc khách hàng tại {BRAND.location} sẵn sàng lắng nghe và giải đáp mọi
            câu hỏi của bạn về sản phẩm LUMORA Ortho-K.
          </p>
        </div>
      </section>

      {/* Thẻ Tư vấn trực tiếp */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationCard />
      </div>

      {/* Địa điểm, Bản đồ & Form gửi thắc mắc */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Info + Embedded Map */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              Thông tin địa điểm &amp; kênh chính thức
            </h2>

            <div className="space-y-4 text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">Địa chỉ</p>
                  <p>{BRAND.location} (Hoạt động tại Việt Nam, định hướng mở rộng ra các thành phố lớn)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">Giờ làm việc</p>
                  <p>{BRAND.workingHoursPlaceholder}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Share2 className="w-5 h-5 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">Mạng xã hội</p>
                  <p>{BRAND.socialPlaceholder}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C]">
            <iframe
              title="Bản đồ Khu 2, Đại học Cần Thơ"
              src="https://maps.google.com/maps?q=%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20C%E1%BA%A7n%20Th%C6%A1%20Khu%202&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-72 border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Simple Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
                Gửi thắc mắc cho LUMORA
              </h2>
              <p className="text-sm text-[#1D2433]/70 dark:text-[#9BA5B8]">
                Để lại thông tin bên dưới hoặc gọi trực tiếp{' '}
                <a href={CONTACT.phoneHref} className="underline text-[#5B8FB9]">
                  {CONTACT.phoneDisplay}
                </a>{' '}
                để được phản hồi nhanh nhất.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-[#5B8FB9]/40 bg-[#5B8FB9]/10 p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#1D2433] dark:text-[#F5F4F1] font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#5B8FB9]" aria-hidden="true" />
                  <span>Đã ghi nhận nội dung thắc mắc của bạn</span>
                </div>
                <p className="text-sm text-[#1D2433]/80 dark:text-[#C9CDD6]">
                  Cảm ơn <span className="font-semibold">{name}</span>. Bạn cũng có thể bấm nút bên
                  dưới để mở nhanh email gửi trực tiếp tới {CONTACT.advisorName} ({CONTACT.email})
                  hoặc gọi số {CONTACT.phoneDisplay}.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                      `[LUMORA Liên hệ] Thắc mắc từ ${name}`
                    )}&body=${encodeURIComponent(
                      `Họ tên: ${name}\nSố điện thoại: ${phone}\nEmail: ${email}\n\nNội dung:\n${message}`
                    )}`}
                    className="px-4 py-2.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold"
                  >
                    Gửi qua Email ngay
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-4 py-2.5 rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] text-xs font-medium"
                  >
                    Gửi câu hỏi khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && (
                  <p className="text-xs font-medium text-red-600 dark:text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2.5">
                    {error}
                  </p>
                )}

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#1D2433] dark:text-[#F5F4F1]"
                  >
                    Họ và tên *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] px-4 py-3 text-sm text-[#1D2433] dark:text-[#F5F4F1] focus:outline-none focus:border-[#5B8FB9]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#1D2433] dark:text-[#F5F4F1]"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] px-4 py-3 text-sm text-[#1D2433] dark:text-[#F5F4F1] focus:outline-none focus:border-[#5B8FB9]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#1D2433] dark:text-[#F5F4F1]"
                    >
                      Email (nếu có)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tenban@email.com"
                      className="w-full rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] px-4 py-3 text-sm text-[#1D2433] dark:text-[#F5F4F1] focus:outline-none focus:border-[#5B8FB9]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-msg"
                    className="block text-xs font-semibold text-[#1D2433] dark:text-[#F5F4F1]"
                  >
                    Nội dung thắc mắc *
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Bạn đang quan tâm đến độ cận hiện tại, cách sử dụng hay khoảng giá..."
                    className="w-full rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] bg-[#F5F4F1]/60 dark:bg-[#141B29] px-4 py-3 text-sm text-[#1D2433] dark:text-[#F5F4F1] focus:outline-none focus:border-[#5B8FB9]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Gửi câu hỏi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
