import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, Brain, TrendingUp, CheckCircle, Star } from "lucide-react";
import Footer from "@/components/Footer";

const V2 = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Proteção completa dos dados dos seus colaboradores com criptografia de ponta"
    },
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Dashboard intuitivo para acompanhar o bem-estar de toda sua organização"
    },
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Análises inteligentes para identificar padrões e prevenir problemas"
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Melhore a produtividade em até 40% com nossa plataforma"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "RH Manager",
      company: "Tech Corp",
      text: "Transformou completamente nossa abordagem de saúde mental corporativa."
    },
    {
      name: "João Santos",
      role: "CEO",
      company: "Startup Inc",
      text: "Nossos colaboradores nunca estiveram tão engajados e produtivos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Demo
          </Link>
          
          <div className="flex items-center gap-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Badge variant="secondary" className="bg-secondary/10 text-secondary">
              Versão 2.0
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/a8794a7e-d19e-42f8-a377-4d5a30761471.png" 
              alt="Educar da Mente" 
              className="w-20 h-20 object-contain"
            />
          </div>

          <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
            🚀 Nova Experiência
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Educar da Mente
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A revolução da saúde mental corporativa chegou. 
            <span className="text-primary font-semibold"> Transforme sua empresa hoje.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-4 text-lg">
              Começar Agora - Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg">
              Ver Demo ao Vivo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Sem cartão de crédito • Configuração em 5 minutos</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-gradient-to-r from-muted/30 to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Por que escolher a <span className="text-primary">Educar da Mente?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-background to-muted/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Resultados que falam por si</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">92%</div>
              <p className="text-lg text-muted-foreground">Melhoria no bem-estar</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">40%</div>
              <p className="text-lg text-muted-foreground">Aumento na produtividade</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">85%</div>
              <p className="text-lg text-muted-foreground">Redução no turnover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-muted/30 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de empresas que já revolucionaram o bem-estar dos seus colaboradores.
          </p>
          
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 text-lg">
            Começar Transformação Gratuita
          </Button>
          
          <p className="text-sm mt-4 opacity-75">
            Implementação gratuita • Suporte 24/7 • Resultados garantidos
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default V2;