import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Linkedin, Mail, Phone } from "lucide-react";

export function DeveloperContact() {
  const openWhatsApp = () => {
    const phoneNumber = "+918698535216"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in the Safirah app and would like to connect with the development team.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openLinkedIn = () => {
    const linkedinUrl = "https://linkedin.com/in/mufaddal-lashkarwala"; // Replace with actual LinkedIn profile
    window.open(linkedinUrl, '_blank');
  };

  const openEmail = () => {
    const email = "mufaddal.lashkar@gmail.com"; // Replace with actual email
    const subject = "Inquiry about Safirah App Development";
    const body = "Hi Safirah team,\n\nI'm interested in learning more about the Safirah app and connecting with your development team.\n\nBest regards";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Connect with Our{" "}
            <span className="text-primary">
              Developers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about Safirah? Want to collaborate or provide feedback? 
            Get in touch with our development team directly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Chat with us directly for quick questions and instant support
            </p>
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Start Chat
            </Button>
          </Card>

          <Card className="p-6 text-center gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Connect professionally and follow our company updates
            </p>
            <Button 
              onClick={openLinkedIn}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Connect
            </Button>
          </Card>

          <Card className="p-6 text-center gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Send us detailed inquiries and business proposals
            </p>
            <Button 
              onClick={openEmail}
              variant="hero"
              className="w-full"
            >
              Send Email
            </Button>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Response time: Usually within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}