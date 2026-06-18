const whatsappPhoneNumber = '558173393756';

const whatsappMessage =
  'Ola, equipe CRK Nexus! Quero conversar sobre como estrategia, marketing digital, automacao com IA e desenvolvimento de sistemas podem ajudar meu negocio a crescer.';

export const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
