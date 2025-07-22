import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(72, 191, 122, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30" variant="secondary">
            🚀 O Futuro da Saúde Mental Corporativa
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in-up">
            Educar da Mente
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/95 animate-fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            A Revolução da <span className="font-semibold text-white">Saúde mental corporativa</span> chegou.
            <br />Transforme sua empresa hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-medium">
              Comece Agora - Gratuito
            </Button>
            <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm">
              Agendar Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in-up backdrop-blur-sm bg-white/10 rounded-2xl p-6" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/90">Satisfação dos Colaboradores</div>
            </div>
            <div className="text-center animate-fade-in-up backdrop-blur-sm bg-white/10 rounded-2xl p-6" style={{animationDelay: '0.7s'}}>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-white/90">Redução de Afastamentos</div>
            </div>
            <div className="text-center animate-fade-in-up backdrop-blur-sm bg-white/10 rounded-2xl p-6" style={{animationDelay: '0.8s'}}>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;