import { Button } from "@/components/ui/button";
import { Mail, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const scrollToPrebook = () => {
    document.getElementById('prebook-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join{" "}
              <span className="text-primary">Safirah</span>?
            </h3>
            <p className="text-background/80 mb-6">
              Don't miss out on being part of something revolutionary. 
              Pre-book now and secure your exclusive rewards.
            </p>
            <Button 
              variant="glow" 
              size="lg" 
              onClick={scrollToPrebook}
              className="bg-primary hover:bg-primary-glow"
            >
              Pre-book Now
            </Button>
          </div>

          <div className="text-center lg:text-right">
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">Stay Connected</h4>
              <p className="text-background/80 text-sm">
                Follow us for updates and behind-the-scenes content
              </p>
            </div>
            
            <div className="flex gap-3 justify-center lg:justify-end">
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">Safirah</div>
              <div className="text-background/60 text-sm">
                © 2024 Safirah. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-1 text-background/80 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> for safer communities
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}