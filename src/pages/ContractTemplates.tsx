import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Edit, Trash2, Upload, FileText, Download } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

interface ContractTemplate {
  id: string;
  name: string;
  content: string;
  terms_and_conditions: string;
  created_at: string;
  template_file_url?: string;
  template_file_name?: string;
  terms_file_url?: string;
  terms_file_name?: string;
}

export default function ContractTemplates() {
  const [session, setSession] = useState<Session | null>(null);
  const [templates, setTemplates] = useState<ContractTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<ContractTemplate | null>(null);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    content: '',
    terms_and_conditions: ''
  });
  const [templateFile, setTemplateFile] = useState<File | null>(null);
  const [termsFile, setTermsFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const templateFileRef = useRef<HTMLInputElement>(null);
  const termsFileRef = useRef<HTMLInputElement>(null);
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
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading templates",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const uploadFile = async (file: File, fileType: 'template' | 'terms'): Promise<{ url: string; name: string } | null> => {
    if (!session?.user?.id) return null;

    const fileExt = file.name.split('.').pop();
    const fileName = `${session.user.id}/${fileType}_${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('contract-documents')
      .upload(fileName, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('contract-documents')
      .getPublicUrl(fileName);

    return { url: publicUrl, name: file.name };
  };

  const handleSaveTemplate = async () => {
    if (!newTemplate.name.trim() && !templateFile) {
      toast({
        title: "Missing fields",
        description: "Please provide either a template name with content or upload a template file.",
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);
      let templateFileData = null;
      let termsFileData = null;

      // Upload template file if provided
      if (templateFile) {
        templateFileData = await uploadFile(templateFile, 'template');
      }

      // Upload terms file if provided
      if (termsFile) {
        termsFileData = await uploadFile(termsFile, 'terms');
      }

      const templateData = {
        ...newTemplate,
        created_by: session?.user?.id,
        template_file_url: templateFileData?.url,
        template_file_name: templateFileData?.name,
        terms_file_url: termsFileData?.url,
        terms_file_name: termsFileData?.name,
      };

      const { error } = await supabase
        .from('contract_templates')
        .insert([templateData]);

      if (error) throw error;

      toast({
        title: "Template created",
        description: "Your contract template has been saved successfully.",
      });

      setNewTemplate({ name: '', content: '', terms_and_conditions: '' });
      setTemplateFile(null);
      setTermsFile(null);
      setIsCreating(false);
      fetchTemplates();
    } catch (error: any) {
      toast({
        title: "Error saving template",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateTemplate = async () => {
    if (!editingTemplate || !editingTemplate.name.trim() || !editingTemplate.content.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in the template name and content.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('contract_templates')
        .update({
          name: editingTemplate.name,
          content: editingTemplate.content,
          terms_and_conditions: editingTemplate.terms_and_conditions
        })
        .eq('id', editingTemplate.id);

      if (error) throw error;

      toast({
        title: "Template updated",
        description: "Your contract template has been updated successfully.",
      });

      setEditingTemplate(null);
      fetchTemplates();
    } catch (error: any) {
      toast({
        title: "Error updating template",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteTemplate = async (templateId: string) => {
    try {
      const { error } = await supabase
        .from('contract_templates')
        .update({ is_active: false })
        .eq('id', templateId);

      if (error) throw error;

      toast({
        title: "Template deleted",
        description: "The template has been removed.",
      });

      fetchTemplates();
    } catch (error: any) {
      toast({
        title: "Error deleting template",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading templates...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/contracts')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Contracts
            </Button>
            <h1 className="text-2xl font-bold">Contract Templates</h1>
          </div>
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isCreating && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Template</CardTitle>
              <CardDescription>
                Create a reusable contract template with merge fields like {"{customer_name}"} and {"{customer_email}"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="template-name">Template Name</Label>
                <Input
                  id="template-name"
                  placeholder="e.g., Standard Service Agreement"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="template-content">Contract Content (Optional if uploading file)</Label>
                <Textarea
                  id="template-content"
                  placeholder="Enter your contract content here. Use {customer_name}, {customer_email}, {customer_company} for dynamic fields..."
                  className="min-h-[200px]"
                  value={newTemplate.content}
                  onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
                />
              </div>
              
              <div>
                <Label>Upload Contract Template (PDF/Word)</Label>
                <div className="space-y-2">
                  <Input
                    ref={templateFileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setTemplateFile(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => templateFileRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {templateFile ? templateFile.name : 'Choose Template File'}
                  </Button>
                  {templateFile && (
                    <p className="text-sm text-muted-foreground">
                      <FileText className="h-4 w-4 inline mr-1" />
                      {templateFile.name} ({(templateFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="terms-conditions">Terms & Conditions (Optional if uploading file)</Label>
                <Textarea
                  id="terms-conditions"
                  placeholder="Enter terms and conditions that will require checkbox acceptance..."
                  className="min-h-[150px]"
                  value={newTemplate.terms_and_conditions}
                  onChange={(e) => setNewTemplate({ ...newTemplate, terms_and_conditions: e.target.value })}
                />
              </div>

              <div>
                <Label>Upload Terms & Conditions (PDF/Word)</Label>
                <div className="space-y-2">
                  <Input
                    ref={termsFileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setTermsFile(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => termsFileRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {termsFile ? termsFile.name : 'Choose Terms & Conditions File'}
                  </Button>
                  {termsFile && (
                    <p className="text-sm text-muted-foreground">
                      <FileText className="h-4 w-4 inline mr-1" />
                      {termsFile.name} ({(termsFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSaveTemplate} disabled={uploading}>
                  <Save className="h-4 w-4 mr-2" />
                  {uploading ? 'Saving...' : 'Save Template'}
                </Button>
                <Button variant="outline" onClick={() => {
                  setIsCreating(false);
                  setTemplateFile(null);
                  setTermsFile(null);
                  setNewTemplate({ name: '', content: '', terms_and_conditions: '' });
                }}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {editingTemplate && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Edit Template</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="edit-template-name">Template Name</Label>
                <Input
                  id="edit-template-name"
                  value={editingTemplate.name}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-template-content">Contract Content</Label>
                <Textarea
                  id="edit-template-content"
                  className="min-h-[300px]"
                  value={editingTemplate.content}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, content: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-terms-conditions">Terms & Conditions</Label>
                <Textarea
                  id="edit-terms-conditions"
                  className="min-h-[150px]"
                  value={editingTemplate.terms_and_conditions}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, terms_and_conditions: e.target.value })}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleUpdateTemplate}>
                  <Save className="h-4 w-4 mr-2" />
                  Update Template
                </Button>
                <Button variant="outline" onClick={() => setEditingTemplate(null)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Existing Templates</h2>
          {templates.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground mb-4">No templates created yet.</p>
                <Button onClick={() => setIsCreating(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Template
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {templates.map((template) => (
                <Card key={template.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Created: {new Date(template.created_at).toLocaleDateString()}
                        </p>
                        {template.template_file_name ? (
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p className="flex items-center">
                              <FileText className="h-4 w-4 mr-1" />
                              Template: {template.template_file_name}
                            </p>
                            {template.terms_file_name && (
                              <p className="flex items-center">
                                <FileText className="h-4 w-4 mr-1" />
                                Terms: {template.terms_file_name}
                              </p>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {template.content.substring(0, 200)}...
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {template.template_file_url && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(template.template_file_url, '_blank')}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingTemplate(template)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteTemplate(template.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}