import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building } from "lucide-react";

const HowItWorksSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 499",
      period: "/mês",
      description: "Ideal para pequenas empresas",
      popular: false,
      features: [
        "Até 50 assessments por mês",
        "Relatórios básicos",
        "Suporte por email",
        "Dashboard simplificado",
        "1 administrador"
      ],
      icon: Building
    },
    {
      name: "Avançado",
      price: "R$ 999",
      period: "/mês",
      description: "Perfeito para empresas em crescimento",
      popular: true,
      features: [
        "Até 150 assessments por mês",
        "Relatórios detalhados + Analytics",
        "Suporte prioritário",
        "Dashboard avançado",
        "Até 3 administradores",
        "Acesso ao marketplace de profissionais",
        "Integração com RH"
      ],
      icon: Users
    },
    {
      name: "Premium",
      price: "R$ 1.899",
      period: "/mês",
      description: "Para grandes corporações",
      popular: false,
      features: [
        "Assessments ilimitados",
        "Relatórios personalizados + BI",
        "Suporte dedicado 24/7",
        "Dashboard personalizado",
        "Administradores ilimitados",
        "Marketplace premium",
        "API completa",
        "Consultoria estratégica mensal"
      ],
      icon: Star
    }
  ];

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Como Funciona */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Como Funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="text-left animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Acesso por Assinatura
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Empresas contratam pacotes mensais (Básico, Avançado, Premium) que dão acesso 
                a um volume específico de assessments, entrevistas e programas de desenvolvimento 
                para seus colaboradores.
              </p>
            </div>
            
            <div className="text-left animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Suporte Especializado
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Marketplace de psicólogos e terapeutas qualificados, onde colaboradores podem 
                agendar sessões avulsas, pagas à parte, com o profissional de sua escolha.
              </p>
            </div>
          </div>
        </div>

        {/* Planos */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Escolha o Plano Ideal
            </h3>
            <p className="text-lg text-muted-foreground">
              Soluções escaláveis para empresas de todos os tamanhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative group transition-all duration-300 animate-fade-in-up ${
                  plan.popular 
                    ? 'ring-2 ring-primary shadow-strong scale-105' 
                    : 'hover:shadow-medium border-border/60'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1">
                    Mais Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                    size="lg"
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;