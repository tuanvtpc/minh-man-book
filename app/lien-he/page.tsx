import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. Header Banner */}
      <div className="bg-teal-700 pt-20 pb-24 px-4 text-center text-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
         
         <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ Với Minh Mẫn</h1>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe bạn. Hãy ghé thăm cửa hàng để trải nghiệm không gian sách hoặc để lại lời nhắn cho chúng tôi nhé!
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        
        {/* 2. Main Content Box: Info & Form */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row mb-12">
          
          {/* Left Column: Contact Info (Màu tối cho sang trọng) */}
          <div className="md:w-5/12 bg-slate-800 text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
             
             <div>
                <h3 className="text-2xl font-bold mb-8 text-teal-400">Thông Tin Liên Lạc</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Địa chỉ</h4>
                      <p className="text-slate-300 leading-relaxed">
                        123 Đường 3/2, Quận Ninh Kiều,<br/> TP. Cần Thơ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Điện thoại</h4>
                      <p className="text-slate-300">0909 123 456</p>
                      <p className="text-slate-400 text-sm">(Hỗ trợ Zalo/Viber)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-slate-300">lienhe@minhmanbook.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Giờ mở cửa</h4>
                      <p className="text-slate-300">08:00 - 21:30</p>
                      <p className="text-slate-400 text-sm">Tất cả các ngày trong tuần</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-slate-400 italic text-sm">
                  "Minh Mẫn - Nơi tri thức hội tụ và lan tỏa."
                </p>
             </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-7/12 p-10 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Gửi Tin Nhắn</h3>
            <p className="text-slate-500 mb-8">Bạn có thắc mắc về sản phẩm hay cần tư vấn? Điền thông tin bên dưới nhé.</p>
            
            <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Họ và tên</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Số điện thoại</label>
                    <input type="text" placeholder="09xx xxx xxx" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email (nếu có)</label>
                  <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nội dung</label>
                  <textarea rows={4} placeholder="Tôi cần tư vấn về..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"></textarea>
               </div>

               <button type="button" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-500/30 transition flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Gửi Ngay
               </button>
            </form>
          </div>
        </div>

        {/* 3. Map Section */}
        <div>
           <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Bản Đồ Cửa Hàng</h2>
              <div className="h-px flex-1 bg-slate-200"></div>
           </div>
           
           <div className="w-full h-[500px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-md border-4 border-white relative">
              {/* NHÚNG LINK BẢN ĐỒ CỦA BẠN TẠI ĐÂY */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.838066605064!2d105.65833587479288!3d9.94742789015529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08d00386ebf0d%3A0xc85ffc8a7dca5b89!2zTmjDoCBzw6FjaCBNaW5oIE3huqtu!5e0!3m2!1svi!2s!4v1765009949962!5m2!1svi!2s" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ nhà sách Minh Mẫn"
              ></iframe>

              {/* Note: Vì link bản đồ bạn đưa có vẻ là link placeholder (hoặc bị lỗi), 
                  nếu nó không hiện, bạn hãy vào Google Maps -> Chia sẻ -> Nhúng bản đồ 
                  và copy lại đường link trong src="..." nhé */}
           </div>
        </div>

      </div>
    </div>
  );
}