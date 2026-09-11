import React, { useState } from 'react';
import { MessageCircle, Phone, Copy, Check, HeadphonesIcon, ShieldCheck } from 'lucide-react';
import {
  ADMIN_PHONE_DISPLAY,
  ADMIN_PHONE_NUMBER,
  createWhatsAppUrl,
  CHAT_ADMIN_MESSAGE,
} from '../data/products';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(ADMIN_PHONE_DISPLAY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-[#0b0c10] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contact-box-container"
          className="relative rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/15 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-2 shadow-lg shadow-emerald-500/10">
              <HeadphonesIcon className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                HUBUNGI KAMI
              </span>
              <h2
                id="contact-section-title"
                className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mt-1"
              >
                BUTUH BANTUAN?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Masih bingung atau ingin menanyakan produk? Langsung hubungi Admin DHOXZ-UT.
            </p>

            {/* WhatsApp Admin Card Display */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 sm:p-6 max-w-md mx-auto flex flex-col items-center justify-center gap-2">
              <span className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider">
                WhatsApp Admin
              </span>
              <div className="flex items-center gap-3">
                <span
                  id="admin-phone-number-display"
                  className="font-mono-tech text-2xl sm:text-3xl font-black text-white tracking-wider"
                >
                  {ADMIN_PHONE_DISPLAY}
                </span>
                <button
                  type="button"
                  id="btn-copy-phone"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                  title="Salin Nomor WhatsApp"
                  aria-label="Salin nomor WhatsApp"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-emerald-400 font-semibold animate-in fade-in">
                  Nomor berhasil disalin!
                </span>
              )}
            </div>

            {/* Chat WhatsApp Button */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl(CHAT_ADMIN_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-chat-whatsapp-admin"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/25 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-black/20" />
                <span>CHAT WHATSAPP</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500/80" />
              <span>Semua transaksi dilakukan manual secara aman melalui Admin WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
