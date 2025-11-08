import { ShieldCheck } from "lucide-react";

export const ComplianceFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-wellness" />
            <span className="font-medium">MOH Compliant Educational Platform</span>
          </div>
          
          <div className="text-center space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              This platform is created for educational purposes in digestive wellness.
              It does not provide diagnosis, treatment suggestions or product recommendations.
            </p>
            
            <p className="text-xs">
              This educational content complies with Vietnam Ministry of Health guidelines 
              for pharmaceutical communication and is intended solely for health awareness purposes.
            </p>
            
            <div className="pt-6 border-t border-border">
              <p className="font-medium text-foreground">
                © Abbott — All rights reserved.
              </p>
              <p className="text-xs mt-2">
                All information reviewed by internal Abbott Medical Compliance.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 pt-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
