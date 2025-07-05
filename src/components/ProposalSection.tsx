import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, TrendingUp, Shield, Clock, Target } from "lucide-react";

const ProposalSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Mapeamento Emocional Preciso",
      description: "Avaliações científicas que identificam o perfil emocional e psicológico de cada colaborador"
    },
    {
      icon: Target,
      title: "Direcionamento Inteligente",
      description: "IA que otimiza o suporte profissional, tornando intervenções mais eficientes desde o primeiro contato"
    },
    {
      icon: Users,
      title: "Autoconhecimento Individual",
      description: "Colaboradores desenvolvem maior consciência sobre seu bem-estar emocional"
    },
    {
      icon: TrendingUp,
      title: "Dados Valiosos para RH",
      description: "Insights precisos que orientam estratégias de recursos humanos baseadas em evidências"
    },
    {
      icon: Shield,
      title: "Identificação Preventiva",
      description: "Sistema que identifica quem não precisa de aprofundamento imediato, economizando recursos"
    },
    {
      icon: Clock,
      title: "Eficiência Operacional",
      description: "Redução significativa do tempo para conectar colaboradores ao suporte adequado"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Nossa Proposta de Valor
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Através de avaliações científicas e inteligência artificial, mapeamos o perfil emocional 
            dos colaboradores, proporcionando autoconhecimento e gerando dados valiosos que 
            otimizam o direcionamento para suporte profissional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in-up border-border/60 hover:border-primary/30"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;