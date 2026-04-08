import { Shield, Users, Lightbulb } from "lucide-react";

const differentials = [
  { icon: Shield, title: "Segurança", desc: "Conformidade fiscal e tributária garantida para sua empresa." },
  { icon: Users, title: "Proximidade", desc: "Atendimento consultivo e personalizado para cada cliente." },
  { icon: Lightbulb, title: "Tecnologia", desc: "Ferramentas modernas para agilidade e precisão nos processos." },
];

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">Sobre a ACCTA</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Mais que contabilidade: parceria estratégica
        </h2>
        <p className="text-muted-foreground">
          A ACCTA é uma empresa de contabilidade com atuação consultiva, dedicada a entregar soluções inteligentes para empresas de todos os portes. Unimos experiência, tecnologia e proximidade para impulsionar seus resultados.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {differentials.map((d) => (
          <div key={d.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <d.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{d.title}</h3>
            <p className="text-sm text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
