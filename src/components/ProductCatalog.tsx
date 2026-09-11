import React, { useState } from 'react';
import {
  Users,
  Image as ImageIcon,
  UserPlus,
  Crown,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Shield,
  Flame,
} from 'lucide-react';
import {
  JOKI_PACKAGES,
  createWhatsAppUrl,
  getJokiKontakMessage,
  getSlotOwnerMessage,
} from '../data/products';

export const ProductCatalog: React.FC = () => {
  // Selected package for Joki Kontak to highlight or quick action
  const [selectedJokiId, setSelectedJokiId] = useState<string>('3-hari');

  const selectedPackage =
    JOKI_PACKAGES.find((p) => p.id === selectedJokiId) || JOKI_PACKAGES[0];

  return (
    <section id="produk" className="relative py-20 sm:py-24 bg-[#0b0c10] border-t border-white/5">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
            KATALOG RESMI
          </div>
          <h2
            id="product-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading uppercase"
          >
            PRODUK & LAYANAN
          </h2>
          <p
            id="product-section-subtitle"
            className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto"
          >
            Pilih layanan yang kamu butuhkan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ========================================================
              CARD 1: JOKI KONTAK (PRODUK UTAMA)
             ======================================================== */}
          <div
            id="card-product-joki-kontak"
            className="lg:col-span-2 relative rounded-2xl bg-zinc-900/90 border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur-sm overflow-hidden"
          >
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-black font-black text-xs uppercase px-4 py-1 rounded-bl-xl tracking-wider flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-black" />
              <span>PRODUK UTAMA</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-500/10">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                      JOKI KONTAK
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <CheckCircle2 className="w-3 h-3" />
                      TERSEDIA
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
                    Layanan Joki Kontak dengan beberapa pilihan durasi. Pilih paket sesuai kebutuhan kamu.
                  </p>
                </div>
              </div>

              {/* Status & Quick Order for currently highlighted package */}
              <div className="flex flex-col sm:items-end justify-center shrink-0">
                <span className="text-xs text-zinc-400 font-mono-tech">Mulai dari</span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">
                  2K <span className="text-xs text-zinc-400 font-normal">/ 1 Hari</span>
                </div>
              </div>
            </div>

            {/* 4 Pilihan Paket Jelas */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PILIHAN 4 PAKET DURASI & HARGA</span>
                </h4>
                <span className="text-xs text-zinc-400 hidden sm:inline">
                  Klik tombol untuk order langsung ke WhatsApp
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {JOKI_PACKAGES.map((pkg) => {
                  const isSelected = selectedJokiId === pkg.id;
                  const waUrl = createWhatsAppUrl(
                    getJokiKontakMessage(pkg.duration, pkg.price)
                  );

                  return (
                    <div
                      key={pkg.id}
                      id={`joki-package-${pkg.id}`}
                      onClick={() => setSelectedJokiId(pkg.id)}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-500/20 ring-1 ring-emerald-500'
                          : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-zinc-400 font-mono-tech tracking-wider">
                            DURASI
                          </span>
                          {pkg.highlight && (
                            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              FAVORIT
                            </span>
                          )}
                        </div>
                        <div className="text-lg font-black text-white font-heading">
                          {pkg.duration}
                        </div>
                        <div className="text-2xl font-black text-emerald-400 my-1 font-heading">
                          {pkg.price}
                        </div>
                        <p className="text-[11px] text-zinc-400 mb-3">
                          Durasi {pkg.duration} aktif
                        </p>
                      </div>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`btn-buy-joki-${pkg.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`w-full inline-flex items-center justify-center gap-1.5 font-bold text-xs py-2.5 px-3 rounded-lg active:scale-95 transition-all ${
                          isSelected
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-md shadow-emerald-500/30 font-black'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-white/10'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>BELI SEKARANG</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Summary Note for Joki Kontak */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 bg-black/30 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 px-6 sm:px-8">
              <div className="flex items-center gap-2 text-zinc-300">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Paket dipilih:{' '}
                  <strong className="text-emerald-400 font-bold">
                    {selectedPackage.duration} ({selectedPackage.price})
                  </strong>
                </span>
              </div>
              <a
                href={createWhatsAppUrl(
                  getJokiKontakMessage(selectedPackage.duration, selectedPackage.price)
                )}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-buy-selected-joki"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold hover:underline"
              >
                <span>Order paket {selectedPackage.duration} via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 2: SLOT OWNER (TERSEDIA - 5K)
             ======================================================== */}
          <div
            id="card-product-slot-owner"
            className="relative rounded-2xl bg-zinc-900/80 border border-white/15 hover:border-emerald-500/40 p-6 sm:p-7 shadow-xl backdrop-blur-sm flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Crown className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-1">
                    <CheckCircle2 className="w-3 h-3" />
                    TERSEDIA
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
                    5K
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black text-white font-heading mb-1.5">
                SLOT OWNER
              </h3>

              {/* Tampilkan secara jelas: 5K — SLOT OWNER */}
              <div className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-black text-xs font-mono-tech mb-3 tracking-wide">
                5K — SLOT OWNER
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Slot Owner dengan harga terjangkau. Untuk pemesanan, langsung hubungi Admin melalui WhatsApp.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={createWhatsAppUrl(getSlotOwnerMessage())}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-buy-slot-owner"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>BELI SEKARANG</span>
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 3: FS (BELUM PRODUKSI)
             ======================================================== */}
          <div
            id="card-product-fs"
            className="relative rounded-2xl bg-zinc-950/60 border border-white/10 p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between opacity-85"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <div>
                  <span
                    id="badge-fs-status"
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-white/10 uppercase tracking-wide"
                  >
                    <AlertCircle className="w-3 h-3 text-zinc-400" />
                    BELUM TERSEDIA
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-xl font-black text-white font-heading">
                  FS
                </h3>
                <span className="text-xs font-mono-tech text-zinc-500">
                  [BELUM PRODUKSI]
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Produk ini saat ini belum tersedia dan masih dalam tahap persiapan.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                disabled
                id="btn-buy-fs-disabled"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800/80 text-zinc-500 font-bold text-sm py-3 px-4 rounded-xl border border-white/5 cursor-not-allowed select-none"
              >
                <span>BELUM TERSEDIA (BELUM PRODUKSI)</span>
              </button>
            </div>
          </div>

          {/* ========================================================
              CARD 4: PUSH MEMBER (BELUM PRODUKSI)
             ======================================================== */}
          <div
            id="card-product-push-member"
            className="relative rounded-2xl bg-zinc-950/60 border border-white/10 p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between opacity-85"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                  <UserPlus className="w-6 h-6" />
                </div>
                <div>
                  <span
                    id="badge-push-member-status"
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-white/10 uppercase tracking-wide"
                  >
                    <AlertCircle className="w-3 h-3 text-zinc-400" />
                    BELUM TERSEDIA
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-xl font-black text-white font-heading">
                  PUSH MEMBER
                </h3>
                <span className="text-xs font-mono-tech text-zinc-500">
                  [BELUM PRODUKSI]
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Produk ini saat ini belum tersedia dan masih dalam tahap persiapan.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                disabled
                id="btn-buy-push-member-disabled"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800/80 text-zinc-500 font-bold text-sm py-3 px-4 rounded-xl border border-white/5 cursor-not-allowed select-none"
              >
                <span>BELUM TERSEDIA (BELUM PRODUKSI)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
