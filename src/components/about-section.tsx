import { Shield, Users, Zap, Heart, CheckCircle } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced safety features and real-time monitoring to keep you protected."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with like-minded individuals in a supportive, inclusive environment."
    },
    {
      icon: Zap,
      title: "Innovative Technology",
      description: "Cutting-edge features powered by the latest technology and AI."
    },
    {
      icon: Heart,
      title: "User-Centric Design",
      description: "Every feature is designed with your needs and experience in mind."
    }
  ];

  const benefits = [
    "Real-time safety monitoring and alerts",
    "Verified community members only",
    "AI-powered matching and recommendations",
    "24/7 support and community moderation",
    "Privacy-first approach to data protection",
    "Seamless cross-platform experience"
  ];

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why{" "}
            <span className="text-primary">
              Safirah
            </span>{" "}
            Matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Safirah isn't just another app – it's a revolutionary platform that puts safety, 
            community, and innovation at the forefront of digital connection. We're building 
            the future of secure, meaningful interactions.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 gradient-card rounded-2xl shadow-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Built for the Future, 
              <br />
              <span className="text-primary">Available Today</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              We're not just creating an app – we're building a movement towards safer, 
              more meaningful digital connections. Every feature is carefully crafted to 
              enhance your experience while keeping you secure.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 gradient-card rounded-2xl shadow-card text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Early Supporters</div>
              </div>
              
              <div className="p-6 gradient-card rounded-2xl shadow-card text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Safety Rating</div>
              </div>
              
              <div className="p-6 gradient-card rounded-2xl shadow-card text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              
              <div className="p-6 gradient-card rounded-2xl shadow-card text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}