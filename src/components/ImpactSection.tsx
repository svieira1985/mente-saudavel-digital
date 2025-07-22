import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, Award, Building2, Lightbulb } from "lucide-react";

const ImpactSection = () => {
  const impactMetrics = [
    {
      icon: Target,
      title: "KPIs de Negócio",
      metrics: ["Aquisição de Clientes", "MRR (Receita Recorrente)", "Retenção de Clientes", "Crescimento da Base"]
    },
    {
      icon: TrendingUp, 
      title: "Impacto Organizacional",
      metrics: ["Engajamento dos Colaboradores", "Evolução dos Perfis Emocionais", "Redução de Afastamentos", "Melhora do Clima Organizacional"]
    }
  ];

  const marketStrategy = [
    {
      icon: Building2,
      title: "Foco em Pequenas Empresas",
      description: "Priorizamos empresas com RH menos desenvolvido que buscam soluções eficazes e escaláveis"
    },
    {
      icon: Users,
      title: "Vendas Diretas",
      description: "Abordagem direta aos profissionais de RH com apresentações personalizadas"
    },
    {
      icon: Award,
      title: "Eventos do Setor",
      description: "Participação ativa em eventos para construir reconhecimento e parcerias estratégicas"
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {marketStrategy.map((strategy, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in-up border-border/60 hover:border-secondary/30"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                  <strategy.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nosso Impacto */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="secondary">
            📊 Métricas de Sucesso
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Nosso Impacto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Monitoramos o sucesso através de KPIs de negócio e, principalmente, 
            métricas de impacto real na vida dos colaboradores e organizações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {impactMetrics.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Final */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-3xl p-12 animate-fade-in-up">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Transforme o Futuro da Sua Empresa
          </h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            A Educar da Mente não é apenas uma plataforma; é um parceiro estratégico 
            para empresas que buscam promover um ambiente de trabalho mais saudável e produtivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
              Comece Sua Transformação
            </Button>
            <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm">
              Fale com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;