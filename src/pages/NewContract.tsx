import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

interface ContractTemplate {
  id: string;
  name: string;
  content: string;
  terms_and_conditions: string;
}

export default function NewContract() {
  const [session, setSession] = useState<Session | null>(null);
  const [templates, setTemplates] = useState<ContractTemplate[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isLoading, setIsLoading] = useState(false);
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
    if (session) {
      fetchTemplates();
    }
  }, [session]);

  const fetchTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setTemplates(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading templates",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCreateContract = async () => {
    if (!selectedTemplate || !customerData.email.trim()) {
      toast({
        title: "Missing fields",
        description: "Please select a template and enter customer email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30); // 30 days from now

      const { data, error } = await supabase
        .from('contracts')
        .insert([{
          template_id: selectedTemplate,
          customer_email: customerData.email,
          customer_name: customerData.name || null,
          customer_company: customerData.company || null,
          sent_by: session?.user?.id,
          expires_at: expiresAt.toISOString(),
          status: 'draft'
        }])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Contract created",
        description: "Your contract has been created successfully.",
      });

      navigate(`/contracts/${data.id}`);
    } catch (error: any) {
      toast({
        title: "Error creating contract",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/contracts')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Contracts
          </Button>
          <h1 className="text-2xl font-bold">New Contract</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Create New Contract</CardTitle>
              <CardDescription>
                Select a template and enter customer information to create a new contract.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="template-select">Contract Template</Label>
                <Select onValueChange={setSelectedTemplate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a contract template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {templates.length === 0 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    No templates available. <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/contracts/templates')}>Create one first</Button>.
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Customer Information</h3>
                
                <div>
                  <Label htmlFor="customer-email">Email Address *</Label>
                  <Input
                    id="customer-email"
                    type="email"
                    placeholder="customer@example.com"
                    value={customerData.email}
                    onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="customer-name">Full Name</Label>
                  <Input
                    id="customer-name"
                    type="text"
                    placeholder="Customer's full name"
                    value={customerData.name}
                    onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="customer-company">Company Name</Label>
                  <Input
                    id="customer-company"
                    type="text"
                    placeholder="Customer's company"
                    value={customerData.company}
                    onChange={(e) => setCustomerData({ ...customerData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleCreateContract} 
                  disabled={isLoading || !selectedTemplate || !customerData.email.trim()}
                  className="flex-1"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Create Contract
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/contracts')}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}