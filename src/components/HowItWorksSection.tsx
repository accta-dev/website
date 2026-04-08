import { Search, ClipboardList, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Analisamos a situação atual da sua empresa e identificamos oportunidades." },
  { icon: ClipboardList, title: "Planejamento", desc: "Criamos um plano personalizado alinhado aos seus objetivos." },
  { icon: Rocket, title: "Execução", desc: "Implementamos as soluções com agilidade e transparência." },
  { icon: RefreshCw, title: "Acompanhamento", desc: "Monitoramento contínuo e ajustes para garantir os melhores resultados." },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-16 md:py-24 bg-muted/50">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">Como Funciona</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Seu caminho até a contabilidade estratégica
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="relative bg-card rounded-xl p-6 shadow-card text-center">
            <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
              {i + 1}
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
