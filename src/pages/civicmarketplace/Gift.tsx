import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PinProtection from '@/components/PinProtection';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Mail, Check, Phone, HelpCircle, Download, LogIn, Loader2 } from 'lucide-react';

type Step = 'email' | 'otp' | 'form' | 'result';

interface FormData {
  entity_type: string;
  primary_name: string;
  secondary_name: string;
  region: string;
  phone_area_code: string;
  specialization: string;
  website: string;
  provision_kb: boolean;
  enhanced_crawl: boolean;
  crawl_max_pages: number;
  crawl_max_depth: number;
}

const ENTITY_TYPES = [
  { value: 'municipal', label: 'Municipal - General municipal services' },
  { value: 'civic_general', label: 'Civic General - City services routing' },
  { value: 'civic_utilities', label: 'Civic Utilities - Water, power, waste services' },
  { value: 'civic_safety', label: 'Civic Safety - Police, fire, emergency info' },
  { value: 'civic_permits', label: 'Civic Permits - Building permits and licenses' },
  { value: 'civic_recreation', label: 'Civic Recreation - Parks and recreation' },
  { value: 'civic_orchestrator', label: 'Civic Orchestrator - Main city assistant/router' },
  { value: 'corporate', label: 'Corporate - Business departments' },
  { value: 'organizational', label: 'Organizational - Non-profit organizations' },
];

const FIELD_TOOLTIPS: Record<string, string> = {
  entity_type: 'Select the type of organization you\'re provisioning an AI agent for. This determines the agent\'s behavior and responses.',
  primary_name: 'The main name of your entity (e.g., "Austin" for Austin, Texas or "Acme" for Acme Corporation)',
  secondary_name: 'Secondary identifier (e.g., "Travis" for Travis County or "Sales" for Sales Department)',
  region: 'State or geographic region where your entity operates',
  phone_area_code: '3-digit area code for the provisioned phone number (e.g., 512 for Austin, TX)',
  specialization: 'Specific service focus of this agent (e.g., "Water Services", "Building Permits")',
  website: 'URL to scrape for building the agent\'s knowledge base. The agent will use content from this site to answer questions.',
  provision_kb: 'Enable to create a knowledge base from the provided website URL',
  enhanced_crawl: 'Use advanced crawling technology for better content extraction',
  crawl_max_pages: 'Maximum number of pages to crawl from the website (1-50)',
  crawl_max_depth: 'How deep to follow links from the main page (1-5 levels)',
};

const GiftContent = () => {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ phone_number: string; agent_id: string; name: string } | null>(null);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);

  const [formData, setFormData] = useState<FormData>({
    entity_type: 'municipal',
    primary_name: '',
    secondary_name: '',
    region: 'Texas',
    phone_area_code: '',
    specialization: 'General Services',
    website: '',
    provision_kb: false,
    enhanced_crawl: false,
    crawl_max_pages: 10,
    crawl_max_depth: 2,
  });

  const handleSendOtp = async () => {
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-send-otp', {
        body: { email: email.trim() }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast.success('Verification code sent! Please check your email (and spam folder).');
      setStep('otp');
    } catch (error: any) {
      toast.error(error.message || 'Failed to send verification code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim() || otp.length !== 6) {
      toast.error('Please enter a valid 6-digit code');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-verify-otp', {
        body: { email: email.trim(), otp: otp.trim() }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast.success('Email verified successfully!');
      setStep('form');
    } catch (error: any) {
      toast.error(error.message || 'Invalid or expired verification code');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = (): string | null => {
    if (!formData.primary_name.trim()) return 'Primary name is required';
    if (formData.primary_name.length > 100) return 'Primary name must be 100 characters or less';
    if (!formData.secondary_name.trim()) return 'Secondary name is required';
    if (formData.secondary_name.length > 100) return 'Secondary name must be 100 characters or less';
    if (!formData.phone_area_code.trim()) return 'Phone area code is required';
    if (!/^\d{3}$/.test(formData.phone_area_code)) return 'Phone area code must be exactly 3 digits';
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) return 'Website must be a valid URL starting with http:// or https://';
    if (formData.crawl_max_pages < 1 || formData.crawl_max_pages > 50) return 'Max pages must be between 1 and 50';
    if (formData.crawl_max_depth < 1 || formData.crawl_max_depth > 5) return 'Max depth must be between 1 and 5';
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + Math.random() * 15, 90));
    }, 500);

    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-provision', {
        body: {
          email: email.trim(),
          formData,
          ipAddress: null, // Could be obtained from a header if needed
          userAgent: navigator.userAgent,
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setResult({
        phone_number: data.phone_number,
        agent_id: data.agent_id,
        name: data.name,
      });
      setStep('result');
      toast.success('Agent provisioned successfully!');
    } catch (error: any) {
      clearInterval(progressInterval);
      setProgress(0);
      toast.error(error.message || 'Failed to provision agent');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminLogin = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'login', email: adminEmail, password: adminPassword }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setIsAdminAuthenticated(true);
      toast.success('Admin login successful');

      // Fetch logs
      const logsResponse = await supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'getLogs', email: adminEmail, password: adminPassword }
      });

      if (logsResponse.data?.logs) {
        setLogs(logsResponse.data.logs);
      }
    } catch (error: any) {
      toast.error(error.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (logs.length === 0) {
      toast.error('No data to export');
      return;
    }

    const headers = [
      'Date', 'Email', 'Entity Type', 'Primary Name', 'Secondary Name', 
      'Region', 'Area Code', 'Specialization', 'Website', 'Phone Number', 
      'Agent ID', 'Status'
    ];

    const rows = logs.map(log => [
      new Date(log.created_at).toLocaleString(),
      log.email,
      log.entity_type,
      log.primary_name,
      log.secondary_name,
      log.region,
      log.phone_area_code,
      log.specialization,
      log.website || '',
      log.phone_number_returned || '',
      log.agent_id || '',
      log.api_status,
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `civic-gift-logs-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    toast.success('CSV exported successfully');
  };

  const FieldWithTooltip = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={id} className="text-white">{label}</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-gray-800 text-white border-gray-700">
              <p>{FIELD_TOOLTIPS[id]}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0D33] to-black font-sora">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="https://84d297c6-114c-4cb6-a6bc-83e359f1d6cb.lovableproject.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png" 
              alt="WhitegloveAI" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-2">
              Civic AI Gift Program
            </h1>
            <p className="text-gray-400">
              Provision your complimentary AI agent for civic services
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <AnimatePresence mode="wait">
              {/* Step 1: Email */}
              {step === 'email' && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-white">Verify Your Email</h2>
                    <p className="text-gray-400 text-sm mt-2">
                      Please use a business email address to continue
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Business Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.gov"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <Button
                      onClick={handleSendOtp}
                      disabled={isLoading}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Mail className="h-4 w-4 mr-2" />
                      )}
                      Send Verification Code
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: OTP */}
              {step === 'otp' && (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <Check className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-white">Enter Verification Code</h2>
                    <p className="text-gray-400 text-sm mt-2">
                      We sent a 6-digit code to <span className="text-purple-400">{email}</span>
                    </p>
                    <p className="text-yellow-400 text-xs mt-2">
                      💡 Don't see it? Check your spam folder!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-white">Verification Code</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="123456"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        className="bg-gray-700/50 border-gray-600 text-white text-center text-2xl tracking-widest placeholder:text-gray-400"
                        maxLength={6}
                      />
                    </div>

                    <Button
                      onClick={handleVerifyOtp}
                      disabled={isLoading || otp.length !== 6}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Check className="h-4 w-4 mr-2" />
                      )}
                      Verify Code
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => setStep('email')}
                      className="w-full text-gray-400 hover:text-white"
                    >
                      Use a different email
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Form */}
              {step === 'form' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-white">Configure Your AI Agent</h2>
                    <p className="text-gray-400 text-sm mt-2">
                      Fill in the details to provision your agent
                    </p>
                  </div>

                  <div className="grid gap-6">
                    <FieldWithTooltip id="entity_type" label="Entity Type *">
                      <Select
                        value={formData.entity_type}
                        onValueChange={(value) => setFormData({ ...formData, entity_type: value })}
                      >
                        <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {ENTITY_TYPES.map((type) => (
                            <SelectItem key={type.value} value={type.value} className="text-white hover:bg-gray-700">
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldWithTooltip>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FieldWithTooltip id="primary_name" label="Primary Name *">
                        <Input
                          id="primary_name"
                          placeholder="e.g., Austin"
                          value={formData.primary_name}
                          onChange={(e) => setFormData({ ...formData, primary_name: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          maxLength={100}
                        />
                      </FieldWithTooltip>

                      <FieldWithTooltip id="secondary_name" label="Secondary Name *">
                        <Input
                          id="secondary_name"
                          placeholder="e.g., Travis"
                          value={formData.secondary_name}
                          onChange={(e) => setFormData({ ...formData, secondary_name: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          maxLength={100}
                        />
                      </FieldWithTooltip>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FieldWithTooltip id="region" label="Region">
                        <Input
                          id="region"
                          placeholder="e.g., Texas"
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          maxLength={100}
                        />
                      </FieldWithTooltip>

                      <FieldWithTooltip id="phone_area_code" label="Phone Area Code *">
                        <Input
                          id="phone_area_code"
                          placeholder="e.g., 512"
                          value={formData.phone_area_code}
                          onChange={(e) => setFormData({ ...formData, phone_area_code: e.target.value.replace(/\D/g, '').slice(0, 3) })}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          maxLength={3}
                        />
                      </FieldWithTooltip>
                    </div>

                    <FieldWithTooltip id="specialization" label="Specialization">
                      <Input
                        id="specialization"
                        placeholder="e.g., General Services"
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        maxLength={200}
                      />
                    </FieldWithTooltip>

                    <FieldWithTooltip id="website" label="Website URL">
                      <Input
                        id="website"
                        placeholder="https://example.gov"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </FieldWithTooltip>

                    <div className="space-y-4 p-4 bg-gray-700/30 rounded-lg">
                      <h3 className="text-white font-medium">Knowledge Base Options</h3>

                      <FieldWithTooltip id="provision_kb" label="Create Knowledge Base">
                        <div className="flex items-center gap-2">
                          <Switch
                            id="provision_kb"
                            checked={formData.provision_kb}
                            onCheckedChange={(checked) => setFormData({ ...formData, provision_kb: checked })}
                          />
                          <span className="text-gray-400 text-sm">
                            {formData.provision_kb ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                      </FieldWithTooltip>

                      {formData.provision_kb && (
                        <>
                          <FieldWithTooltip id="enhanced_crawl" label="Enhanced Crawling">
                            <div className="flex items-center gap-2">
                              <Switch
                                id="enhanced_crawl"
                                checked={formData.enhanced_crawl}
                                onCheckedChange={(checked) => setFormData({ ...formData, enhanced_crawl: checked })}
                              />
                              <span className="text-gray-400 text-sm">
                                {formData.enhanced_crawl ? 'Enabled' : 'Disabled'}
                              </span>
                            </div>
                          </FieldWithTooltip>

                          <div className="grid md:grid-cols-2 gap-4">
                            <FieldWithTooltip id="crawl_max_pages" label="Max Pages (1-50)">
                              <Input
                                id="crawl_max_pages"
                                type="number"
                                min={1}
                                max={50}
                                value={formData.crawl_max_pages}
                                onChange={(e) => setFormData({ ...formData, crawl_max_pages: parseInt(e.target.value) || 10 })}
                                className="bg-gray-700/50 border-gray-600 text-white"
                              />
                            </FieldWithTooltip>

                            <FieldWithTooltip id="crawl_max_depth" label="Max Depth (1-5)">
                              <Input
                                id="crawl_max_depth"
                                type="number"
                                min={1}
                                max={5}
                                value={formData.crawl_max_depth}
                                onChange={(e) => setFormData({ ...formData, crawl_max_depth: parseInt(e.target.value) || 2 })}
                                className="bg-gray-700/50 border-gray-600 text-white"
                              />
                            </FieldWithTooltip>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {isLoading && (
                    <div className="space-y-2">
                      <Progress value={progress} className="h-2" />
                      <p className="text-center text-sm text-gray-400">
                        Provisioning agent... {Math.round(progress)}%
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Phone className="h-4 w-4 mr-2" />
                    )}
                    Provision AI Agent
                  </Button>
                </motion.div>
              )}

              {/* Step 4: Result */}
              {step === 'result' && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Agent Provisioned!</h2>
                    <p className="text-gray-400">
                      Your AI agent "{result.name}" is ready
                    </p>
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-6 space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm">Your Agent Phone Number</p>
                      <p className="text-3xl font-bold text-purple-400 tracking-wide">
                        {result.phone_number}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Agent ID</p>
                      <p className="text-white font-mono text-sm">
                        {result.agent_id}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">
                    Call or text this number to interact with your AI agent
                  </p>

                  <Button
                    variant="outline"
                    onClick={() => setShowAdminLogin(true)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Admin Login
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Admin Login Dialog */}
      <Dialog open={showAdminLogin} onOpenChange={setShowAdminLogin}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-4xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Admin Dashboard</DialogTitle>
            <DialogDescription className="text-gray-400">
              {isAdminAuthenticated ? 'View all agent provisioning activity' : 'Enter admin credentials to continue'}
            </DialogDescription>
          </DialogHeader>

          {!isAdminAuthenticated ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email" className="text-white">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white"
                  placeholder="admin@whitegloveai.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password" className="text-white">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <Button
                onClick={handleAdminLogin}
                disabled={isLoading}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <LogIn className="h-4 w-4 mr-2" />}
                Login
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-400">Total Records: {logs.length}</p>
                <Button onClick={exportToCSV} variant="outline" className="border-gray-600">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-3 py-2 text-left">Date</th>
                      <th className="px-3 py-2 text-left">Email</th>
                      <th className="px-3 py-2 text-left">Entity</th>
                      <th className="px-3 py-2 text-left">Primary</th>
                      <th className="px-3 py-2 text-left">Phone</th>
                      <th className="px-3 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((log) => (
                      <tr key={log.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                        <td className="px-3 py-2 text-gray-300">{new Date(log.created_at).toLocaleDateString()}</td>
                        <td className="px-3 py-2 text-gray-300">{log.email}</td>
                        <td className="px-3 py-2 text-gray-300">{log.entity_type}</td>
                        <td className="px-3 py-2 text-gray-300">{log.primary_name}</td>
                        <td className="px-3 py-2 text-purple-400">{log.phone_number_returned || '-'}</td>
                        <td className="px-3 py-2">
                          <span className={`px-2 py-1 rounded text-xs ${log.api_status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {log.api_status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {logs.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-3 py-8 text-center text-gray-400">
                          No records found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Gift = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <PinProtection
        onSuccess={() => setIsAuthenticated(true)}
        title="Civic AI Gift Program"
        description="This page is protected. Please enter the PIN to continue."
      />
    );
  }

  return <GiftContent />;
};

export default Gift;
