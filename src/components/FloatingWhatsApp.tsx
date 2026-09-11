import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, CHAT_ADMIN_MESSAGE } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = createWhatsAppUrl(CHAT_ADMIN_MESSAGE);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-floating-chat-admin"
        aria-label="Chat WhatsApp Admin"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs sm:text-sm px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 active:scale-95 transition-all duration-200 border border-white/20"
      >
        {/* Pulsing beacon circle behind */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-5 h-5 fill-black text-black shrink-0" />
        <span className="tracking-wider uppercase font-heading font-black">
          CHAT ADMIN
        </span>
      </a>
    </div>
  );
};
