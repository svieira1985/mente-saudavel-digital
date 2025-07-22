import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Layout } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/a8794a7e-d19e-42f8-a377-4d5a30761471.png" 
              alt="Educar da Mente" 
              className="w-16 h-16 object-contain"
            />
          </div>

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
            🎨 Demo de Versões
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Demo de Landing Page
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-primary">
            Educar da Mente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore as diferentes versões da nossa landing page e veja qual abordagem visual e de conteúdo funciona melhor.
          </p>
        </div>

        {/* Version Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-medium animate-fade-in-up border-2 hover:border-primary/20 bg-primary/5 hover:bg-primary/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                Versão 1
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Layout atual com foco em funcionalidades e informações detalhadas sobre a plataforma de saúde emocional corporativa.
              </p>
              
              <Button 
                className="w-full bg-primary hover:bg-primary-dark font-semibold"
                size="lg"
                asChild
              >
                <Link to="/v1">
                  Ver Versão 1
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-medium animate-fade-in-up border-2 hover:border-secondary/20 bg-secondary/5 hover:bg-secondary/10" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                Versão 2
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nova proposta visual com abordagem diferente, design renovado e experiência de usuário otimizada.
              </p>
              
              <Button 
                className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold"
                size="lg"
                asChild
              >
                <Link to="/v2">
                  Ver Versão 2
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Compare as duas versões e nos ajude a escolher a melhor abordagem para nossos usuários.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;