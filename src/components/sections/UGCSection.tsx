import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Heart, Users } from "lucide-react";

const reelFrames = [
  {
    title: "Mom Meetup - District 7",
    community: "Comfort Circle",
    likes: "124",
    type: "offline event"
  },
  {
    title: "Wellness Workshop",
    community: "Comfort Circle",
    likes: "89",
    type: "offline event"
  },
  {
    title: "Postpartum Support Group",
    community: "Comfort Circle",
    likes: "156",
    type: "community"
  },
  {
    title: "Healthy Lunch Tips",
    community: "Comfort Circle",
    likes: "203",
    type: "community"
  },
  {
    title: "Morning Habit Challenge",
    community: "Comfort Circle",
    likes: "178",
    type: "offline event"
  },
  {
    title: "Digestive Comfort Circle",
    community: "Comfort Circle",
    likes: "145",
    type: "community"
  }
];

export const UGCSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-wellness/10 text-wellness px-6 py-2 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="text-lg font-semibold">Comfort Circle</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Community Moments &{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Real Stories
              </span>
            </h2>
            <p className="text-xl text-accent-foreground">
              From offline mom events to our growing Comfort Circle Community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {reelFrames.map((frame, index) => (
              <Card 
                key={index} 
                className="relative aspect-[9/16] overflow-hidden group cursor-pointer hover:shadow-card transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-wellness/20 via-primary/30 to-wellness/40 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      {frame.type === "offline event" ? "📍 Event" : "💬 Community"}
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs">
                      <Heart className="w-3 h-3 fill-emphasis text-emphasis" />
                      {frame.likes}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">
                      {frame.title}
                    </h3>
                    <div className="inline-block bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="text-xs font-semibold text-wellness">
                        #{frame.community}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-wellness/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="default">
              <MessageSquare className="w-5 h-5 mr-2" />
              Share your Comfort Circle story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
