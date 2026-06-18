import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a CRK Nexus pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-crk-bg sm:bottom-7 sm:right-7 sm:h-16 sm:w-16 whatsapp-pulse"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 whatsapp-ping" />
      <MessageCircle size={32} strokeWidth={2.4} className="relative z-10" />
    </a>
  );
};

export default WhatsAppButton;
