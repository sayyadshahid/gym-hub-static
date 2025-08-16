import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Clock, Users, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Years of Excellence", value: "15+" },
  { icon: Users, label: "Active Members", value: "2,500+" },
  { icon: Target, label: "Success Stories", value: "1,000+" },
  { icon: Clock, label: "Operating Hours", value: "24/7" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">FitForce</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Since 2009, FitForce Gym has been the premier destination for fitness enthusiasts 
                who demand excellence. Our state-of-the-art facility combines cutting-edge equipment 
                with expert guidance to create an environment where transformation happens.
              </p>
              
              <p>
                We believe fitness is not just about building muscle or losing weight—it's about 
                building confidence, discipline, and a lifestyle that empowers you to tackle any 
                challenge life throws your way.
              </p>
              
              <p>
                Our team of certified trainers, nutritionists, and wellness experts are committed 
                to helping you achieve your goals, no matter where you are in your fitness journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Join Our Community
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-smooth text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose <span className="text-primary">FitForce?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Expert Guidance</h4>
              <p className="text-muted-foreground">
                Our certified trainers have decades of combined experience helping people achieve their fitness goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Results-Driven</h4>
              <p className="text-muted-foreground">
                We focus on measurable results and provide the tools and support you need to succeed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Community Spirit</h4>
              <p className="text-muted-foreground">
                Join a supportive community that motivates and inspires you to reach new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;