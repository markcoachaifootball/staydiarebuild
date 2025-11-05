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
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-foreground">
              Terms and Conditions (Ireland)
            </h1>
            <Button asChild>
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
              className="w-full h-[800px] border-0"
              title="Terms and Conditions Ireland"
            />
          </div>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            Last updated: October 30, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsIE;
