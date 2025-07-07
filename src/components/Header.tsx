import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Planos", href: "#planos" },
    { name: "Impacto", href: "#impacto" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border/60 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Back Button */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Demo
            </Link>
            <img 
              src="/lovable-uploads/a8794a7e-d19e-42f8-a377-4d5a30761471.png" 
              alt="Educar da Mente" 
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary-dark font-medium" asChild>
            <Link to="/login">Entrar</Link>
            </Button>
            <Button variant="outline" className="font-medium">
              Demo Gratuita
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/a8794a7e-d19e-42f8-a377-4d5a30761471.png" 
                      alt="Educar da Mente" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <nav className="flex flex-col space-y-6 mb-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col space-y-4 mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary-dark" asChild>
                    <Link to="/login">Entrar</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Demo Gratuita
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;