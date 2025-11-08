import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Clock, Shield } from "lucide-react";

export const QuizIntroSection = () => {
  const [consent, setConsent] = useState(false);

  return (
    <section id="quiz-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Take 2 minutes — understand your{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Digestive Personality
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The quiz helps us personalise your tips & habits.
            </p>
          </div>
          
          <Card className="p-8 shadow-card">
            <div className="space-y-6">
              <div className="flex items-center gap-6 justify-center text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-wellness" />
                  <span>Secure & private</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg text-left">
                <Checkbox 
                  id="consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                />
                <label 
                  htmlFor="consent" 
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  By continuing, I agree to share data for educational purpose and receive 
                  tips via Zalo / Email.
                </label>
              </div>
              
              <Button 
                size="lg" 
                className="w-full md:w-auto px-12"
                disabled={!consent}
              >
                Start Quiz
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
