import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, MessageSquare } from "lucide-react";

const stories = [
  {
    name: "Thanh L.",
    role: "Working Mom",
    story: "After following the 14-day challenge, my digestive comfort improved dramatically. No more afternoon discomfort!",
    progress: "2 weeks"
  },
  {
    name: "Minh N.",
    role: "Office Professional",
    story: "The personalized tips helped me manage stress-related digestive issues. I feel more balanced every day.",
    progress: "1 month"
  },
  {
    name: "Lan H.",
    role: "New Mother",
    story: "The postpartum guidance was exactly what I needed. Simple changes made a big difference in my recovery.",
    progress: "3 months"
  }
];

export const UGCSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Real stories.{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Real progress.
              </span>
            </h2>
            <p className="text-xl text-accent-foreground">
              See how others improved their comfort.
              Submit your story and inspire the next mom / colleague / athlete.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{story.story}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-wellness">{story.progress}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="default">
              <MessageSquare className="w-5 h-5 mr-2" />
              Submit my story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
