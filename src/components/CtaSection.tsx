import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-16 md:py-24 bg-hero-gradient text-primary-foreground">
    <div className="container text-center max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        Pronto para transformar a gestão da sua empresa?
      </h2>
      <p className="text-primary-foreground/80">
        Entre em contato agora mesmo e descubra como a ACCTA pode ajudar seu negócio a crescer com segurança e inteligência.
      </p>
      <a href="https://wa.me/557135064500" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base font-semibold mt-4">
          Fale com um Especialista
          <ArrowRight className="w-5 h-5" />
        </Button>
      </a>
    </div>
  </section>
);

export default CtaSection;
