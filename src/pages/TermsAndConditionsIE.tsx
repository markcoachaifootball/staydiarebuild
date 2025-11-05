import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const TermsAndConditionsIE = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(600);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page width based on screen size
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setPageWidth(window.innerWidth - 32); // Account for padding
      } else if (window.innerWidth < 1024) {
        setPageWidth(600);
      } else {
        setPageWidth(800);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

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
            <div className="flex flex-col items-center p-4 md:p-6">
              <div className="mb-4">
                <Document
                  file="/documents/terms-and-conditions-ie-v1.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex items-center justify-center h-[400px]">
                      <p className="text-muted-foreground">Loading PDF...</p>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center h-[400px] gap-4">
                      <p className="text-destructive">Failed to load PDF</p>
                      <Button asChild>
                        <a href="/documents/terms-and-conditions-ie-v1.pdf" download>
                          Download PDF instead
                        </a>
                      </Button>
                    </div>
                  }
                  className="flex justify-center"
                >
                  <Page 
                    pageNumber={pageNumber} 
                    width={pageWidth}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="shadow-sm"
                  />
                </Document>
              </div>
              
              {numPages > 0 && (
                <div className="flex items-center justify-center gap-4 w-full border-t pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground font-medium">
                      Page {pageNumber} of {numPages}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
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
