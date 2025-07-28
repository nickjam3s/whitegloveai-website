import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Loader2, 
  Wand2, 
  Eye, 
  Upload,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { usePortalAuth } from '@/hooks/usePortalAuth';
import { supabase } from '@/integrations/supabase/client';

interface GeneratedFlow {
  name: string;
  description: string;
  nodes: Array<{
    id: string;
    type: string;
    prompt: string;
    transitions?: Array<{
      condition: string;
      target: string;
    }>;
  }>;
  variables?: Array<{
    name: string;
    type: string;
    description: string;
  }>;
}

export default function AgentBuilder() {
  const { user } = usePortalAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [generatedFlow, setGeneratedFlow] = useState<GeneratedFlow | null>(null);
  
  // Form fields
  const [useCase, setUseCase] = useState('');
  const [purpose, setPurpose] = useState('');
  const [clientInfo, setClientInfo] = useState('');
  const [requirements, setRequirements] = useState('');

  const generateFlow = async () => {
    if (!useCase.trim() || !purpose.trim()) {
      setError('Please fill in at least the use case and purpose fields');
      return;
    }

    try {
      setIsGenerating(true);
      setError(null);
      setSuccess(null);

      console.log('Generating agent flow...');
      const { data, error } = await supabase.functions.invoke('generate-agent-flow', {
        headers: { 'x-user-email': user!.email },
        body: {
          useCase: useCase.trim(),
          purpose: purpose.trim(),
          clientInfo: clientInfo.trim(),
          requirements: requirements.trim()
        }
      });

      if (error) {
        console.error('Generation error:', error);
        throw new Error(error.message || 'Failed to generate flow');
      }

      if (data?.error) {
        console.error('API error:', data.error);
        throw new Error(data.error);
      }

      setGeneratedFlow(data.flow);
      setSuccess('Agent flow generated successfully! Review and deploy when ready.');
    } catch (err: any) {
      console.error('Generate flow error:', err);
      setError(`Failed to generate flow: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const deployFlow = async () => {
    if (!generatedFlow) return;

    try {
      setIsDeploying(true);
      setError(null);

      console.log('Deploying conversation flow...');
      const { data, error } = await supabase.functions.invoke('portal-retell-api', {
        headers: { 'x-user-email': user!.email },
        body: {
          operation: 'create_flow',
          flowData: generatedFlow
        }
      });

      if (error) {
        console.error('Deployment error:', error);
        throw new Error(error.message || 'Failed to deploy flow');
      }

      if (data?.error) {
        console.error('API error:', data.error);
        throw new Error(data.error);
      }

      setSuccess(`Flow "${generatedFlow.name}" deployed successfully to Retell AI!`);
      
      // Reset form after successful deployment
      setUseCase('');
      setPurpose('');
      setClientInfo('');
      setRequirements('');
      setGeneratedFlow(null);
    } catch (err: any) {
      console.error('Deploy flow error:', err);
      setError(`Failed to deploy flow: ${err.message}`);
    } finally {
      setIsDeploying(false);
    }
  };

  const clearForm = () => {
    setUseCase('');
    setPurpose('');
    setClientInfo('');
    setRequirements('');
    setGeneratedFlow(null);
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            AI Agent Builder
          </CardTitle>
          <CardDescription>
            Use AI to generate sophisticated conversation flows for Retell agents. 
            Describe your use case and let AI build the multi-prompt flow for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!generatedFlow ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="use-case">Use Case *</Label>
                  <Input
                    id="use-case"
                    placeholder="e.g., Lead qualification, Customer support, Appointment booking"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="purpose">Purpose *</Label>
                  <Input
                    id="purpose"
                    placeholder="e.g., Qualify leads for solar installation services"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="client-info">Client Information</Label>
                <Textarea
                  id="client-info"
                  placeholder="Describe the client's business, industry, target audience, and any specific requirements..."
                  value={clientInfo}
                  onChange={(e) => setClientInfo(e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Any specific conversation flows, data collection needs, integrations, or special instructions..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={generateFlow}
                  disabled={isGenerating || !useCase.trim() || !purpose.trim()}
                  className="flex items-center gap-2"
                >
                  {isGenerating ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Wand2 className="w-4 h-4" />
                  )}
                  {isGenerating ? 'Generating Flow...' : 'Generate AI Flow'}
                </Button>
                
                <Button variant="outline" onClick={clearForm}>
                  Clear Form
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Generated Flow Preview</h3>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setGeneratedFlow(null)}>
                    <Eye className="w-4 h-4 mr-2" />
                    Edit Requirements
                  </Button>
                  <Button 
                    onClick={deployFlow}
                    disabled={isDeploying}
                    className="flex items-center gap-2"
                  >
                    {isDeploying ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )}
                    {isDeploying ? 'Deploying...' : 'Deploy to Retell'}
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Agent Name</h4>
                      <p className="font-semibold">{generatedFlow.name}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Description</h4>
                      <p className="text-sm">{generatedFlow.description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">
                        Conversation Nodes ({generatedFlow.nodes?.length || 0})
                      </h4>
                      <div className="space-y-2">
                        {generatedFlow.nodes?.map((node, index) => (
                          <div key={node.id} className="p-3 bg-muted rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {node.type}
                              </Badge>
                              <span className="text-sm font-medium">{node.id}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {node.prompt.substring(0, 150)}
                              {node.prompt.length > 150 ? '...' : ''}
                            </p>
                            {node.transitions && node.transitions.length > 0 && (
                              <div className="mt-2">
                                <span className="text-xs text-muted-foreground">
                                  → {node.transitions.length} transition(s)
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {generatedFlow.variables && generatedFlow.variables.length > 0 && (
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-2">
                          Dynamic Variables ({generatedFlow.variables.length})
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {generatedFlow.variables.map((variable, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {variable.name}: {variable.type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}