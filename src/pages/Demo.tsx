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
              src="/lovable-uploads/b475f10b-8de5-4cdd-977b-6fa364f376f8.png" 
              alt="Educar da Mente" 
              className="w-16 h-16 object-contain"
            />
          </div>

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
            💼 Saúde Mental Corporativa
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Educar da Mente
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-primary">
            Plataforma de Saúde Emocional Corporativa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme o bem-estar dos seus colaboradores com nossa solução completa de saúde mental corporativa.
          </p>
        </div>

        {/* Landing Page Access */}
        <div className="flex justify-center mb-8">
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-medium animate-fade-in-up border-2 hover:border-primary/20 bg-primary/5 hover:bg-primary/10 max-w-md">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                Acessar Landing Page
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Acesse nossa plataforma de saúde emocional corporativa com informações completas sobre funcionalidades e benefícios.
              </p>
              
              <Button 
                className="w-full bg-primary hover:bg-primary-dark font-semibold"
                size="lg"
                asChild
              >
                <Link to="/">
                  Acessar Plataforma
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Descubra como nossa plataforma pode revolucionar o bem-estar na sua empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;