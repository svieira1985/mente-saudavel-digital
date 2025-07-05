import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const teamAreas = [
    {
      icon: Code,
      title: "Desenvolvimento Técnico",
      description: "Equipe especializada em IA, escalabilidade e desenvolvimento da plataforma digital"
    },
    {
      icon: Target,
      title: "Comercial e Marketing",
      description: "Foco na aquisição de clientes e estratégias de crescimento sustentável"
    },
    {
      icon: Users,
      title: "Gestão Administrativa",
      description: "Estrutura operacional que garante a excelência na entrega dos serviços"
    },
    {
      icon: Heart,
      title: "Conteúdo e Profissionais",
      description: "Área dedicada à validade científica e gestão da rede de especialistas"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20" variant="secondary">
            👥 Nossa Equipe
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Sobre a Educar da Mente
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa equipe multidisciplinar combina expertise técnica, conhecimento em saúde mental 
            e experiência comercial para oferecer uma solução completa e inovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamAreas.map((area, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in-up border-border/60 hover:border-secondary/30"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                    <area.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-muted/50 border-border/60">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transformar a saúde emocional corporativa através de tecnologia inovadora, 
                proporcionando autoconhecimento aos colaboradores e dados estratégicos para 
                as empresas, criando ambientes de trabalho mais saudáveis e produtivos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;