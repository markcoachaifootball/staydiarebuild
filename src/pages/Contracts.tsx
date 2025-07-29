import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, Clock, CheckCircle, XCircle, LogOut } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Contract {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_company: string;
  status: string;
  created_at: string;
  signed_at: string | null;
  expires_at: string | null;
}

const Contracts = () => {
  useScrollToTop();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const { data, error } = await supabase
        .from('contracts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContracts(data || []);
    } catch (error) {
      console.error('Error fetching contracts:', error);
      toast({
        title: "Error",
        description: "Failed to load contracts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'draft':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Draft</Badge>;
      case 'sent':
        return <Badge variant="outline"><FileText className="w-3 h-3 mr-1" />Sent</Badge>;
      case 'signed':
        return <Badge variant="default"><CheckCircle className="w-3 h-3 mr-1" />Signed</Badge>;
      case 'expired':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Expired</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="pt-20">
        <div className="staydia-container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Contract Management</h1>
                <p className="text-staydia-lightgray">
                  Welcome back, {user?.user_metadata?.first_name || user?.email}
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild className="bg-staydia-orange hover:bg-staydia-orange/80">
                  <Link to="/contracts/new">
                    <Plus className="w-4 h-4 mr-2" />
                    New Contract
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut}
                  className="border-staydia-lightgray text-white hover:bg-staydia-gray"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-staydia-darkgray border-staydia-lightgray">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">Total Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-staydia-orange">
                    {contracts.length}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-staydia-darkgray border-staydia-lightgray">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">Signed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">
                    {contracts.filter(c => c.status === 'signed').length}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-staydia-darkgray border-staydia-lightgray">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-500">
                    {contracts.filter(c => c.status === 'sent').length}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-staydia-darkgray border-staydia-lightgray">
              <CardHeader>
                <CardTitle className="text-white">Recent Contracts</CardTitle>
                <CardDescription className="text-staydia-lightgray">
                  Manage your digital contracts and track their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8 text-staydia-lightgray">
                    Loading contracts...
                  </div>
                ) : contracts.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-staydia-lightgray mx-auto mb-4" />
                    <p className="text-staydia-lightgray mb-4">No contracts yet</p>
                    <Button asChild className="bg-staydia-orange hover:bg-staydia-orange/80">
                      <Link to="/contracts/new">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Your First Contract
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contracts.map((contract) => (
                      <div
                        key={contract.id}
                        className="flex items-center justify-between p-4 bg-staydia-gray rounded-lg hover:bg-staydia-gray/80 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white">
                              {contract.customer_name || 'Unnamed Customer'}
                            </h3>
                            {getStatusBadge(contract.status)}
                          </div>
                          <p className="text-sm text-staydia-lightgray">
                            {contract.customer_email}
                            {contract.customer_company && ` • ${contract.customer_company}`}
                          </p>
                          <p className="text-xs text-staydia-lightgray mt-1">
                            Created {new Date(contract.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="border-staydia-lightgray text-white hover:bg-staydia-gray"
                          >
                            <Link to={`/contracts/${contract.id}`}>
                              View
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contracts;