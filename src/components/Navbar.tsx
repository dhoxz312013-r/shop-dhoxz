import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { createWhatsAppUrl, GENERAL_ORDER_MESSAGE } from '../data/products';

interface NavbarProps {
  onNavClick: (id: string) => void;
  bgImage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, bgImage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          id="nav-brand-logo"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/20 group-hover:border-emerald-500/60 transition-all bg-black/60 p-0.5 shadow-md shadow-emerald-500/10">
            <img
              src="/dhoxz-mascot.jpg"
              alt="DHOXZ Mascot"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                // fallback if missing
                (e.target as HTMLImageElement).src = bgImage;
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black tracking-wider text-lg sm:text-xl text-white group-hover:text-emerald-400 transition-colors">
                DHOXZ-UT
              </span>
              <span className="inline-flex items-center justify-center text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                PRO
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 -mt-0.5 tracking-wide font-mono-tech hidden sm:block">
              JASA DIGITAL SIMPLE & MURAH
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1 lg:gap-2">
          {[
            { label: 'HOME', id: 'home' },
            { label: 'PRODUK', id: 'produk' },
            { label: 'CARA ORDER', id: 'cara-order' },
            { label: 'KONTAK', id: 'kontak' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              id={`nav-link-${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-xs lg:text-sm font-semibold tracking-wider text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Order Sekarang Button (Right) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={createWhatsAppUrl(GENERAL_ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-btn-order-sekarang"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>ORDER SEKARANG</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={createWhatsAppUrl(GENERAL_ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-nav-quick-order"
            className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs px-2.5 py-1.5 rounded-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>ORDER</span>
          </a>
          <button
            type="button"
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden bg-[#0e1017]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1">
            {[
              { label: 'HOME', id: 'home' },
              { label: 'PRODUK', id: 'produk' },
              { label: 'CARA ORDER', id: 'cara-order' },
              { label: 'KONTAK', id: 'kontak' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`mobile-nav-link-${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="block text-sm font-semibold tracking-wider text-zinc-200 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <a
              href={createWhatsAppUrl(GENERAL_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-drawer-btn-order"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm py-3 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ORDER SEKARANG KE WA ADMIN</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
