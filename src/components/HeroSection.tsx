import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meeting.jpg";

const HeroSection = () => (
  <section className="relative bg-hero-gradient text-primary-foreground pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
    <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Contabilidade Estratégica para o{" "}
          <span className="text-secondary">Crescimento</span> do seu Negócio
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-lg">
          Consultoria contábil, fiscal e empresarial com atendimento personalizado e foco em resultados. Mais segurança e inteligência para a gestão da sua empresa.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/557135064500" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base font-semibold">
              Fale com um Especialista
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="#servicos">
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 text-base font-semibold">
              Conheça nossos serviços
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <img
          src={heroImage}
          alt="Consultores ACCTA analisando estratégia contábil e financeira"
          width={1920}
          height={1280}
          className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
