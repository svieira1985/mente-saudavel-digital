import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Plataforma",
      links: ["Como Funciona", "Planos e Preços", "Marketplace", "Recursos", "Demo Gratuita"]
    },
    {
      title: "Empresa",
      links: ["Sobre Nós", "Nossa Equipe", "Carreiras", "Imprensa", "Parceiros"]
    },
    {
      title: "Recursos",
      links: ["Blog", "Estudos de Caso", "Webinars", "E-books", "Suporte"]
    },
    {
      title: "Legal",
      links: ["Termos de Uso", "Política de Privacidade", "LGPD", "Segurança", "Contrato"]
    }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Educar da Mente
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              O futuro da saúde emocional corporativa. Cuidamos do ativo mais 
              valioso da sua empresa: as pessoas.
            </p>
            
            {/* Contato */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span className="text-white/80">contato@educardamente.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span className="text-white/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span className="text-white/80">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/20">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-heading font-semibold mb-4 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Newsletter */}
        <div className="max-w-md mx-auto text-center mb-12">
          <h4 className="font-heading font-semibold mb-3 text-lg">
            Receba Insights sobre Saúde Mental Corporativa
          </h4>
          <p className="text-white/70 mb-4">
            Conteúdos exclusivos, estudos e tendências do mercado.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail profissional"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary-dark">
              Inscrever
            </Button>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        {/* Copyright */}
        <div className="text-center text-white/60">
          <p>
            © 2025 Educar da Mente. Todos os direitos reservados. | 
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;