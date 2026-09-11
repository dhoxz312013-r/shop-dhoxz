import React from 'react';
import { AlertTriangle, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl, PRICE_INQUIRY_MESSAGE } from '../data/products';

export const PriceNotice: React.FC = () => {
  return (
    <section id="informasi-harga" className="py-10 bg-[#0b0c10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="banner-informasi-harga"
          className="relative rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900/90 to-amber-950/30 border border-amber-500/30 p-6 sm:p-8 shadow-xl backdrop-blur-md overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-black text-white font-heading uppercase tracking-wide flex items-center gap-2">
                    <span>⚠️ INFORMASI HARGA</span>
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed">
                  Harga akan berubah-ubah sewaktu-waktu, jadi tidak ada harga tetap. Tapi dijamin tetap murah banget!
                </p>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Untuk mendapatkan informasi harga terbaru, silakan hubungi Admin DHOXZ-UT melalui WhatsApp.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Consultation Button */}
            <div className="shrink-0 w-full md:w-auto">
              <a
                href={createWhatsAppUrl(PRICE_INQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-tanya-harga-wa"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black/20" />
                <span>TANYA HARGA TERBARU</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
