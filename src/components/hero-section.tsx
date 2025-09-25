import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Users } from "lucide-react";
import heroMockup from "@/assets/hero-section-mockup.jpg";

export function HeroSection() {
    const scrollToPrebook = () => {
        document.getElementById('prebook-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 gradient-hero overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-in">
                            <Star className="w-4 h-4 text-primary" />
                            Coming Soon - Pre-book Now!
                        </div>

                        {/* Main headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
                            Pre-book{" "}
                            <span className="text-primary">
                                Safirah
                            </span>{" "}
                            Now
                            <br />
                            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
                                & Be Among the First!
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-up">
                            Join a revolutionary platform built on safety, community, and innovation.
                            Early supporters get exclusive rewards and digital badges.
                        </p>

                        {/* Feature highlights */}
                        <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <Shield className="w-4 h-4 text-primary" />
                                Safety First
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <Users className="w-4 h-4 text-primary" />
                                Community Driven
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <Star className="w-4 h-4 text-primary" />
                                Exclusive Rewards
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                            <Button
                                size="lg"
                                variant="hero"
                                onClick={scrollToPrebook}
                                className="text-lg px-8 py-6 h-auto"
                            >
                                Pre-book Now
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={scrollToPrebook}
                                className="text-lg px-8 py-6 h-auto"
                            >
                                Join Waitlist
                            </Button>
                        </div>
                    </div>

                    {/* Right content - App mockup */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative animate-float">
                            <img
                                src={heroMockup}
                                alt="Safirah app mockup showcasing modern interface with safety and community features"
                                className="w-full max-w-md h-auto hover-lift rounded-xl"
                            />

                            {/* Floating badges */}
                            <div className="absolute -top-4 -left-4 bg-card shadow-card rounded-2xl p-4 animate-bounce-in">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium">Exclusive Rewards</p>
                                        <p className="text-lg font-bold text-primary">For Pre-bookers</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -right-4 bg-card shadow-card rounded-2xl p-4 animate-bounce-in">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium">Early Supporter</p>
                                        <p className="text-lg font-bold text-primary">Special Badge</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}