import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Fitness Street", "Downtown District", "City, State 12345"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "Available 24/7"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@fitforcegym.com", "support@fitforcegym.com"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 Gym Access", "Staff: Mon-Fri 6AM-10PM", "Weekends: 8AM-8PM"]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free consultation 
            and tour of our facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="bg-gradient-card rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-4">Why Visit Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Free facility tour and fitness assessment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Meet our expert trainers and staff
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Try our equipment and group classes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Discuss your fitness goals and get personalized advice
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                    rows={4}
                  />
                </div>
                
                <Button variant="hero" className="w-full text-lg py-3">
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;