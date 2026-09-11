import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { PriceNotice } from './components/PriceNotice';
import { HowToOrder } from './components/HowToOrder';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PhotoCustomizerModal } from './components/PhotoCustomizerModal';

export default function App() {
  const defaultBg = '/dhoxz-bg.jpg';
  const defaultMascot = '/dhoxz-mascot.jpg';

  const [bgImage, setBgImage] = useState<string>(() => {
    return localStorage.getItem('dhoxz_custom_bg') || defaultBg;
  });
  const [mascotImage, setMascotImage] = useState<string>(() => {
    return localStorage.getItem('dhoxz_custom_mascot') || defaultMascot;
  });
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);

  const handleUpdateBg = (newUrl: string) => {
    setBgImage(newUrl);
    setMascotImage(newUrl);
    localStorage.setItem('dhoxz_custom_bg', newUrl);
    localStorage.setItem('dhoxz_custom_mascot', newUrl);
  };

  const handleResetDefault = () => {
    setBgImage(defaultBg);
    setMascotImage(defaultMascot);
    localStorage.removeItem('dhoxz_custom_bg');
    localStorage.removeItem('dhoxz_custom_mascot');
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e0e2ec] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navbar */}
      <Navbar onNavClick={handleNavClick} bgImage={mascotImage} />

      {/* Hero Section */}
      <Hero
        bgImage={bgImage}
        mascotImage={mascotImage}
        onExploreProducts={() => handleNavClick('produk')}
        onOpenPhotoUpload={() => setIsPhotoModalOpen(true)}
      />

      {/* Warning / Price Notice Banner */}
      <PriceNotice />

      {/* Product Catalog (Joki Kontak, FS, Push Member, Slot Owner) */}
      <ProductCatalog />

      {/* How to Order (5 Steps) */}
      <HowToOrder />

      {/* Contact Admin Support */}
      <ContactSection />

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Photo Customizer / Uploader Modal */}
      <PhotoCustomizerModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentBg={bgImage}
        currentMascot={mascotImage}
        onUpdateBg={handleUpdateBg}
        onResetDefault={handleResetDefault}
      />
    </div>
  );
}
