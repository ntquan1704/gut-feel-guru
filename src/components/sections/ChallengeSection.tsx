import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from "lucide-react";

export const ChallengeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5" />
              <span className="font-medium">Join the Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Join our{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Gut Comfort Challenge
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your commitment level and start your journey
            </p>
          </div>
          
          <Card className="p-8 shadow-card">
            <Tabs defaultValue="14" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="7">7-Day</TabsTrigger>
                <TabsTrigger value="14">14-Day</TabsTrigger>
                <TabsTrigger value="30">30-Day</TabsTrigger>
              </TabsList>
              
              {["7", "14", "30"].map((days) => (
                <TabsContent key={days} value={days} className="space-y-6">
                  <div className="text-center py-6 bg-muted rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">{days}-Day Challenge</h3>
                    <p className="text-muted-foreground">
                      Build lasting habits with daily guidance and support
                    </p>
                  </div>
                  
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zalo">Zalo Number</Label>
                      <Input id="zalo" placeholder="Your Zalo number" />
                    </div>
                    
                    <Button size="lg" className="w-full">
                      Send me my personalised plan
                    </Button>
                  </form>
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};
