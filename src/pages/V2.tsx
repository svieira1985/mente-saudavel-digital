import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, Brain, TrendingUp, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const V2 = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />


    </div>
  );
};

export default V2;