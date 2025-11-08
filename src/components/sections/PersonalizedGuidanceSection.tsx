import { Card } from "@/components/ui/card";
import { Briefcase, Baby, Heart, Users } from "lucide-react";

const guidanceCards = [
  {
    icon: Briefcase,
    title: "Stressful Workdays",
    description: "Balance your gut health during high-pressure work schedules",
    color: "text-trust"
  },
  {
    icon: Users,
    title: "On-the-Go Mom Routine",
    description: "Digestive wellness tips for busy mothers juggling family life",
    color: "text-primary"
  },
  {
    icon: Baby,
    title: "Postpartum Reset",
    description: "Gentle digestive care for your post-pregnancy journey",
    color: "text-wellness"
  },
  {
    icon: Heart,
    title: "Senior Comfort Care",
    description: "Age-appropriate digestive wellness for healthy aging",
    color: "text-accent-foreground"
  }
];

export const PersonalizedGuidanceSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Personalised tips for your{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                daily life pattern
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guidanceCards.map((card, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-secondary ${card.color}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
