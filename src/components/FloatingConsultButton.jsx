import React from 'react';

const FloatingConsultButton = () => (
  <a
    href="https://wa.me/919810350512"
    target="_blank"
    rel="noreferrer"
    className="fixed z-50 bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-2.5 px-4 rounded-full shadow-lg flex items-center transition-colors duration-200 focus:outline-none"
    aria-label="Chat with us on WhatsApp"
  >
    <img src="/Images/whatsapp_PNG20 1.png" alt="WhatsApp" className="h-8 w-8 mr-2" />
    <span className="text-[17px] font-semibold">Chat with us</span>
  </a>
)

export default FloatingConsultButton;
