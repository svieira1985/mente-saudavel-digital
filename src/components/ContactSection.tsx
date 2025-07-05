import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@educarmente.com.br",
      description: "Respondemos em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (11) 9999-9999",
      description: "Seg à Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Atendimento nacional"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "09:00 - 18:00",
      description: "Segunda à Sexta"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
            📞 Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos prontos para ajudar sua empresa a transformar a saúde emocional dos colaboradores. 
            Entre em contato para uma conversa sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in-up text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-foreground">
                  {info.title}
                </h3>
                <p className="font-medium text-foreground mb-1">
                  {info.info}
                </p>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-primary border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Pronto para Começar?
              </h3>
              <p className="text-white/90 mb-6">
                Agende uma demonstração gratuita e veja como podemos transformar 
                a saúde emocional na sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Agendar Demo Gratuita
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
                  Falar com Especialista
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;