import React, { useState, useEffect } from 'react';
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
import { Mail, Check, Phone, HelpCircle, Download, LogIn, Loader2, Gift as GiftIcon, Globe, Calendar, Copy, ExternalLink, Sparkles, MessageSquare, Users, Clock } from 'lucide-react';

type Step = 'email' | 'otp' | 'form' | 'result';

interface FormData {
  entity_type: string;
  primary_name: string;
  state: string;
  phone_area_code: string;
  website: string;
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
  { value: 'school', label: 'School - Educational institution services' },
  { value: 'county_government', label: 'County Government - County records, courts, and permits' },
  { value: 'state_government', label: 'State Government - Licenses, benefits, and regulations' },
];

const US_STATES = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'Arizona', label: 'Arizona' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'California', label: 'California' },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Connecticut', label: 'Connecticut' },
  { value: 'Delaware', label: 'Delaware' },
  { value: 'Florida', label: 'Florida' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Hawaii', label: 'Hawaii' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Indiana', label: 'Indiana' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Maine', label: 'Maine' },
  { value: 'Maryland', label: 'Maryland' },
  { value: 'Massachusetts', label: 'Massachusetts' },
  { value: 'Michigan', label: 'Michigan' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Montana', label: 'Montana' },
  { value: 'Nebraska', label: 'Nebraska' },
  { value: 'Nevada', label: 'Nevada' },
  { value: 'New Hampshire', label: 'New Hampshire' },
  { value: 'New Jersey', label: 'New Jersey' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'New York', label: 'New York' },
  { value: 'North Carolina', label: 'North Carolina' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Ohio', label: 'Ohio' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'Oregon', label: 'Oregon' },
  { value: 'Pennsylvania', label: 'Pennsylvania' },
  { value: 'Rhode Island', label: 'Rhode Island' },
  { value: 'South Carolina', label: 'South Carolina' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Vermont', label: 'Vermont' },
  { value: 'Virginia', label: 'Virginia' },
  { value: 'Washington', label: 'Washington' },
  { value: 'West Virginia', label: 'West Virginia' },
  { value: 'Wisconsin', label: 'Wisconsin' },
  { value: 'Wyoming', label: 'Wyoming' },
];

const FIELD_TOOLTIPS: Record<string, string> = {
  entity_type: 'Select the type of organization you\'re provisioning an AI agent for. This determines the agent\'s behavior and responses.',
  primary_name: 'The name of your organization or entity (e.g., "City of Austin", "Travis County", "Acme Corporation")',
  state: 'Select the state where your entity operates',
  phone_area_code: '3-digit area code for the provisioned phone number (e.g., 512 for Austin, TX)',
  website: 'URL to scrape for building the agent\'s knowledge base. The agent will use content from this site to answer questions.',
};

const CALENDAR_LINK = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ06roEHldr-EaUSD3PSphSeCF8OVWb3NzT5PjfDxwMMpLfZX2v15Dzk4Bj02xtMwXVZMxHv2mkN";
const VOICE_AI_LINK = "/communications-ai/voice-ai";

// FieldWithTooltip defined outside component to prevent focus loss on re-render
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

// HubSpot form embed component
const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: 'na2',
          portalId: '242996761',
          formId: 'c5c1e3a2-eebe-4d65-8368-03c02ebac2b0',
          target: '#hubspot-form-civic',
          onFormReady: (form: HTMLFormElement) => {
            // Pre-check "Managed AI Services" checkbox if available
            const checkboxes = form.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox: any) => {
              if (checkbox.value?.toLowerCase().includes('managed') || 
                  checkbox.name?.toLowerCase().includes('managed')) {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event('change', { bubbles: true }));
              }
            });
          }
        });
      }
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspot-form-civic" className="hubspot-form-container" />;
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
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    entity_type: 'municipal',
    primary_name: '',
    state: 'Texas',
    phone_area_code: '',
    website: '',
  });
  const [additionalEmails, setAdditionalEmails] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

  const copyPhoneNumber = () => {
    if (result?.phone_number) {
      navigator.clipboard.writeText(result.phone_number);
      setCopied(true);
      toast.success('Phone number copied!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
    if (!formData.primary_name.trim()) return 'Entity name is required';
    if (formData.primary_name.length > 100) return 'Entity name must be 100 characters or less';
    if (!formData.phone_area_code.trim()) return 'Phone area code is required';
    if (!/^\d{3}$/.test(formData.phone_area_code)) return 'Phone area code must be exactly 3 digits';
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) return 'Website must be a valid URL starting with http:// or https://';
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

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + Math.random() * 15, 90));
    }, 500);

    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-provision', {
        body: {
          email: email.trim(),
          formData,
          ipAddress: null,
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

  // FieldWithTooltip moved outside component to prevent focus loss

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0D33] to-black font-sora pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="https://84d297c6-114c-4cb6-a6bc-83e359f1d6cb.lovableproject.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png" 
              alt="WhitegloveAI" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-2">
              Civic Marketplace AI Gift Program
            </h1>
            <p className="text-gray-400">
              Provision your complimentary AI agent for civic services
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <AnimatePresence mode="wait">
              {/* Step 1: Email with Intro */}
              {step === 'email' && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Intro Section */}
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <GiftIcon className="h-6 w-6 text-purple-400" />
                      </div>
                      <h2 className="text-xl font-bold text-white">Your Exclusive AI Voice Agent Gift</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      <span className="text-purple-400 font-semibold">Civic Marketplace</span>, in partnership with{' '}
                      <span className="text-purple-400 font-semibold">WhitegloveAI</span>—a verified{' '}
                      <span className="text-green-400 font-medium">TXShare-approved vendor (Contract #2025-023)</span>—is 
                      providing select government entities with a complimentary <span className="text-yellow-400 font-medium">30-day</span> AI Voice Agent demo.
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-purple-400" />
                        What You'll Receive (30-Day Demo):
                      </h3>
                      <ul className="space-y-2">
                        {[
                          'A dedicated AI-powered phone number that answers calls 24/7',
                          'Natural language understanding that speaks your constituents\' language—literally (supports 50+ languages)',
                          'Instant responses trained on YOUR website\'s information',
                          'Zero wait times, zero hold music, zero frustrated callers'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-400 text-sm mt-6 italic">
                      This is the same enterprise-grade VoiceAI technology trusted by major Texas cities and government agencies, 
                      now available as a 30-day demo to qualifying public sector organizations.
                    </p>
                  </div>

                  {/* Email Form */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <Mail className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                      <h2 className="text-lg font-semibold text-white">Verify Your Government Email</h2>
                      <p className="text-gray-400 text-sm mt-1">
                        Please use a business email address to continue
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Business Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@cityname.gov"
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
                      Don't see it? Check your spam folder!
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

                    <FieldWithTooltip id="primary_name" label="Entity Name *">
                      <Input
                        id="primary_name"
                        placeholder="e.g., City of Austin, Travis County"
                        value={formData.primary_name}
                        onChange={(e) => setFormData({ ...formData, primary_name: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        maxLength={100}
                      />
                    </FieldWithTooltip>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FieldWithTooltip id="state" label="State *">
                        <Select
                          value={formData.state}
                          onValueChange={(value) => setFormData({ ...formData, state: value })}
                        >
                          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 max-h-60">
                            {US_STATES.map((state) => (
                              <SelectItem key={state.value} value={state.value} className="text-white hover:bg-gray-700">
                                {state.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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

                    <FieldWithTooltip id="website" label="Website URL">
                      <Input
                        id="website"
                        placeholder="https://example.gov"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </FieldWithTooltip>
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

              {/* Step 4: Result - Enhanced */}
              {step === 'result' && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  {/* Success Header */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-10 w-10 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Your AI Voice Agent is Live!</h2>
                    <p className="text-gray-400">Agent "{result.name}" is ready to serve your constituents</p>
                    <p className="text-yellow-400 text-sm mt-2 font-medium">Your 30-day demo starts now</p>
                  </div>

                  {/* Partnership Badge */}
                  <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/20 text-center">
                    <p className="text-purple-300 text-sm mb-1">This 30-day demo was brought to you by</p>
                    <p className="text-white font-bold text-lg">Civic Marketplace × WhitegloveAI</p>
                    <p className="text-green-400 text-sm mt-1 flex items-center justify-center gap-1">
                      <Check className="h-4 w-4" />
                      TXShare Approved Vendor • Contract #2025-023
                    </p>
                  </div>

                  {/* Phone Number Box */}
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/10 rounded-xl p-6 border border-purple-500/30">
                    <p className="text-purple-300 text-sm text-center mb-2">Your Agent Phone Number</p>
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-4xl font-bold text-white tracking-wider">
                        {result.phone_number}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyPhoneNumber}
                        className="text-purple-400 hover:text-purple-300"
                      >
                        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </Button>
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-2">Agent ID: {result.agent_id}</p>
                  </div>

                  {/* Send to Additional Emails */}
                  <div className="bg-gray-700/30 rounded-xl p-6 space-y-4">
                    <h3 className="text-white font-bold flex items-center gap-2">
                      <Mail className="h-5 w-5 text-purple-400" />
                      Share This Information with Your Team
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Enter additional email addresses to send the phone number details (comma-separated)
                    </p>
                    <div className="flex gap-3">
                      <Input
                        id="additional_emails"
                        placeholder="colleague@example.gov, team@example.gov"
                        value={additionalEmails}
                        onChange={(e) => setAdditionalEmails(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 flex-1"
                      />
                      <Button
                        onClick={async () => {
                          if (!additionalEmails.trim()) {
                            toast.error('Please enter at least one email address');
                            return;
                          }
                          setSendingEmail(true);
                          try {
                            const { error } = await supabase.functions.invoke('civic-gift-send-phone-number', {
                              body: {
                                email: additionalEmails.trim(),
                                phoneNumber: result.phone_number,
                                agentId: result.agent_id,
                                agentName: result.name,
                              }
                            });
                            if (error) throw error;
                            toast.success('Email sent successfully!');
                            setAdditionalEmails('');
                          } catch (error: any) {
                            toast.error(error.message || 'Failed to send email');
                          } finally {
                            setSendingEmail(false);
                          }
                        }}
                        disabled={sendingEmail}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {sendingEmail ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Mail className="h-4 w-4" />
                        )}
                        <span className="ml-2">Send</span>
                      </Button>
                    </div>
                  </div>

                  {/* Usage Tips */}
                  <div className="bg-gray-700/30 rounded-xl p-6 space-y-4">
                    <h3 className="text-white font-bold flex items-center gap-2">
                      <Phone className="h-5 w-5 text-purple-400" />
                      Try Your Agent Now — Here's What to Ask
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-purple-300 text-sm font-medium mb-2">General Questions:</p>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• "What are your hours of operation?"</li>
                          <li>• "How do I pay my water bill?"</li>
                          <li>• "Where can I find building permit applications?"</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-purple-300 text-sm font-medium mb-2 flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          Test Multilingual Support:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Try asking a question in Spanish, Vietnamese, or any of 50+ languages</li>
                          <li>• The agent adapts to your constituent's preferred language automatically</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-purple-300 text-sm font-medium mb-2">Push the Limits:</p>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Ask about services mentioned on your website</li>
                          <li>• Request directions to your offices</li>
                          <li>• Inquire about upcoming community events</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* VoiceAI Upsell */}
                  <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/20 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="h-6 w-6 text-purple-400" />
                      <h3 className="text-white font-bold text-lg">Want More After Your 30-Day Demo?</h3>
                    </div>

                    <p className="text-gray-300 mb-4">
                      This is just a taste of what's possible. WhitegloveAI's full VoiceAI suite includes:
                    </p>

                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {[
                        { icon: Users, text: 'Unlimited concurrent calls—never miss a constituent' },
                        { icon: MessageSquare, text: 'Website chat integration—same AI, web interface' },
                        { icon: Sparkles, text: 'Custom training on your policies & procedures' },
                        { icon: Clock, text: 'Analytics dashboard for call insights' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <item.icon className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-green-400 text-sm mb-4">
                      All services available through TXShare Contract #2025-023 for streamlined procurement.
                    </p>

                    <a
                      href={VOICE_AI_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Learn More About VoiceAI
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Schedule Call CTA */}
                  <div className="text-center space-y-4 py-4">
                    <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      Schedule a Discovery Call
                    </div>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Ready to explore how AI can transform your constituent services? Schedule a complimentary consultation with Davis Bhagat, Founder of WhitegloveAI.
                    </p>
                    <a
                      href={CALENDAR_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Your Call
                    </a>
                  </div>

                  {/* HubSpot Form */}
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <h3 className="text-white font-bold text-center mb-4">
                      Or submit your interest for a personalized follow-up:
                    </h3>
                    <HubSpotForm />
                  </div>

                  {/* Admin Login */}
                  <div className="text-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={() => setShowAdminLogin(true)}
                      className="text-gray-500 hover:text-gray-300 text-sm"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Admin Login
                    </Button>
                  </div>
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
        title="Civic Marketplace AI Gift Program"
        description="This page is protected. Please enter the PIN to continue."
      />
    );
  }

  return <GiftContent />;
};

export default Gift;
