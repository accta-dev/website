import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos Mendes", role: "CEO, Tech Solutions", text: "A ACCTA transformou nossa gestão fiscal. Reduzimos custos tributários em 30% no primeiro ano de parceria." },
  { name: "Ana Beatriz", role: "Diretora, Grupo Viver", text: "Atendimento excepcional e sempre disponível. A equipe da ACCTA é uma verdadeira extensão do nosso time." },
  { name: "Roberto Lima", role: "Sócio, Lima & Associados", text: "Profissionalismo e tecnologia de ponta. Os relatórios gerenciais nos ajudam a tomar decisões muito mais assertivas." },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">Depoimentos</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          O que nossos clientes dizem
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
