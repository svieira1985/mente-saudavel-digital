import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, Building2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LoginType = () => {
  const loginOptions = [
    {
      id: "colaborador",
      title: "Colaborador",
      description: "Acesse seus assessments, acompanhe seu desenvolvimento emocional e agende sessões com especialistas.",
      icon: Users,
      color: "bg-primary/10 hover:bg-primary/20",
      iconColor: "text-primary"
    },
    {
      id: "psicologo",
      title: "Psicólogo",
      description: "Gerencie seus atendimentos, acesse perfis de clientes e ofereça suporte especializado.",
      icon: Brain,
      color: "bg-secondary/10 hover:bg-secondary/20",
      iconColor: "text-secondary"
    },
    {
      id: "empresa",
      title: "Empresa",
      description: "Dashboard executivo, relatórios de equipe e gestão completa da saúde emocional corporativa.",
      icon: Building2,
      color: "bg-accent/10 hover:bg-accent/20",
      iconColor: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">EM</span>
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              Educar da Mente
            </span>
          </div>

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="secondary">
            🔐 Área de Acesso
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Escolha seu Perfil de Acesso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione o tipo de usuário que melhor descreve você para acessar a área personalizada.
          </p>
        </div>

        {/* Login Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {loginOptions.map((option, index) => (
            <Card 
              key={option.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-medium animate-fade-in-up border-2 hover:border-primary/20 ${option.color}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className={`w-8 h-8 ${option.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                  {option.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark font-semibold"
                  size="lg"
                >
                  Acessar como {option.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Não tem acesso ainda? 
            <Link to="/#contato" className="text-primary hover:underline ml-1">
              Entre em contato conosco
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginType;