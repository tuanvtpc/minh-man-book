'use client';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-teal-700">
          <BookOpen className="w-8 h-8 text-orange-500" />
          <span>Minh Mẫn</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <Link href="/" className="hover:text-teal-600 transition">Trang chủ</Link>
          <Link href="/san-pham" className="hover:text-teal-600 transition">Sản phẩm</Link>
          <Link href="/gioi-thieu" className="hover:text-teal-600 transition">Giới thiệu</Link>
          <Link href="/lien-he" className="hover:text-teal-600 transition">Liên hệ</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5">
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              className="bg-transparent outline-none text-sm w-32 focus:w-48 transition-all"
            />
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg">
          <Link href="/" className="block py-2">Trang chủ</Link>
          <Link href="/san-pham" className="block py-2">Sản phẩm</Link>
          <Link href="/gioi-thieu" className="block py-2">Giới thiệu</Link>
          <Link href="/lien-he" className="block py-2">Liên hệ</Link>
        </div>
      )}
    </header>
  );
}