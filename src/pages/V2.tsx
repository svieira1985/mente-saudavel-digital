import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, Brain, TrendingUp, CheckCircle, Star } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProposalSection from "@/components/ProposalSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";

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

  const testimonials = [
    {
      name: "Maria Silva",
      role: "RH Manager",
      company: "Tech Corp",
      text: "Transformou completamente nossa abordagem de saúde mental corporativa."
    },
    {
      name: "João Santos",
      role: "CEO",
      company: "Startup Inc",
      text: "Nossos colaboradores nunca estiveram tão engajados e produtivos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Proposal Section */}
      <ProposalSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default V2;