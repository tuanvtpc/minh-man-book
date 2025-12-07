import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-gray-300 pt-16 pb-8 border-t border-teal-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <BookOpen className="w-8 h-8 text-orange-500" />
              <span>Minh Mẫn</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Nhà sách Minh Mẫn - Điểm đến tin cậy cho tri thức và văn phòng phẩm chính hãng tại Cần Thơ. Chúng tôi cam kết mang lại giá trị tốt nhất cho cộng đồng.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:text-orange-500 transition"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-orange-500 transition"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-orange-500 transition"><Youtube className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Về Chúng Tôi</h3>
            <ul className="space-y-3">
              <li><Link href="/gioi-thieu" className="hover:text-orange-500 transition">Câu chuyện thương hiệu</Link></li>
              <li><Link href="/he-thong-cua-hang" className="hover:text-orange-500 transition">Hệ thống cửa hàng</Link></li>
              <li><Link href="/tuyen-dung" className="hover:text-orange-500 transition">Tuyển dụng</Link></li>
              <li><Link href="/lien-he" className="hover:text-orange-500 transition">Liên hệ hợp tác</Link></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Chính Sách</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-orange-500 transition">Chính sách đổi trả</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Điều khoản dịch vụ</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Hướng dẫn mua hàng</Link></li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>123 Đường 3/2, Quận Ninh Kiều, TP. Cần Thơ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>0909 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>cskh@minhmanbook.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t border-teal-900 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Công ty TNHH Nhà Sách Minh Mẫn. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}