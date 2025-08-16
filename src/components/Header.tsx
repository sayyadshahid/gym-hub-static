import { Button } from "@/components/ui/button";
import { Menu, Dumbbell } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">FitForce</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#membership" className="text-foreground hover:text-primary transition-smooth">Membership</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="hero">
              Join Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;