import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Eye, Download } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

interface Contract {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_company: string;
  status: string;
  created_at: string;
  sent_at: string;
  viewed_at: string;
  signed_at: string;
  expires_at: string;
  signing_token: string;
  contract_data: any;
  contract_templates: {
    name: string;
    content: string;
    terms_and_conditions: string;
  };
  signatures?: {
    signature_data: string;
    signature_type: string;
    terms_accepted: boolean;
    created_at: string;
  }[];
}

export default function ContractView() {
  const { id } = useParams<{ id: string }>();
  const [session, setSession] = useState<Session | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (!session) {
          navigate('/auth');
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (session && id) {
      fetchContract();
    }
  }, [session, id]);

  const fetchContract = async () => {
    try {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          contract_templates (
            name,
            content,
            terms_and_conditions
          ),
          signatures (
            signature_data,
            signature_type,
            terms_accepted,
            created_at
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      setContract(data);
    } catch (error: any) {
      toast({
        title: "Error loading contract",
        description: error.message,
        variant: "destructive",
      });
      navigate('/contracts');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendContract = async () => {
    if (!contract) return;

    setIsSending(true);
    try {
      // Update contract status to sent
      const { error: updateError } = await supabase
        .from('contracts')
        .update({
          status: 'sent',
          sent_at: new Date().toISOString()
        })
        .eq('id', contract.id);

      if (updateError) throw updateError;

      // Here you would typically send an email to the customer
      // For now, we'll just show the signing link
      const signingUrl = `${window.location.origin}/sign/${contract.signing_token}`;
      
      toast({
        title: "Contract sent!",
        description: `Contract has been sent. Signing URL: ${signingUrl}`,
      });

      fetchContract(); // Refresh contract data
    } catch (error: any) {
      toast({
        title: "Error sending contract",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      draft: "outline",
      sent: "secondary",
      viewed: "default",
      signed: "default",
      completed: "default",
    };

    const colors: Record<string, string> = {
      draft: "text-muted-foreground",
      sent: "text-blue-600",
      viewed: "text-yellow-600",
      signed: "text-green-600",
      completed: "text-green-700",
    };

    return (
      <Badge variant={variants[status] || "outline"} className={colors[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const processContractContent = (content: string) => {
    if (!contract) return content;
    
    return content
      .replace(/\{customer_name\}/g, contract.customer_name || contract.customer_email)
      .replace(/\{customer_email\}/g, contract.customer_email)
      .replace(/\{customer_company\}/g, contract.customer_company || '');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading contract...</p>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Contract not found</p>
      </div>
    );
  }

  const signingUrl = `${window.location.origin}/sign/${contract.signing_token}`;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/contracts')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Contracts
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Contract Details</h1>
              <p className="text-sm text-muted-foreground">
                {contract.contract_templates.name}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {getStatusBadge(contract.status)}
            {contract.status === 'draft' && (
              <Button onClick={handleSendContract} disabled={isSending}>
                <Send className="h-4 w-4 mr-2" />
                Send Contract
              </Button>
            )}
            {contract.status !== 'draft' && (
              <Button variant="outline" onClick={() => window.open(signingUrl, '_blank')}>
                <Eye className="h-4 w-4 mr-2" />
                View Signing Page
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contract Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Contract Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customer</p>
                  <p className="font-medium">{contract.customer_name || contract.customer_email}</p>
                  <p className="text-sm text-muted-foreground">{contract.customer_email}</p>
                  {contract.customer_company && (
                    <p className="text-sm text-muted-foreground">{contract.customer_company}</p>
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  {getStatusBadge(contract.status)}
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">Created</p>
                  <p className="text-sm">{new Date(contract.created_at).toLocaleDateString()}</p>
                </div>

                {contract.sent_at && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Sent</p>
                    <p className="text-sm">{new Date(contract.sent_at).toLocaleDateString()}</p>
                  </div>
                )}

                {contract.viewed_at && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Viewed</p>
                    <p className="text-sm">{new Date(contract.viewed_at).toLocaleDateString()}</p>
                  </div>
                )}

                {contract.signed_at && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Signed</p>
                    <p className="text-sm">{new Date(contract.signed_at).toLocaleDateString()}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium text-muted-foreground">Expires</p>
                  <p className="text-sm">{new Date(contract.expires_at).toLocaleDateString()}</p>
                </div>

                {contract.status !== 'draft' && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Signing URL</p>
                    <div className="p-2 bg-muted rounded text-xs break-all">
                      {signingUrl}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {contract.signatures && contract.signatures.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Signature</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Type:</span> {contract.signatures[0].signature_type}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Terms Accepted:</span> {contract.signatures[0].terms_accepted ? 'Yes' : 'No'}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Signed:</span> {new Date(contract.signatures[0].created_at).toLocaleDateString()}
                    </p>
                    {contract.signatures[0].signature_type === 'drawn' && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Signature:</p>
                        <img 
                          src={contract.signatures[0].signature_data} 
                          alt="Customer signature" 
                          className="border rounded max-w-full h-auto"
                        />
                      </div>
                    )}
                    {contract.signatures[0].signature_type === 'typed' && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Typed Signature:</p>
                        <div className="p-2 bg-muted rounded italic">
                          {contract.signatures[0].signature_data}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contract Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Contract Content</CardTitle>
                <CardDescription>
                  Preview of the contract with customer data merged
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {processContractContent(contract.contract_templates.content)}
                  </div>
                  
                  {contract.contract_templates.terms_and_conditions && (
                    <div className="mt-8 pt-8 border-t">
                      <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
                      <div className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                        {contract.contract_templates.terms_and_conditions}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}