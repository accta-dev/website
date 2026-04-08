import { Briefcase, Calculator, FileText, Users } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Consultoria Empresarial", desc: "Planejamento estratégico, análise de viabilidade e reestruturação para sua empresa crescer com segurança." },
  { icon: Calculator, title: "Contabilidade", desc: "Escrituração contábil completa, balanços, demonstrações e relatórios gerenciais personalizados." },
  { icon: FileText, title: "Fiscal e Tributário", desc: "Apuração de impostos, planejamento tributário e compliance para reduzir a carga fiscal do seu negócio." },
  { icon: Users, title: "Recursos Humanos", desc: "Folha de pagamento, admissão, rescisão, eSocial e consultoria trabalhista completa." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-16 md:py-24 bg-muted/50">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">Serviços</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Soluções completas para a gestão do seu negócio
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-secondary/10 flex items-center justify-center mb-4 transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
