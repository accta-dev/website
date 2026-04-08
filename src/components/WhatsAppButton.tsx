import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5571999629004"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
