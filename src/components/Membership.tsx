import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started with your fitness journey",
    features: [
      "Gym access during business hours",
      "Basic equipment access",
      "Locker room access",
      "Free fitness assessment",
      "Online workout library"
    ],
    popular: false,
    variant: "outline" as const
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "24/7 gym access",
      "All equipment access",
      "Group classes included",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Guest privileges (2/month)",
      "Locker rental included"
    ],
    popular: true,
    variant: "hero" as const
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    description: "Ultimate fitness experience with premium perks",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "VIP locker room access",
      "Unlimited guest privileges",
      "Priority class booking",
      "Meal prep services",
      "Recovery spa access",
      "Dedicated trainer assignment"
    ],
    popular: false,
    variant: "electric" as const
  }
];

const Membership = () => {
  return (
    <section id="membership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Membership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            All plans include access to our world-class facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border hover:shadow-card transition-smooth ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button variant={plan.variant} className="w-full text-lg py-3">
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All memberships include a 7-day free trial. No commitment required.
          </p>
          <Button variant="ghost" className="text-primary">
            Compare All Features →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Membership;