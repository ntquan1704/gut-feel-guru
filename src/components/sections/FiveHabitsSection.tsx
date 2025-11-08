import { Card } from "@/components/ui/card";
import { Droplets, Apple, Moon, Activity, Smile } from "lucide-react";

const habits = [
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description: "Drink water throughout the day for optimal digestion",
    color: "text-trust"
  },
  {
    icon: Apple,
    title: "Fiber-Rich Foods",
    description: "Include fruits and vegetables in every meal",
    color: "text-wellness"
  },
  {
    icon: Activity,
    title: "Move Regularly",
    description: "Light walks after meals aid digestive comfort",
    color: "text-primary"
  },
  {
    icon: Moon,
    title: "Eat Mindfully",
    description: "Take time to chew and enjoy your meals",
    color: "text-accent-foreground"
  },
  {
    icon: Smile,
    title: "Manage Stress",
    description: "Practice relaxation for a happy gut",
    color: "text-primary"
  }
];

export const FiveHabitsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              5 micro-habits for{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                everyday digestive comfort
              </span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {habits.map((habit, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 ${habit.color}`}>
                  <habit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{habit.title}</h3>
                <p className="text-sm text-muted-foreground">{habit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
