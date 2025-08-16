import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Heart, Zap, Target, Trophy } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers tailored to your specific fitness goals and needs.",
    features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"]
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "High-energy group workouts that make fitness fun while building a supportive community.",
    features: ["HIIT workouts", "Yoga & Pilates", "Strength training", "Cardio sessions"]
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Comprehensive health and wellness programs focusing on your overall well-being.",
    features: ["Health assessments", "Recovery sessions", "Mental wellness", "Lifestyle coaching"]
  },
  {
    icon: Zap,
    title: "24/7 Gym Access",
    description: "Round-the-clock access to our state-of-the-art facility with the latest equipment.",
    features: ["Premium equipment", "Cardio zone", "Free weights", "Functional training area"]
  },
  {
    icon: Target,
    title: "Nutrition Coaching",
    description: "Expert nutritional guidance to complement your fitness journey and optimize results.",
    features: ["Meal planning", "Supplement advice", "Body composition analysis", "Habit formation"]
  },
  {
    icon: Trophy,
    title: "Athletic Performance",
    description: "Specialized training for athletes looking to enhance their competitive edge.",
    features: ["Sport-specific training", "Performance testing", "Injury prevention", "Recovery protocols"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals, 
            whether you're a beginner or a seasoned athlete.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;