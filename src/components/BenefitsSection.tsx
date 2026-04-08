import { TrendingDown, ShieldCheck, BarChart3, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Redução de Custos", desc: "Identificamos oportunidades para diminuir despesas e otimizar recursos." },
  { icon: ShieldCheck, title: "Segurança Fiscal", desc: "Compliance total com a legislação vigente, evitando multas e autuações." },
  { icon: BarChart3, title: "Decisão com Dados", desc: "Relatórios gerenciais que transformam números em estratégias." },
  { icon: HeartHandshake, title: "Atendimento Personalizado", desc: "Um consultor dedicado que entende as necessidades do seu negócio." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">Benefícios</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Por que escolher a ACCTA?
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div key={b.title} className="text-center" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
