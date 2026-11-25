import React from 'react';
import { BRAND, CONTACT } from '../data/lumoraData';
import { WaveBackdrop } from '../components/WaveBackdrop';
import { ConsultationCard } from '../components/ConsultationCard';

interface PolicyPageProps {
  type: 'privacy' | 'warranty' | 'terms';
}

const POLICY_CONTENT = {
  privacy: {
    kicker: 'Bảo vệ dữ liệu cá nhân',
    title: 'Chính sách bảo mật',
    intro: `${BRAND.legalName} cam kết tôn trọng và bảo vệ thông tin cá nhân cũng như dữ liệu theo dõi thị lực của khách hàng khi sử dụng website và ứng dụng LUMORA.`,
    sections: [
      {
        heading: '1. Thông tin chúng tôi tiếp nhận',
        body: 'Khi bạn điền biểu mẫu đặt hàng, gửi thắc mắc hoặc sử dụng ứng dụng theo dõi thị lực, LUMORA có thể tiếp nhận họ tên, số điện thoại, email và các ghi nhận liên quan đến nhu cầu chăm sóc thị lực do bạn tự nguyện cung cấp.',
      },
      {
        heading: '2. Mục đích sử dụng thông tin',
        body: 'Thông tin được sử dụng cho mục đích liên hệ tư vấn, xác nhận đơn đặt hàng LUMORA Ortho-K, hỗ trợ nhắc lịch sử dụng – tái khám và nâng cao chất lượng chăm sóc khách hàng. Chúng tôi không mua bán hay chia sẻ dữ liệu cá nhân cho bên thứ ba ngoài phạm vi hỗ trợ chuyên môn khi có sự đồng ý của bạn.',
      },
      {
        heading: '3. Lưu trữ và quyền kiểm soát dữ liệu',
        body: `Khách hàng có quyền yêu cầu xem lại, chỉnh sửa hoặc xóa thông tin liên hệ của mình bất kỳ lúc nào bằng cách gửi email tới ${CONTACT.email} hoặc gọi ${CONTACT.phoneDisplay}.`,
      },
    ],
  },
  warranty: {
    kicker: 'Quyền lợi khách hàng',
    title: 'Chính sách đổi trả & bảo hành',
    intro:
      'Vì kính áp tròng ban đêm LUMORA Ortho-K là sản phẩm y tế cá nhân hóa theo thông số mắt của từng người, chính sách đổi trả và bảo hành được áp dụng minh bạch dựa trên tư vấn trực tiếp trước khi giao hàng.',
    sections: [
      {
        heading: '1. Kiểm tra và xác nhận trước khi giao',
        body: 'Trước khi chốt đơn hàng, bộ phận Chăm sóc khách hàng sẽ liên hệ xác nhận rõ phiên bản (Standard, Plus hoặc Pro), thông số và mức giá cuối cùng để đảm bảo tính phù hợp.',
      },
      {
        heading: '2. Trường hợp đổi mới hoặc điều chỉnh thông số',
        body: '[Nhóm bổ sung điều kiện chi tiết về thời gian hỗ trợ điều chỉnh thông số giác mạc/đổi kính nếu có lỗi từ nhà sản xuất hoặc chưa đạt độ vừa vặn theo đánh giá của chuyên viên khúc xạ].',
      },
      {
        heading: '3. Quy trình tiếp nhận yêu cầu',
        body: `Mọi yêu cầu kiểm tra, bảo hành hoặc hỗ trợ sau bán vui lòng liên hệ trực tiếp ${CONTACT.advisorName} (${CONTACT.phoneDisplay} · ${CONTACT.email}) để được hướng dẫn cụ thể.`,
      },
    ],
  },
  terms: {
    kicker: 'Quy định sử dụng dịch vụ',
    title: 'Điều khoản sử dụng',
    intro: `Khi truy cập website và sử dụng thông tin, dịch vụ của ${BRAND.legalName}, bạn đồng ý tuân thủ các nguyên tắc sử dụng an toàn và trung thực dưới đây.`,
    sections: [
      {
        heading: '1. Phạm vi thông tin y khoa trên website',
        body: 'Nội dung bài viết, hướng dẫn và câu hỏi thường gặp trên website nhằm mục đích cung cấp thông tin tham khảo và giáo dục sức khỏe thị lực, không thay thế cho buổi thăm khám và chỉ định trực tiếp của bác sĩ chuyên khoa mắt hoặc chuyên viên khúc xạ.',
      },
      {
        heading: '2. Trách nhiệm khi sử dụng sản phẩm',
        body: 'Người sử dụng LUMORA Ortho-K cần tuân thủ đầy đủ quy trình vệ sinh, bảo quản và lịch tái khám định kỳ. Kết quả sử dụng phụ thuộc vào cơ địa và mức độ tuân thủ hướng dẫn của từng cá nhân.',
      },
      {
        heading: '3. Quy định đặt hàng',
        body: `Biểu mẫu đặt hàng trên website là đăng ký nhu cầu; đơn hàng chỉ có hiệu lực sau khi bộ phận Chăm sóc khách hàng LUMORA liên hệ tư vấn và xác nhận cụ thể với khách hàng theo 3 mức giá tham khảo (${BRAND.priceTiersSummary}).`,
      },
    ],
  },
};

export const PolicyPage: React.FC<PolicyPageProps> = ({ type }) => {
  const data = POLICY_CONTENT[type];

  return (
    <div className="pb-16 space-y-12">
      <section className="relative overflow-hidden border-b border-[#C9CDD6]/70 dark:border-[#2B354A] py-12 sm:py-16">
        <WaveBackdrop variant="section" className="absolute inset-x-0 bottom-0 h-56 opacity-75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5B8FB9] dark:text-[#7EB2DB]">
            {data.kicker}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
            {data.title}
          </h1>
          <p className="text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {data.sections.map((sec) => (
          <div
            key={sec.heading}
            className="rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-6 sm:p-8 space-y-2.5"
          >
            <h2 className="font-display text-lg font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
              {sec.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
              {sec.body}
            </p>
          </div>
        ))}
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationCard compact />
      </div>
    </div>
  );
};
