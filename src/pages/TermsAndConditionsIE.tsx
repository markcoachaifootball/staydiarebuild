import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";

const TermsAndConditionsIE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 md:mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Terms and Conditions (Ireland)
            </h1>
            <Button asChild className="w-full sm:w-auto">
              <a
                href="/documents/terms-and-conditions-ie-v1.pdf"
                download="Staydia-Terms-And-Conditions-IE.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/documents/terms-and-conditions-ie-v1.pdf"
              className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] border-0"
              title="Terms and Conditions Ireland"
            />
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center">
            Last updated: October 30, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsIE;
