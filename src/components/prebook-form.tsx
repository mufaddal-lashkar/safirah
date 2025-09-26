import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Gift, Badge, Star, Mail, Phone, User } from "lucide-react";

export function PrebookForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            toast({
                title: "Name required",
                description: "Please enter your name to continue.",
                variant: "destructive",
            });
            return;
        }

        if (!email.trim()) {
            toast({
                title: "Email required",
                description: "Please enter your email address to continue.",
                variant: "destructive",
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast({
                title: "Invalid email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        const formData = {
            name: name,
            email: email,
            phone: phone,
        };

        await fetch("https://script.google.com/macros/s/AKfycbzvW4ve02K4e0mc_S2BsedExWuAUWswuiPeb16spa7uwWxU-i-ZDqxS86uYgkOR7qZP/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        toast({
            title: "Welcome to Safirah! 🎉",
            description: "You're now on the exclusive pre-book list. Watch for updates and rewards!",
        });

        setName("");
        setEmail("");
        setPhone("");
        setIsSubmitting(false)

    };

    return (
        <section id="prebook-form" className="py-20 px-4 bg-background">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Secure Your{" "}
                        <span className="text-primary">
                            Exclusive
                        </span>{" "}
                        Access
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands who've already reserved their spot. Pre-book users get special perks,
                        exclusive badges, and early access to all features.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Rewards highlight */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Exclusive Pre-book Rewards
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 gradient-card rounded-xl shadow-card">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <Badge className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Founder Badge</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Exclusive digital badge showing you were an early supporter
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 gradient-card rounded-xl shadow-card">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <Gift className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Premium Features</h4>
                                    <p className="text-sm text-muted-foreground">
                                        6 months of premium features absolutely free
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 gradient-card rounded-xl shadow-card">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <Star className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Priority Access</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Be the first to access new features and updates, along with beta version
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <Card className="p-8 shadow-card">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium">
                                    Full Name *
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="pl-10 h-12"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email Address *
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 h-12"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-medium">
                                    Phone Number (Optional)
                                </Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="1234567890"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="hero"
                                size="lg"
                                className="w-full h-12 text-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Securing Your Spot..." : "Reserve My Spot"}
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                                By pre-booking, you agree to receive updates about Safirah.
                                No spam, unsubscribe anytime.
                            </p>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}