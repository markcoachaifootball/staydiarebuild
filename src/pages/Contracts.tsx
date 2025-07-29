import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Plus, FileSignature, LogOut, Eye, Send, Edit } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

interface Contract {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_company: string;
  status: string;
  created_at: string;
  sent_at: string;
  signed_at: string;
  contract_templates: {
    name: string;
  };
}

export default function Contracts() {
  const [session, setSession] = useState<Session | null>(null);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (!session) {
          navigate('/auth');
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (session) {
      fetchContracts();
    }
  }, [session]);

  const fetchContracts = async () => {
    try {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          contract_templates (
            name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setContracts(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading contracts",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/auth');
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <FileSignature className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading contracts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FileSignature className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Digital Contracts</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back, {session?.user?.email}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => navigate('/contracts/templates')}>
              <Edit className="h-4 w-4 mr-2" />
              Templates
            </Button>
            <Button onClick={() => navigate('/contracts/new')}>
              <Plus className="h-4 w-4 mr-2" />
              New Contract
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {contracts.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <FileSignature className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="mb-2">No contracts yet</CardTitle>
              <CardDescription className="mb-6">
                Get started by creating your first contract template and sending it to customers.
              </CardDescription>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate('/contracts/templates')}>
                  <Edit className="h-4 w-4 mr-2" />
                  Create Template
                </Button>
                <Button variant="outline" onClick={() => navigate('/contracts/new')}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Contract
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Your Contracts</h2>
              <div className="text-sm text-muted-foreground">
                {contracts.length} contract{contracts.length !== 1 ? 's' : ''} total
              </div>
            </div>

            <div className="grid gap-4">
              {contracts.map((contract) => (
                <Card key={contract.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">
                            {contract.customer_name || contract.customer_email}
                          </h3>
                          {getStatusBadge(contract.status)}
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Template: {contract.contract_templates?.name}</p>
                          <p>Email: {contract.customer_email}</p>
                          {contract.customer_company && (
                            <p>Company: {contract.customer_company}</p>
                          )}
                          <p>Created: {new Date(contract.created_at).toLocaleDateString()}</p>
                          {contract.sent_at && (
                            <p>Sent: {new Date(contract.sent_at).toLocaleDateString()}</p>
                          )}
                          {contract.signed_at && (
                            <p>Signed: {new Date(contract.signed_at).toLocaleDateString()}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/contracts/${contract.id}`)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        {contract.status === 'draft' && (
                          <Button
                            size="sm"
                            onClick={() => navigate(`/contracts/${contract.id}/send`)}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}