import { Card } from "@/components/ui/card";
import { Shield, Smartphone, MapPin, Brain, Users, AlertTriangle } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Safety & Emergency Features",
      description: "Wake word SOS detection, automated AI monitoring, and mini safety utilities including fake calls and instant police sirens.",
    },
    {
      icon: Smartphone,
      title: "Communication & Connectivity",
      description: "Live audio/video streaming, SOS location sharing, and Bluetooth mesh support that works without internet.",
    },
    {
      icon: MapPin,
      title: "Smart Navigation & Awareness",
      description: "Safest route finder with SafeScore ratings and real-time alerts for unsafe areas.",
    },
    {
      icon: Brain,
      title: "AI & Data Intelligence",
      description: "AI-powered incident monitoring that gathers safety data from the web and community reporting for accurate SafeScores.",
    },
    {
      icon: Users,
      title: "Community Tab",
      description: "Connect with nearby verified users for faster assistance and community-driven safety.",
    },
    {
      icon: AlertTriangle,
      title: "Blockchain Security",
      description: "Decentralized, tamper-proof user profiles that enhance trust, privacy, and security of user identities.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful{" "}
            <span className="text-primary">
              Safety Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Safirah combines cutting-edge AI, blockchain technology, and community-driven safety 
            to create the most comprehensive personal safety app ever built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 gradient-card shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}