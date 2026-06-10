import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container grid md:grid-cols-3 gap-8">
      <div>
        <span className="text-2xl font-extrabold tracking-tight">
          acc<span className="text-secondary">t</span>a
        </span>
        <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mt-1">Contabilidade</p>
        <p className="text-sm text-primary-foreground/70 mt-4">
          Auditoria, Consultoria e Contabilidade. Sua parceira estratégica para o sucesso empresarial.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Links Rápidos</h4>
        <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
          <a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a>
          <a href="#beneficios" className="hover:text-primary-foreground transition-colors">Benefícios</a>
          <a href="#como-funciona" className="hover:text-primary-foreground transition-colors">Como Funciona</a>
        </nav>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Contato</h4>
        <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
          <a href="tel:+557135064500" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" /> (71) 3506-4500
          </a>
          <a href="mailto:recepcao@accta.com.br" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" /> recepcao@accta.com.br
          </a>
          <span className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Salvador, Bahia - Brasil
          </span>
        </div>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} ACCTA Contabilidade. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
