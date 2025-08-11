import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { FileSignature, Pen, Type, Check, Eye, Download } from 'lucide-react';

interface Contract {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_company: string;
  status: string;
  expires_at: string;
  contract_templates: {
    name: string;
    content: string;
    terms_and_conditions: string;
    template_file_url: string | null;
    template_file_name: string | null;
    terms_file_url: string | null;
    terms_file_name: string | null;
  };
}

export default function SignContract() {
  const { token } = useParams<{ token: string }>();
  const [contract, setContract] = useState<Contract | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signatureType, setSignatureType] = useState<'drawn' | 'typed'>('drawn');
  const [typedSignature, setTypedSignature] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchContract();
    }
  }, [token]);

  useEffect(() => {
    if (contract?.status === 'viewed') {
      // Update status to viewed only once
      updateContractStatus('viewed');
    }
  }, [contract?.id]);

  const fetchContract = async () => {
    try {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          contract_templates (
            name,
            content,
            terms_and_conditions,
            template_file_url,
            template_file_name,
            terms_file_url,
            terms_file_name
          )
        `)
        .eq('signing_token', token)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        toast({
          title: "Contract not found",
          description: "This contract does not exist or has been removed.",
          variant: "destructive",
        });
        return;
      }

      // Validate the signing token matches (additional security check)
      if (data.signing_token !== token) {
        toast({
          title: "Invalid signing link",
          description: "This signing link is not valid for this contract.",
          variant: "destructive",
        });
        return;
      }

      // Check if contract has expired
      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        toast({
          title: "Contract expired",
          description: "This contract has expired and can no longer be signed.",
          variant: "destructive",
        });
        return;
      }

      // Check if contract can be signed (valid statuses)
      if (!['sent', 'viewed', 'draft'].includes(data.status)) {
        toast({
          title: "Contract already processed",
          description: "This contract has already been signed or is no longer available for signing.",
          variant: "destructive",
        });
        return;
      }

      setContract(data);

      // Update status to viewed if not already signed
      if (data.status === 'sent') {
        updateContractStatus('viewed');
      }
    } catch (error: any) {
      toast({
        title: "Contract not found",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateContractStatus = async (status: string) => {
    try {
      const updateData: any = { status };
      if (status === 'viewed') {
        updateData.viewed_at = new Date().toISOString();
      } else if (status === 'signed') {
        updateData.signed_at = new Date().toISOString();
      }

      await supabase
        .from('contracts')
        .update(updateData)
        .eq('signing_token', token);
    } catch (error) {
      console.error('Error updating contract status:', error);
    }
  };

  const processContractContent = (content: string) => {
    if (!contract) return content;
    
    return content
      .replace(/\{customer_name\}/g, contract.customer_name || contract.customer_email)
      .replace(/\{customer_email\}/g, contract.customer_email)
      .replace(/\{customer_company\}/g, contract.customer_company || '');
  };

  // Canvas drawing functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x, y;
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x, y;
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = async () => {
    if (!contract || !termsAccepted) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to sign this contract.",
        variant: "destructive",
      });
      return;
    }

    let signatureData = '';

    if (signatureType === 'drawn') {
      const canvas = canvasRef.current;
      if (!canvas) return;
      signatureData = canvas.toDataURL();
    } else {
      if (!typedSignature.trim()) {
        toast({
          title: "Signature required",
          description: "Please enter your typed signature.",
          variant: "destructive",
        });
        return;
      }
      signatureData = typedSignature.trim();
    }

    setIsSubmitting(true);

    try {
      // Insert signature
      const { error: signatureError } = await supabase
        .from('signatures')
        .insert([{
          contract_id: contract.id,
          signature_data: signatureData,
          signature_type: signatureType,
          terms_accepted: termsAccepted,
          signer_ip: '', // Could be populated with actual IP
          signer_user_agent: navigator.userAgent
        }]);

      if (signatureError) throw signatureError;

      // Update contract status
      await updateContractStatus('signed');

      // Send notification to contract owner
      await supabase.functions.invoke('contract-signed-notification', {
        body: {
          contractId: contract.id,
          signerName: contract.customer_name || contract.customer_email,
          signerEmail: contract.customer_email,
          signatureType: signatureType
        }
      });

      toast({
        title: "Contract signed!",
        description: "Thank you for signing the contract. The contract owner has been notified.",
      });

      // Redirect to success page or show success message
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);

    } catch (error: any) {
      toast({
        title: "Error signing contract",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <FileSignature className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading contract...</p>
        </div>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <FileSignature className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Contract Not Found</h1>
          <p className="text-muted-foreground">The contract you're looking for could not be found or has expired.</p>
        </div>
      </div>
    );
  }

  if (contract.status === 'signed') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Check className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Already Signed</h1>
          <p className="text-muted-foreground">This contract has already been signed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <FileSignature className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Sign Contract</h1>
              <p className="text-sm text-muted-foreground">
                {contract.contract_templates.name}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contract Content */}
          <Card>
            <CardHeader>
              <CardTitle>Contract Content</CardTitle>
              <CardDescription>
                Please review the contract carefully before signing
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contract.contract_templates.template_file_url ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Contract Document: {contract.contract_templates.template_file_name}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={contract.contract_templates.template_file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download
                      >
                        Download PDF
                      </a>
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <iframe
                      src={contract.contract_templates.template_file_url}
                      className="w-full h-96"
                      title="Contract Document"
                    />
                  </div>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {processContractContent(contract.contract_templates.content)}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          {(contract.contract_templates.terms_and_conditions || contract.contract_templates.terms_file_url) && (
            <Card>
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
                <CardDescription>
                  Please review and accept the terms and conditions before signing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Terms Preview */}
                  <div className="border rounded-lg p-4 bg-muted/50">
                    {contract.contract_templates.terms_file_url ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileSignature className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            {contract.contract_templates.terms_file_name || 'Terms & Conditions'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-2" />
                                View Terms
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Terms & Conditions</DialogTitle>
                                <DialogDescription>
                                  Please review the complete terms and conditions
                                </DialogDescription>
                              </DialogHeader>
                              <div className="border rounded-lg overflow-hidden">
                                <iframe
                                  src={contract.contract_templates.terms_file_url}
                                  className="w-full h-96"
                                  title="Terms and Conditions"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm" asChild>
                            <a 
                              href={contract.contract_templates.terms_file_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              download
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </a>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Terms & Conditions Summary</h4>
                          <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-2" />
                                View Full Terms
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Terms & Conditions</DialogTitle>
                                <DialogDescription>
                                  Complete terms and conditions for this contract
                                </DialogDescription>
                              </DialogHeader>
                              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                                {contract.contract_templates.terms_and_conditions}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-3">
                          {contract.contract_templates.terms_and_conditions?.substring(0, 200)}
                          {contract.contract_templates.terms_and_conditions && contract.contract_templates.terms_and_conditions.length > 200 && '...'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Acceptance Checkbox */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg bg-card">
                    <Checkbox 
                      id="terms" 
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                      className="mt-0.5"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label 
                        htmlFor="terms" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I accept the terms and conditions
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        By checking this box, I confirm that I have read, understood, and agree to be bound by the terms and conditions outlined above.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Signature Section */}
          <Card>
            <CardHeader>
              <CardTitle>Sign the Contract</CardTitle>
              <CardDescription>
                Choose how you would like to sign this contract
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={signatureType} onValueChange={(value) => setSignatureType(value as 'drawn' | 'typed')}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="drawn">
                    <Pen className="h-4 w-4 mr-2" />
                    Draw Signature
                  </TabsTrigger>
                  <TabsTrigger value="typed">
                    <Type className="h-4 w-4 mr-2" />
                    Type Signature
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="drawn" className="space-y-4">
                  <div>
                    <Label>Draw your signature below</Label>
                    <div className="border rounded-lg p-4 bg-white">
                      <canvas
                        ref={canvasRef}
                        width={600}
                        height={200}
                        className="border border-dashed border-gray-300 w-full cursor-crosshair"
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        style={{ touchAction: 'none' }}
                      />
                      <div className="mt-2 flex justify-between">
                        <p className="text-sm text-muted-foreground">
                          Sign above using your mouse or touch
                        </p>
                        <Button variant="outline" size="sm" onClick={clearSignature}>
                          Clear
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="typed" className="space-y-4">
                  <div>
                    <Label htmlFor="typed-signature">Type your full name</Label>
                    <Input
                      id="typed-signature"
                      placeholder="Enter your full name as signature"
                      value={typedSignature}
                      onChange={(e) => setTypedSignature(e.target.value)}
                      className="text-2xl italic font-serif"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-6 border-t">
                <div className="space-y-3">
                  {!termsAccepted && (
                    <p className="text-sm text-muted-foreground text-center">
                      Please accept the terms and conditions to proceed with signing
                    </p>
                  )}
                  <Button 
                    onClick={handleSubmit}
                    disabled={!termsAccepted || isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Signing Contract..."
                    ) : (
                      <>
                        <FileSignature className="h-4 w-4 mr-2" />
                        Sign Contract
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By signing, you confirm your agreement to all terms and your signature will be legally binding
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}