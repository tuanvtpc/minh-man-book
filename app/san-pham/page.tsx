'use client'; // Dùng client component để xử lý các tương tác nhỏ (nếu cần sau này)

import Link from 'next/link';
import { 
  Search, Filter, ShoppingCart, Star, 
  ChevronDown, Heart, Eye, ArrowRight 
} from 'lucide-react';
import { useState } from 'react';

// Dữ liệu giả lập (Mock Data)
const PRODUCTS = [
  { id: 1, name: 'Bộ Sách Giáo Khoa Lớp 10 (Chân Trời Sáng Tạo)', price: 250000, oldPrice: 280000, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop', category: 'Sách Giáo Khoa', rating: 5, tag: 'Bán chạy' },
  { id: 2, name: 'Bút Máy Thiên Long Cao Cấp', price: 45000, oldPrice: 0, img: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=800&auto=format&fit=crop', category: 'Dụng Cụ Học Tập', rating: 4, tag: 'New' },
  { id: 3, name: 'Sổ Tay Planner 2025 (Bìa Da)', price: 120000, oldPrice: 150000, img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop', category: 'Sổ Tay', rating: 5, tag: '-20%' },
  { id: 4, name: 'Ba Lô Chống Gù Lưng Miti', price: 450000, oldPrice: 550000, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop', category: 'Ba Lô', rating: 5, tag: 'Hot' },
  { id: 5, name: 'Màu Nước Thiên Long (12 Màu)', price: 35000, oldPrice: 0, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop', category: 'Mỹ Thuật', rating: 4, tag: '' },
  { id: 6, name: 'Đèn Bàn Học Chống Cận', price: 180000, oldPrice: 220000, img: 'https://images.unsplash.com/photo-1534234828563-0259772d627a?q=80&w=800&auto=format&fit=crop', category: 'Thiết Bị', rating: 4, tag: 'Sale' },
  { id: 7, name: 'Máy Tính Casio FX-580VN X', price: 650000, oldPrice: 0, img: 'https://images.unsplash.com/photo-1594910620861-5975eb1e428d?q=80&w=800&auto=format&fit=crop', category: 'Thiết Bị', rating: 5, tag: 'Chính hãng' },
  { id: 8, name: 'Combo Bút Highlight Pastel', price: 25000, oldPrice: 30000, img: 'https://images.unsplash.com/photo-1577239074872-520e7845f284?q=80&w=800&auto=format&fit=crop', category: 'Bút Viết', rating: 5, tag: 'Trend' },
];

const CATEGORIES = ["Sách Giáo Khoa", "Truyện Tranh & Thiếu Nhi", "Dụng Cụ Học Tập", "Văn Phòng Phẩm", "Quà Tặng & Decor", "Sách Tham Khảo"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. HERO BANNER SMALL */}
      <div className="bg-teal-700 py-12 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10"></div>
        <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cửa Hàng Trực Tuyến</h1>
            <p className="text-teal-100">Khám phá hàng ngàn sản phẩm chất lượng cho góc học tập của bạn</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 2. SIDEBAR FILTER (Ẩn trên mobile nhỏ, hiện trên desktop) */}
          <aside className="lg:w-1/4 space-y-8">
            
            {/* Search Box Mobile/Desktop */}
            <div className="relative">
                <input 
                  type="text" 
                  placeholder="Tìm tên sản phẩm..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white shadow-sm"
                />
                <Search className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
            </div>

            {/* Filter Content */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                    <Filter className="w-5 h-5 text-teal-600" /> Bộ Lọc Sản Phẩm
                </div>

                {/* Categories */}
                <div className="mb-6">
                    <h3 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wider">Danh Mục</h3>
                    <ul className="space-y-2">
                        {CATEGORIES.map((cat, idx) => (
                            <li key={idx}>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                                    </div>
                                    <span className="text-slate-600 group-hover:text-teal-600 transition">{cat}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wider">Khoảng Giá</h3>
                    <div className="space-y-4">
                        <input type="range" min="0" max="1000000" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
                        <div className="flex items-center justify-between text-sm text-slate-500 font-medium">
                            <span>0đ</span>
                            <span>1.000.000đ+</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Ad Sidebar */}
            <div className="bg-orange-100 rounded-2xl p-6 text-center hidden lg:block">
                <h3 className="font-bold text-orange-800 text-lg mb-2">Mùa Tựu Trường</h3>
                <p className="text-orange-700 text-sm mb-4">Giảm giá lên đến 50% cho dụng cụ học tập</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition w-full">Xem Ngay</button>
            </div>
          </aside>

          {/* 3. MAIN PRODUCT GRID */}
          <div className="flex-1">
            
            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="text-slate-500 text-sm mb-2 sm:mb-0">
                    Hiển thị <span className="font-bold text-slate-800">1-12</span> của <span className="font-bold text-slate-800">156</span> sản phẩm
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">Sắp xếp:</span>
                    <div className="relative">
                        <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:border-teal-500 cursor-pointer">
                            <option>Mới nhất</option>
                            <option>Bán chạy nhất</option>
                            <option>Giá tăng dần</option>
                            <option>Giá giảm dần</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col">
                        
                        {/* Image Container */}
                        <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                            <img 
                                src={product.img} 
                                alt={product.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                            
                            {/* Badges */}
                            {product.tag && (
                                <div className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-wider
                                    ${product.tag.includes('Sale') || product.tag.includes('%') ? 'bg-red-500' : 'bg-teal-500'}
                                `}>
                                    {product.tag}
                                </div>
                            )}

                            {/* Quick Actions (Show on Hover) */}
                            <div className="absolute right-3 top-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition duration-300">
                                <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 shadow-md transition" title="Yêu thích">
                                    <Heart className="w-4 h-4" />
                                </button>
                                <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 shadow-md transition" title="Xem nhanh">
                                    <Eye className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Info Container */}
                        <div className="p-4 flex flex-col flex-1">
                            <div className="text-xs text-slate-400 mb-1">{product.category}</div>
                            <h3 className="font-bold text-slate-800 text-sm mb-2 line-clamp-2 min-h-[40px] group-hover:text-teal-600 transition">
                                {product.name}
                            </h3>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 text-slate-200'}`} />
                                ))}
                                <span className="text-xs text-slate-400 ml-1">({product.rating*12})</span>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <div>
                                    <div className="text-lg font-bold text-teal-600">
                                        {product.price.toLocaleString('vi-VN')}đ
                                    </div>
                                    {product.oldPrice > 0 && (
                                        <div className="text-xs text-slate-400 line-through">
                                            {product.oldPrice.toLocaleString('vi-VN')}đ
                                        </div>
                                    )}
                                </div>
                                <button className="bg-teal-100 text-teal-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition shadow-sm">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-white hover:border-teal-500 hover:text-teal-600 transition">
                        &lt;
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center shadow-lg shadow-teal-500/30">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-teal-500 hover:text-teal-600 transition font-medium">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-teal-500 hover:text-teal-600 transition font-medium">
                        3
                    </button>
                    <span className="px-2 text-slate-400">...</span>
                    <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-teal-500 hover:text-teal-600 transition font-medium">
                        12
                    </button>
                    <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-white hover:border-teal-500 hover:text-teal-600 transition">
                        &gt;
                    </button>
                </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}