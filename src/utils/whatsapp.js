// Utility function to open WhatsApp with a support message
export const openWhatsAppSupport = (serviceName = "") => {
  const phoneNumber = "916395938011";
  const message = serviceName 
    ? `Hello! I need help with ${serviceName} 😊`
    : "Hello! I need help 😊";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};


