import Link from 'next/link';
import { 
  Heart, Target, Sparkles, Award, 
  Users, BookOpen, Coffee, ArrowRight 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. HERO HEADER - Đơn giản & Tinh tế */}
      <div className="relative pt-24 pb-20 bg-slate-50 overflow-hidden">
        {/* Decor Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
           <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 text-sm font-semibold text-teal-600 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Câu chuyện thương hiệu</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
             Hơn Cả Một <br/> <span className="text-teal-600">Nhà Sách Truyền Thống</span>
           </h1>
           <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
             Chúng tôi không chỉ bán sách. Chúng tôi bán niềm vui khi lật mở trang sách mới, và cảm hứng từ những món đồ văn phòng phẩm nhỏ xinh.
           </p>
        </div>
      </div>

      {/* 2. OUR STORY - Câu chuyện khởi nghiệp */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
           {/* Image Collage */}
           <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop" 
                   alt="Những ngày đầu thành lập" 
                   className="w-full h-auto object-cover"
                 />
              </div>
              {/* Ảnh phụ nhỏ hơn */}
              <div className="absolute -bottom-10 -right-10 w-2/3 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 hidden md:block">
                 <img 
                   src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop" 
                   alt="Góc sách nhỏ" 
                   className="w-full h-auto object-cover"
                 />
              </div>
              {/* Pattern Dot */}
              <div className="absolute -top-10 -left-10 w-40 h-40 opacity-20" style={{backgroundImage: 'radial-gradient(#0d9488 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
           </div>

           {/* Content */}
           <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">Từ Một Tiệm Sách Nhỏ Tại Cần Thơ...</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Minh Mẫn được thành lập vào năm 2010 với một ước mơ giản đơn: Mang những cuốn sách hay và dụng cụ học tập chất lượng đến gần hơn với học sinh, sinh viên miền Tây.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Trải qua 15 năm, từ một cửa hàng nhỏ vỏn vẹn 30m2 trên đường 3/2, chúng tôi đã phát triển thành không gian trải nghiệm văn hóa đọc hiện đại. Tuy nhiên, giá trị cốt lõi về sự <strong className="text-teal-600">Tận Tâm</strong> và <strong className="text-teal-600">Trung Thực</strong> vẫn chưa bao giờ thay đổi.
              </p>
              <div className="pt-4 flex gap-8">
                 <div>
                    <div className="text-4xl font-extrabold text-orange-500 mb-1">15+</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Năm hoạt động</div>
                 </div>
                 <div>
                    <div className="text-4xl font-extrabold text-teal-600 mb-1">50K+</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Khách hàng thân thiết</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - Card Grid */}
      <section className="py-20 bg-slate-50 mt-20">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <h2 className="text-3xl font-bold text-slate-800 mb-4">Sứ Mệnh & Tầm Nhìn</h2>
               <p className="text-slate-500">Kim chỉ nam cho mọi hoạt động của Minh Mẫn.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition duration-300 group">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition">
                     <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Lan Tỏa Tri Thức</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Mang đến nguồn sách phong phú, đa dạng, giúp nâng cao văn hóa đọc cho cộng đồng trẻ.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[100px] -z-0"></div>
                  <div className="relative z-10">
                     <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition">
                        <Target className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-800 mb-3">Khơi Nguồn Sáng Tạo</h3>
                     <p className="text-slate-600 leading-relaxed">
                        Cung cấp văn phòng phẩm độc đáo, chất lượng để biến việc học và làm việc trở nên đầy cảm hứng.
                     </p>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition duration-300 group">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition">
                     <Heart className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Kết Nối Cộng Đồng</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Xây dựng không gian thân thiện, nơi tổ chức các workshop và sự kiện văn hóa bổ ích.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. WHY CHOOSE US - Values */}
      <section className="py-20 container mx-auto px-4">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-8 order-2 md:order-1">
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                     <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-800 mb-2">Chất Lượng Là Danh Dự</h3>
                     <p className="text-slate-600">Cam kết 100% sản phẩm chính hãng. Chúng tôi nói không với sách lậu và văn phòng phẩm kém chất lượng.</p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                     <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-800 mb-2">Khách Hàng Là Bạn</h3>
                     <p className="text-slate-600">Tại Minh Mẫn, bạn sẽ luôn nhận được nụ cười và sự tư vấn nhiệt tình nhất từ đội ngũ nhân viên trẻ trung.</p>
                  </div>
               </div>
               
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                     <Coffee className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-800 mb-2">Không Gian Trải Nghiệm</h3>
                     <p className="text-slate-600">Thoải mái đọc thử sách tại khu vực ghế ngồi miễn phí trước khi quyết định mua.</p>
                  </div>
               </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2">
               <img 
                  src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1000&auto=format&fit=crop" 
                  alt="Nhân viên tư vấn" 
                  className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px]"
               />
            </div>
         </div>
      </section>

      {/* 5. CTA - Lời mời */}
      <div className="container mx-auto px-4 mb-10">
         <div className="bg-teal-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             
             <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                   Ghé Thăm Chúng Tôi Hôm Nay
                </h2>
                <p className="text-teal-200 text-lg max-w-2xl mx-auto">
                   Để cảm nhận không gian sách ấm cúng và tìm cho mình những món đồ ưng ý nhất tại Cần Thơ.
                </p>
                <div className="pt-4">
                   <Link href="/lien-he" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition shadow-lg shadow-orange-500/30">
                      Xem địa chỉ cửa hàng <ArrowRight className="w-5 h-5"/>
                   </Link>
                </div>
             </div>
         </div>
      </div>

    </div>
  );
}