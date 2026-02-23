import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const TermsAndConditionsEUROv2 = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(600);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const updateWidth = () => {
      if (window.innerWidth < 640) setPageWidth(window.innerWidth - 32);
      else if (window.innerWidth < 1024) setPageWidth(600);
      else setPageWidth(800);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 md:mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Terms and Conditions (EUR) - V2
            </h1>
            <Button asChild className="w-full sm:w-auto">
              <a href="/documents/terms-and-conditions-euro-v2.pdf" download="Staydia-Terms-And-Conditions-EUR-v2.pdf">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
            <Document
              file="/documents/terms-and-conditions-euro-v2.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="flex items-center justify-center h-[400px]"><p className="text-muted-foreground">Loading PDF...</p></div>}
              error={
                <div className="flex flex-col items-center justify-center h-[400px] gap-4">
                  <p className="text-destructive">Failed to load PDF</p>
                  <Button asChild><a href="/documents/terms-and-conditions-euro-v2.pdf" download>Download PDF instead</a></Button>
                </div>
              }
            >
              <div className="flex justify-center">
                <Page pageNumber={pageNumber} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
              </div>
            </Document>
            {numPages > 0 && (
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t">
                <Button variant="outline" size="sm" onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-foreground font-medium">Page {pageNumber} of {numPages}</span>
                <Button variant="outline" size="sm" onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center">Last updated: February 23, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsEUROv2;
