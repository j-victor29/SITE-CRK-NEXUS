const whatsappPhoneNumber = '558173393756';

const whatsappMessage =
  'Olá! Vim pelo site da CRK Nexus e gostaria de conversar com um especialista sobre soluções de marketing digital, automação com IA e desenvolvimento de sistemas para minha empresa.';

export const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
