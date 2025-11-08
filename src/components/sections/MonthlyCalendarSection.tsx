import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const monthlyThemes = [
  { month: "January", theme: "New Year Reset", description: "Start the year with digestive wellness habits" },
  { month: "February", theme: "Tết — Overeating Care", description: "Navigate festival foods, oily meals & irregular timing" },
  { month: "March", theme: "Spring Renewal", description: "Fresh starts with seasonal eating patterns" },
  { month: "April", theme: "Stress Management", description: "Combat work stress impact on digestion" },
  { month: "May", theme: "World Digestive Health Day", description: "May 29 — Global awareness & education" },
  { month: "June", theme: "Hydration Focus", description: "Summer hydration for digestive health" },
  { month: "July", theme: "Summer Travel", description: "Prevent dehydration & constipation on the go" },
  { month: "August", theme: "Postpartum Care Peak", description: "High birth month — new mom digestive support" },
  { month: "September", theme: "Back to Routine", description: "Stabilize digestive patterns after summer" },
  { month: "October", theme: "Immune Support", description: "Gut health for seasonal transitions" },
  { month: "November", theme: "Holiday Prep", description: "Building healthy habits before festivities" },
  { month: "December", theme: "Party Season Eating", description: "Christmas & year-end celebration guidance" }
];

export const MonthlyCalendarSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Digestive moments{" "}
              <span className="bg-gradient-wellness bg-clip-text text-transparent">
                through the year
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Each month → personalised content, habits, reminders
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyThemes.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-wellness/10">
                    <Calendar className="w-5 h-5 text-wellness" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.month}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.theme}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
