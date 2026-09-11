import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { createWhatsAppUrl, GENERAL_ORDER_MESSAGE, ADMIN_PHONE_DISPLAY } from '../data/products';

interface HeroProps {
  bgImage: string;
  mascotImage: string;
  onExploreProducts: () => void;
  onOpenPhotoUpload?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  bgImage,
  mascotImage,
  onExploreProducts,
  onOpenPhotoUpload,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image Layer with User Photo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 transform scale-105"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      {/* Dark Gradient Overlay for Maximum Legibility & Premium Atmosphere */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b0c10]/92 via-[#0b0c10]/85 to-[#0b0c10] backdrop-blur-[2px]"
        aria-hidden="true"
      />

      {/* Ambient Cyber Grid & Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Text & Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 max-w-2xl"
        >
          {/* Tag / Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OFFICIAL STORE • DHOXZ-UT</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          </div>

          {/* Large Title */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5 font-heading uppercase"
          >
            JASA DIGITAL SIMPLE,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              MURAH & MUDAH
            </span>
          </h1>

          {/* Description */}
          <p
            id="hero-description"
            className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-xl leading-relaxed mb-8 font-normal"
          >
            Pilih layanan yang kamu butuhkan, lalu lakukan order langsung melalui WhatsApp Admin.
            Tanpa ribet, proses cepat, dan harga bersahabat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 justify-center sm:justify-start">
            <a
              href={createWhatsAppUrl(GENERAL_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-btn-order-sekarang"
              className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-black text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/25 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-black/20" />
              <span>ORDER SEKARANG</span>
            </a>

            <button
              type="button"
              id="hero-btn-lihat-produk"
              onClick={onExploreProducts}
              className="flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 hover:text-white border border-white/15 hover:border-emerald-500/40 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-md active:scale-[0.98] transition-all"
            >
              <span>LIHAT PRODUK</span>
              <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Respon Cepat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Admin Terpercaya</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono-tech text-zinc-300">
              <span>WA: {ADMIN_PHONE_DISPLAY}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Mascot / Identity Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-sm sm:max-w-md lg:max-w-sm flex flex-col items-center"
        >
          <div className="relative group w-full">
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

            {/* Visual Card Container */}
            <div className="relative rounded-2xl bg-zinc-950/80 border border-white/15 p-3.5 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-square bg-[#050608] flex items-center justify-center border border-white/10">
                <img
                  src={mascotImage}
                  alt="DHOXZ Mascot Visual"
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/20 text-zinc-200 text-[11px] font-mono-tech px-2.5 py-1 rounded-md">
                  ID: DHOXZ-UT
                </div>
                <div className="absolute bottom-3 right-3 bg-emerald-500/90 text-black text-[11px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
                  VERIFIED
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-1">
                <div>
                  <h3 className="font-heading font-bold text-white text-base tracking-wide">
                    DHOXZ-UT OFFICIAL
                  </h3>
                  <p className="text-xs text-zinc-400">Identitas Visual & Jasa Digital</p>
                </div>
                {onOpenPhotoUpload && (
                  <button
                    type="button"
                    onClick={onOpenPhotoUpload}
                    title="Ganti atau sesuaikan foto background"
                    className="text-[11px] font-semibold text-zinc-400 hover:text-emerald-400 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    Ganti Foto
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
