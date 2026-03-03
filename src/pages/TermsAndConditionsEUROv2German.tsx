import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, FileText } from "lucide-react";

const TermsAndConditionsEUROv2German = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 md:mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
        </Button>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
            Allgemeine Geschäftsbedingungen (EUR) – V2 (Deutsch)
          </h1>
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 flex flex-col items-center gap-6">
            <FileText className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground text-lg">
              Klicken Sie auf die Schaltfläche unten, um die Allgemeinen Geschäftsbedingungen herunterzuladen.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="/documents/terms-and-conditions-euro-v2-german.docx"
                download="Staydia-AGB-EUR-v2-Deutsch.docx"
              >
                <Download className="mr-2 h-5 w-5" /> Dokument herunterladen
              </a>
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4">
            Zuletzt aktualisiert: März 3, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsEUROv2German;
