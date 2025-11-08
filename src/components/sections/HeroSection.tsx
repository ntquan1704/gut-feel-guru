import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz-section");
    quizSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-warm opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            What is your{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Digestive Personality
            </span>
            ?
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your gut feelings say more about your life than you think.
          </p>
          
          <Button 
            onClick={scrollToQuiz}
            size="lg" 
            className="text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Start the Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};
