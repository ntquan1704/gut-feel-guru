import { Card } from "@/components/ui/card";
import expertHero from "@/assets/expert-hero.jpg";
import { Sparkles } from "lucide-react";

export const ExpertSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-card">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={expertHero} 
                  alt="Nutrition Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-trust/10 text-trust px-4 py-2 rounded-full w-fit mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">HCP & Influencer Insight</span>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  "Hi, I'm <strong>Mai Nguyen</strong>, sports-mom + nutrition trainer. 
                  I used to struggle with digestive discomfort during stress, competition travel, 
                  and unbalanced eating — until I changed my habits."
                </p>
                
                <div className="bg-accent p-6 rounded-lg border-l-4 border-wellness">
                  <p className="text-accent-foreground font-semibold text-lg">
                    Small lifestyle shifts = major digestive comfort.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
