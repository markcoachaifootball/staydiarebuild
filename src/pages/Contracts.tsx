import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, FileText, Clock, CheckCircle, XCircle, LogOut, Mail, Send, Copy, Trash2, Download } from 'lucide-react';
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
  signing_token: string;
}

const Contracts = () => {
  useScrollToTop();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [emailLoading, setEmailLoading] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [emailForm, setEmailForm] = useState({
    recipientEmail: '',
    recipientName: '',
    message: ''
  });

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

  const handleSendEmail = async (contractId: string) => {
    setEmailLoading(contractId);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contract-email', {
        body: {
          contractId,
          recipientEmail: emailForm.recipientEmail,
          recipientName: emailForm.recipientName,
          message: emailForm.message
        }
      });

      if (error) throw error;

      toast({
        title: "Email sent!",
        description: "Contract signing link has been sent successfully.",
      });

      // Reset form and refresh contracts
      setEmailForm({ recipientEmail: '', recipientName: '', message: '' });
      await fetchContracts();
      
    } catch (error: any) {
      toast({
        title: "Error sending email",
        description: error.message || "Failed to send contract email",
        variant: "destructive",
      });
    } finally {
      setEmailLoading(null);
    }
  };

  const openEmailDialog = (contract: Contract) => {
    setEmailForm({
      recipientEmail: contract.customer_email || '',
      recipientName: contract.customer_name || '',
      message: ''
    });
  };

  const copyContractLink = async (contract: Contract) => {
    const contractUrl = `${window.location.origin}/sign/${contract.signing_token}`;
    
    try {
      await navigator.clipboard.writeText(contractUrl);
      toast({
        title: "Link copied!",
        description: "Contract signing link copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Could not copy link to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDeleteContract = async (contractId: string, contractName: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the contract for "${contractName}"?\n\nThis action cannot be undone.`
    );
    
    if (!confirmed) return;

    setDeleteLoading(contractId);
    
    try {
      const { error } = await supabase
        .from('contracts')
        .delete()
        .eq('id', contractId);

      if (error) throw error;

      toast({
        title: "Contract deleted",
        description: "The draft contract has been permanently deleted.",
      });

      // Refresh contracts list
      await fetchContracts();
      
    } catch (error: any) {
      toast({
        title: "Error deleting contract",
        description: error.message || "Failed to delete contract",
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(null);
    }
  };

  const downloadContractPDF = async (contractId: string, contractName: string) => {
    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;

      if (!token) {
        throw new Error('Not authenticated');
      }

      // Get the Supabase URL and construct the function URL
      const supabaseUrl = 'https://xisvzchvmcqeqtkxoecr.supabase.co';
      const functionUrl = `${supabaseUrl}/functions/v1/download-contract-pdf`;

      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc3Z6Y2h2bWNxZXF0a3hvZWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NzU1MTEsImV4cCI6MjA2ODE1MTUxMX0.OYbyWFSd9ZXcvuZirDmuxrKHAlqZ3Xa-EGGP8CEGn44'
        },
        body: JSON.stringify({ contractId })
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to generate contract document');
      }

      const htmlContent = await response.text();
      
      // Create a new window/tab with the contract content for printing to PDF
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Wait for content to load then trigger print dialog
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
            // Note: User will need to choose "Save as PDF" in the print dialog
          }, 500);
        };
        
        toast({
          title: "Contract Ready",
          description: "Contract opened in new tab. Use browser's print dialog and choose 'Save as PDF'.",
        });
      } else {
        // Fallback: download as HTML file
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${contractName}_Contract.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast({
          title: "Contract Downloaded",
          description: "Contract downloaded as HTML. Open in browser and use print to save as PDF.",
        });
      }
    } catch (error: any) {
      console.error('Download error:', error);
      toast({
        title: "Download failed", 
        description: error.message || "Failed to download contract",
        variant: "destructive",
      });
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
                <Button asChild variant="outline" className="border-staydia-orange text-staydia-orange hover:bg-staydia-orange hover:text-white">
                  <Link to="/contracts/templates">
                    <FileText className="w-4 h-4 mr-2" />
                    Manage Templates
                  </Link>
                </Button>
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
                          {(contract.status === 'draft' || contract.status === 'sent') && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyContractLink(contract)}
                                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy Link
                              </Button>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openEmailDialog(contract)}
                                    className="border-staydia-orange text-staydia-orange hover:bg-staydia-orange hover:text-white"
                                    disabled={emailLoading === contract.id}
                                  >
                                    {emailLoading === contract.id ? (
                                      <>
                                        <Send className="w-3 h-3 mr-1 animate-spin" />
                                        Sending...
                                      </>
                                    ) : (
                                      <>
                                        <Mail className="w-3 h-3 mr-1" />
                                        Send Link
                                      </>
                                    )}
                                  </Button>
                                </DialogTrigger>
                              <DialogContent className="bg-staydia-darkgray border-staydia-lightgray">
                                <DialogHeader>
                                  <DialogTitle className="text-white">Send Contract Signing Link</DialogTitle>
                                  <DialogDescription className="text-staydia-lightgray">
                                    Send a secure signing link to the client via email.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label htmlFor="recipient-email" className="text-white">Email Address</Label>
                                    <Input
                                      id="recipient-email"
                                      type="email"
                                      value={emailForm.recipientEmail}
                                      onChange={(e) => setEmailForm(prev => ({ ...prev, recipientEmail: e.target.value }))}
                                      placeholder="Enter recipient's email"
                                      className="bg-staydia-gray border-staydia-lightgray text-white"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="recipient-name" className="text-white">Name (Optional)</Label>
                                    <Input
                                      id="recipient-name"
                                      value={emailForm.recipientName}
                                      onChange={(e) => setEmailForm(prev => ({ ...prev, recipientName: e.target.value }))}
                                      placeholder="Enter recipient's name"
                                      className="bg-staydia-gray border-staydia-lightgray text-white"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="message" className="text-white">Personal Message (Optional)</Label>
                                    <Textarea
                                      id="message"
                                      value={emailForm.message}
                                      onChange={(e) => setEmailForm(prev => ({ ...prev, message: e.target.value }))}
                                      placeholder="Add a personal message to include in the email..."
                                      className="bg-staydia-gray border-staydia-lightgray text-white"
                                      rows={3}
                                    />
                                  </div>
                                  <Button
                                    onClick={() => handleSendEmail(contract.id)}
                                    disabled={!emailForm.recipientEmail || emailLoading === contract.id}
                                    className="w-full bg-staydia-orange hover:bg-staydia-orange/80"
                                  >
                                    {emailLoading === contract.id ? (
                                      <>
                                        <Send className="w-4 h-4 mr-2 animate-spin" />
                                        Sending Email...
                                      </>
                                    ) : (
                                      <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Contract Link
                                      </>
                                    )}
                                  </Button>
                                </div>
                                </DialogContent>
                              </Dialog>
                            </>
                          )}
                          {contract.status === 'draft' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteContract(contract.id, contract.customer_name || 'Unnamed Customer')}
                              disabled={deleteLoading === contract.id}
                              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                            >
                              {deleteLoading === contract.id ? (
                                <>
                                  <Trash2 className="w-3 h-3 mr-1 animate-spin" />
                                  Deleting...
                                </>
                              ) : (
                                <>
                                  <Trash2 className="w-3 h-3 mr-1" />
                                  Delete
                                </>
                              )}
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadContractPDF(contract.id, contract.customer_name || 'Contract')}
                            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            PDF
                          </Button>
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