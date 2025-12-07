import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nhà sách Minh Mẫn | Khơi nguồn tri thức',
  description: 'Chuyên cung cấp văn phòng phẩm, sách giáo khoa và dụng cụ học tập.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Navbar />
        <main className="min-h-screen pt-20">
            {/* pt-20 để tránh nội dung bị header che khuất */}
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}