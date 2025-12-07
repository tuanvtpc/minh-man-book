import Link from 'next/link';
import { 
  ArrowRight, MapPin, Clock, ShieldCheck, 
  Users, HeartHandshake, Sparkles, BookOpen
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-x-hidden"> {/* overflow-x-hidden để tránh lỗi thanh cuộn ngang do hiệu ứng */}
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-teal-100/60 rounded-full blur-3xl -z-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-orange-100/60 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Text Content - Hiệu ứng trồi lên lần lượt */}
            <div className="md:w-5/12 space-y-8 z-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-sm font-bold text-teal-700 border border-teal-100 animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Hơn cả một nhà sách</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight animate-fade-in-up delay-100">
                Chào mừng đến <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
                  Nhà Sách Minh Mẫn
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium animate-fade-in-up delay-200">
                Không gian tri thức, văn hóa và sáng tạo hàng đầu tại Cần Thơ. Nơi mỗi cuốn sách là một hành trình, mỗi góc nhỏ là một cảm hứng mới.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                <Link href="/gioi-thieu" className="group bg-teal-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-teal-800 transition-all flex items-center gap-2 hover:-translate-y-1">
                  Câu chuyện của chúng tôi
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/lien-he" className="group bg-white text-teal-700 px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all border-2 border-teal-100 flex items-center gap-2 hover:-translate-y-1">
                  <MapPin className="w-5 h-5" /> Tìm đường đến tiệm
                </Link>
              </div>

              {/* Quick Info */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 text-sm font-medium text-slate-500 animate-fade-in-up delay-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" /> 8:00 - 21:30 Hàng ngày
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" /> Nhơn Thuận 1B, Châu Thành A, Hậu Giang
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-7/12 relative z-10 animate-fade-in-up delay-300">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                  {/* Ảnh có hiệu ứng scale nhẹ khi hover */}
                  <img 
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
                    alt="Không gian nhà sách Minh Mẫn" 
                    className="w-full h-[500px] object-cover hover:scale-105 transition duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge - Hiệu ứng lơ lửng */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white p-6 rounded-3xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                    <BookOpen className="w-10 h-10 text-teal-600" />
                    <div>
                        <div className="text-2xl font-extrabold text-slate-800">15.000+</div>
                        <div className="text-sm font-bold text-slate-500">Đầu sách & VPP chọn lọc</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VỀ CHÚNG TÔI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-12"> {/* Đẩy cột trái xuống một chút để tạo so le */}
                        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop" alt="Góc đọc sách" className="rounded-3xl shadow-md w-full h-64 object-cover hover:scale-105 transition duration-500 cursor-pointer"/>
                        <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop" alt="Kệ sách" className="rounded-3xl shadow-md w-full h-40 object-cover hover:scale-105 transition duration-500 cursor-pointer"/>
                    </div>
                     <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop" alt="Khách hàng" className="rounded-3xl shadow-md w-full h-48 object-cover hover:scale-105 transition duration-500 cursor-pointer"/>
                        <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=800&auto=format&fit=crop" alt="Văn phòng phẩm" className="rounded-3xl shadow-md w-full h-56 object-cover hover:scale-105 transition duration-500 cursor-pointer"/>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 space-y-8">
              <span className="text-teal-600 font-bold tracking-wider uppercase mb-2 block">Câu chuyện thương hiệu</span>
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                Khơi Nguồn Cảm Hứng, <br/> Nuôi Dưỡng Tri Thức Việt
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Thành lập từ năm 2010 tại trái tim Cần Thơ, Minh Mẫn không chỉ là một nơi để mua sách. Chúng tôi mong muốn tạo ra một <strong>không gian văn hóa</strong>, nơi mọi người có thể sống chậm lại, tìm thấy niềm vui trong việc đọc và khám phá những công cụ sáng tạo tốt nhất.
              </p>
              <div className="w-full h-px bg-slate-100 my-4"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mỗi sản phẩm trên kệ đều được chúng tôi tuyển chọn kỹ lưỡng với tiêu chí: Chất lượng, Thẩm mỹ và Hữu ích.
              </p>
              <Link href="/gioi-thieu" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-lg hover:translate-x-2 transition-transform">
                Xem hành trình 15 năm của chúng tôi <ArrowRight className="w-5 h-5"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TẠI SAO CHỌN MINH MẪN? (Hover Cards) */}
      <section className="py-20 bg-teal-50/50 relative overflow-hidden">
        {/* Decor Blobs */}
        <div className="absolute -left-20 top-20 w-64 h-64 bg-teal-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute -right-20 bottom-20 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Điều Gì Tạo Nên Sự Khác Biệt?</h2>
            <p className="text-slate-600 text-lg">Chúng tôi cam kết mang đến trải nghiệm mua sắm và không gian tốt nhất cho bạn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* USP 1 */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-teal-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-default">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                <ShieldCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition">100% Chính Hãng</h3>
              <p className="text-slate-600 leading-relaxed">
                Sách thật, văn phòng phẩm từ các thương hiệu uy tín (Thiên Long, Pentel, Double A...). Nói không với hàng giả.
              </p>
            </div>
            
            {/* USP 2 */}
             <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-orange-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-default">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition duration-300">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition">Không Gian & Cộng Đồng</h3>
              <p className="text-slate-600 leading-relaxed">
                Góc đọc sách miễn phí, không gian yên tĩnh. Điểm hẹn thường xuyên của các CLB yêu sách và workshop sáng tạo.
              </p>
            </div>

            {/* USP 3 */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-default">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                <HeartHandshake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition">Tư Vấn Từ Trái Tim</h3>
              <p className="text-slate-600 leading-relaxed">
                Đội ngũ nhân viên am hiểu sản phẩm, sẵn sàng giúp bạn tìm được cuốn sách phù hợp hay món quà ý nghĩa nhất.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. VISUAL TOUR */}
      <section className="py-20">
          <div className="container mx-auto px-4">
             <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-orange-600 font-bold tracking-wider uppercase mb-2 block">Trải nghiệm thực tế</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Khám Phá Các Góc Nhỏ</h2>
                </div>
                <Link href="/thu-vien-anh" className="text-teal-600 font-bold hover:underline hidden md:block flex items-center gap-2 group">
                  Xem tất cả ảnh <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                {/* Ảnh lớn */}
                <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop" alt="Thư viện sách" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition"></div>
                    <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
                        <h3 className="text-2xl font-bold text-white mb-2">Thế Giới Sách Ngoại Văn</h3>
                        <p className="text-slate-200 opacity-0 group-hover:opacity-100 transition delay-100 duration-500">Tuyển tập sách tiếng Anh, sách nghệ thuật nhập khẩu.</p>
                    </div>
                </div>

                {/* Ảnh phụ */}
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1612832871250-0616f9393934?q=80&w=1000&auto=format&fit=crop" alt="Khu vực bút viết" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition">Thiên Đường Bút Viết</h3>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1512414379291-5399884f180f?q=80&w=800&auto=format&fit=crop" alt="Góc thiếu nhi" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-bold text-white">Góc Thiếu Nhi</h3>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop" alt="Quà lưu niệm" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-bold text-white">Quà Tặng & Decor</h3>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* 5. CTA CUỐI CÙNG */}
      <section className="py-20 bg-teal-900 text-white relative overflow-hidden rounded-t-[3rem] mt-10">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
         
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">Bạn đã sẵn sàng tìm cảm hứng mới?</h2>
            <p className="text-teal-200 text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Ghé thăm Nhà sách Minh Mẫn ngay hôm nay để trải nghiệm không gian và nhận những ưu đãi đặc biệt cho thành viên mới.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
                <Link href="/lien-he" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
                   Xem bản đồ & Giờ mở cửa <ArrowRight className="w-5 h-5"/>
                </Link>
                 <Link href="/san-pham" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition border border-white/30 hover:scale-105 active:scale-95 duration-200">
                   Dạo xem sản phẩm online
                </Link>
            </div>
         </div>
      </section>

    </div>
  );
}