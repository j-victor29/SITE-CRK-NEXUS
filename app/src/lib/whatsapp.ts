const whatsappPhoneNumber = '558173393756';

const whatsappMessage =
  'Olá, equipe CRK Nexus! Quero conversar sobre como estratégia, marketing digital, automação com IA e desenvolvimento de sistemas podem ajudar meu negócio a crescer.';

export const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
