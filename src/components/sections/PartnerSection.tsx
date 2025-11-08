import { Building2 } from "lucide-react";

const partners = [
  "Long Châu",
  "Pharmacity",
  "An Khang",
  "Medicare",
  "Guardian",
  "Phano"
];

export const PartnerSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-semibold text-muted-foreground">
            In partnership with
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted hover:bg-secondary transition-colors duration-300 cursor-pointer"
              >
                <Building2 className="w-12 h-12 text-muted-foreground mb-3" />
                <p className="font-medium text-foreground">{partner}</p>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground max-w-3xl mx-auto pt-6">
            Find digestive education content at our partner pharmacies
          </p>
        </div>
      </div>
    </section>
  );
};
