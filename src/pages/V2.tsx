import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, Brain, TrendingUp, CheckCircle, Star } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section id="como-funciona" className="py-16 px-4 bg-gradient-to-r from-muted/30 to-background">
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
      <section id="impacto" className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
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

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default V2;