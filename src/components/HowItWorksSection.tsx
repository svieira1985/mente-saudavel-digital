import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building } from "lucide-react";

const HowItWorksSection = () => {

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

      </div>
    </section>
  );
};

export default HowItWorksSection;