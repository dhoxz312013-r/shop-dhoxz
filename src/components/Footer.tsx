import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { ADMIN_PHONE_DISPLAY } from '../data/products';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <footer id="main-footer" className="bg-[#07080a] border-t border-white/10 text-zinc-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="text-2xl font-black text-white font-heading tracking-wider">
                DHOXZ-UT
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                OFFICIAL
              </span>
            </div>
            <p className="text-sm text-zinc-300 font-medium">
              Jasa Digital Simple, Murah & Mudah
            </p>
            <p className="text-xs text-zinc-400 font-mono-tech">
              WhatsApp Admin: {ADMIN_PHONE_DISPLAY}
            </p>
          </div>

          {/* Navigation Links */}
          <nav id="footer-nav-links" className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Produk', id: 'produk' },
              { label: 'Cara Order', id: 'cara-order' },
              { label: 'Kontak', id: 'kontak' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`footer-link-${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            type="button"
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p id="copyright-text">
            © 2026 <strong className="text-zinc-300 font-bold">DHOXZ-UT</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Pemesanan Langsung & Aman via WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
