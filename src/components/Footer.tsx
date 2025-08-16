import { Button } from "@/components/ui/button";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">FitForce</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your body and mind at FitForce Gym. We provide the tools, 
              expertise, and community you need to achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a></li>
              <li><a href="#membership" className="text-muted-foreground hover:text-primary transition-smooth">Membership</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Personal Training</span></li>
              <li><span className="text-muted-foreground">Group Classes</span></li>
              <li><span className="text-muted-foreground">Nutrition Coaching</span></li>
              <li><span className="text-muted-foreground">24/7 Access</span></li>
              <li><span className="text-muted-foreground">Wellness Programs</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 FitForce Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;