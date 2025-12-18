import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PinProtection from '@/components/PinProtection';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Mail, Check, Phone, HelpCircle, Download, LogIn, Loader2, Gift as GiftIcon, Globe, Calendar, ExternalLink, Sparkles, MessageSquare, Users, Clock, Send, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

type Step = 'email' | 'otp' | 'form' | 'result';

interface FormData {
  entity_type: string;
  primary_name: string;
  state: string;
  website: string;
  acceptedTerms: boolean;
  first_name: string;
  last_name: string;
  title: string;
}

interface LogRecord {
  id: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  title: string | null;
  email: string;
  entity_type: string;
  primary_name: string;
  region: string | null;
  website: string | null;
  phone_number_returned: string | null;
  agent_id: string | null;
  api_status: string;
  status: string;
  processed_at: string | null;
  processed_by: string | null;
  denial_reason: string | null;
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
  website: 'URL to scrape for building the agent\'s knowledge base. The agent will use content from this site to answer questions.',
};

// Format phone number as +1 000-000-0000
const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1 ${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 ${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
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
  const location = useLocation();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Auto-open admin login if accessing via /admin route
  useEffect(() => {
    if (location.pathname.endsWith('/admin')) {
      setShowAdminLogin(true);
    }
  }, [location.pathname]);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [logs, setLogs] = useState<LogRecord[]>([]);
  const [pendingRequests, setPendingRequests] = useState<LogRecord[]>([]);
  const [approvedRequests, setApprovedRequests] = useState<LogRecord[]>([]);
  const [deniedRequests, setDeniedRequests] = useState<LogRecord[]>([]);
  const [adminTab, setAdminTab] = useState('pending');
  const [processingId, setProcessingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    entity_type: 'municipal',
    primary_name: '',
    state: 'Texas',
    website: '',
    acceptedTerms: false,
    first_name: '',
    last_name: '',
    title: '',
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
    if (!formData.first_name.trim()) return 'First name is required';
    if (!formData.last_name.trim()) return 'Last name is required';
    if (!formData.primary_name.trim()) return 'Entity name is required';
    if (formData.primary_name.length > 100) return 'Entity name must be 100 characters or less';
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) return 'Website must be a valid URL starting with http:// or https://';
    if (!formData.acceptedTerms) return 'You must accept the Terms and Conditions and Privacy Policy';
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-provision', {
        body: {
          email: email.trim(),
          formData,
          ipAddress: null,
          userAgent: navigator.userAgent,
        }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setStep('result');
      toast.success('Request submitted successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit request');
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

      // Fetch all data
      await refreshAdminData();
    } catch (error: any) {
      toast.error(error.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshAdminData = async () => {
    const [logsRes, pendingRes, approvedRes, deniedRes] = await Promise.all([
      supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'getLogs', email: adminEmail, password: adminPassword }
      }),
      supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'getPendingRequests', email: adminEmail, password: adminPassword }
      }),
      supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'getApprovedRequests', email: adminEmail, password: adminPassword }
      }),
      supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'getDeniedRequests', email: adminEmail, password: adminPassword }
      }),
    ]);

    if (logsRes.data?.logs) setLogs(logsRes.data.logs);
    if (pendingRes.data?.requests) setPendingRequests(pendingRes.data.requests);
    if (approvedRes.data?.requests) setApprovedRequests(approvedRes.data.requests);
    if (deniedRes.data?.requests) setDeniedRequests(deniedRes.data.requests);
  };

  const handleApproveRequest = async (requestId: string) => {
    setProcessingId(requestId);
    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'approveRequest', email: adminEmail, password: adminPassword, requestId }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast.success(`Approved! Phone: ${data.phone_number}`);
      await refreshAdminData();
    } catch (error: any) {
      toast.error(error.message || 'Failed to approve request');
    } finally {
      setProcessingId(null);
    }
  };

  const handleDenyRequest = async (requestId: string) => {
    setProcessingId(requestId);
    try {
      const { data, error } = await supabase.functions.invoke('civic-gift-admin', {
        body: { action: 'denyRequest', email: adminEmail, password: adminPassword, requestId }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast.success('Request denied');
      await refreshAdminData();
    } catch (error: any) {
      toast.error(error.message || 'Failed to deny request');
    } finally {
      setProcessingId(null);
    }
  };

  const exportToCSV = () => {
    if (logs.length === 0) {
      toast.error('No data to export');
      return;
    }

    const headers = [
      'Date', 'First Name', 'Last Name', 'Title', 'Email', 'Entity Type', 'Primary Name', 
      'Region', 'Website', 'Phone Number', 'Agent ID', 'Status', 'Processed By', 'Processed At'
    ];

    const rows = logs.map(log => [
      new Date(log.created_at).toLocaleString(),
      log.first_name || '',
      log.last_name || '',
      log.title || '',
      log.email,
      log.entity_type,
      log.primary_name,
      log.region || '',
      log.website || '',
      log.phone_number_returned || '',
      log.agent_id || '',
      log.status || log.api_status,
      log.processed_by || '',
      log.processed_at ? new Date(log.processed_at).toLocaleString() : '',
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="px-2 py-1 rounded text-xs bg-yellow-500/20 text-yellow-400 flex items-center gap-1"><AlertCircle className="h-3 w-3" />Pending</span>;
      case 'approved':
      case 'success':
        return <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400 flex items-center gap-1"><CheckCircle className="h-3 w-3" />Approved</span>;
      case 'denied':
        return <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400 flex items-center gap-1"><XCircle className="h-3 w-3" />Denied</span>;
      case 'failed':
        return <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400 flex items-center gap-1"><XCircle className="h-3 w-3" />Failed</span>;
      default:
        return <span className="px-2 py-1 rounded text-xs bg-gray-500/20 text-gray-400">{status}</span>;
    }
  };

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
              src="https://whitegloveai.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png" 
              alt="WhitegloveAI" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-2">
              Civic Marketplace AI Gift Program
            </h1>
            <p className="text-gray-400">
              Request your complimentary AI agent for civic services
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
                      onClick={handleSendOtp}
                      disabled={isLoading}
                      className="w-full text-gray-400 hover:text-white"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Mail className="h-4 w-4 mr-2" />
                      )}
                      Resend Code
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
                      Fill in the details to submit your request
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first_name" className="text-white">First Name *</Label>
                        <Input
                          id="first_name"
                          placeholder="John"
                          value={formData.first_name}
                          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          maxLength={50}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last_name" className="text-white">Last Name *</Label>
                        <Input
                          id="last_name"
                          placeholder="Smith"
                          value={formData.last_name}
                          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                          maxLength={50}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white">Title <span className="text-gray-400">(optional)</span></Label>
                      <Input
                        id="title"
                        placeholder="e.g., City Manager, IT Director"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        maxLength={100}
                      />
                    </div>

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

                    <FieldWithTooltip id="website" label="Website URL">
                      <Input
                        id="website"
                        placeholder="https://example.gov"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </FieldWithTooltip>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                      <input
                        type="checkbox"
                        id="acceptedTerms"
                        checked={formData.acceptedTerms}
                        onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-gray-500 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="acceptedTerms" className="text-sm text-gray-300">
                        I agree to the{' '}
                        <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                          Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                          Privacy Policy
                        </a>
                        . <span className="text-red-400">*</span>
                      </label>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Send className="h-4 w-4 mr-2" />
                    )}
                    Submit Request
                  </Button>
                </motion.div>
              )}

              {/* Step 4: Request Submitted */}
              {step === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  {/* Success Header */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-10 w-10 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Request Submitted Successfully!</h2>
                    <p className="text-gray-400">Your demo request is being reviewed by our team.</p>
                  </div>

                  {/* What's Next */}
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-400" />
                      What Happens Next?
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 text-sm font-bold flex-shrink-0">1</span>
                        <span>Our team will review your request (typically within <span className="text-yellow-400 font-medium">1 business day</span>)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 text-sm font-bold flex-shrink-0">2</span>
                        <span>Once approved, you'll receive an email with your <span className="text-green-400 font-medium">dedicated AI phone number</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 text-sm font-bold flex-shrink-0">3</span>
                        <span>Start testing your AI Voice Agent immediately—it's already trained on your website!</span>
                      </li>
                    </ul>
                  </div>

                  {/* Partnership Badge */}
                  <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/20 text-center">
                    <p className="text-purple-300 text-sm mb-1">This 30-day demo is brought to you by</p>
                    <p className="text-white font-bold text-lg">Civic Marketplace × WhitegloveAI</p>
                    <p className="text-green-400 text-sm mt-1 flex items-center justify-center gap-1">
                      <Check className="h-4 w-4" />
                      TXShare Approved Vendor • Contract #2025-023
                    </p>
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
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-5xl max-h-[85vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Admin Dashboard</DialogTitle>
            <DialogDescription className="text-gray-400">
              {isAdminAuthenticated ? 'Manage agent provisioning requests' : 'Enter admin credentials to continue'}
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
              <Tabs value={adminTab} onValueChange={setAdminTab}>
                <TabsList className="grid w-full grid-cols-4 bg-gray-700">
                  <TabsTrigger value="pending" className="data-[state=active]:bg-yellow-600">
                    Pending ({pendingRequests.length})
                  </TabsTrigger>
                  <TabsTrigger value="approved" className="data-[state=active]:bg-green-600">
                    Approved ({approvedRequests.length})
                  </TabsTrigger>
                  <TabsTrigger value="denied" className="data-[state=active]:bg-red-600">
                    Denied ({deniedRequests.length})
                  </TabsTrigger>
                  <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
                    All Logs ({logs.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 text-left">Date</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Email</th>
                          <th className="px-3 py-2 text-left">Entity</th>
                          <th className="px-3 py-2 text-left">Website</th>
                          <th className="px-3 py-2 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingRequests.map((req) => (
                          <tr key={req.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                            <td className="px-3 py-2 text-gray-300">{new Date(req.created_at).toLocaleDateString()}</td>
                            <td className="px-3 py-2 text-gray-300">{req.first_name} {req.last_name}</td>
                            <td className="px-3 py-2 text-gray-300">{req.email}</td>
                            <td className="px-3 py-2 text-gray-300">{req.primary_name}</td>
                            <td className="px-3 py-2 text-gray-300 truncate max-w-[150px]">{req.website || '-'}</td>
                            <td className="px-3 py-2 flex gap-2">
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handleApproveRequest(req.id)}
                                disabled={processingId === req.id}
                              >
                                {processingId === req.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3" />}
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDenyRequest(req.id)}
                                disabled={processingId === req.id}
                              >
                                <XCircle className="h-3 w-3" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                        {pendingRequests.length === 0 && (
                          <tr>
                            <td colSpan={6} className="px-3 py-8 text-center text-gray-400">
                              No pending requests
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="approved" className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 text-left">Date</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Email</th>
                          <th className="px-3 py-2 text-left">Entity</th>
                          <th className="px-3 py-2 text-left">Phone</th>
                          <th className="px-3 py-2 text-left">Approved By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {approvedRequests.map((req) => (
                          <tr key={req.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                            <td className="px-3 py-2 text-gray-300">{new Date(req.created_at).toLocaleDateString()}</td>
                            <td className="px-3 py-2 text-gray-300">{req.first_name} {req.last_name}</td>
                            <td className="px-3 py-2 text-gray-300">{req.email}</td>
                            <td className="px-3 py-2 text-gray-300">{req.primary_name}</td>
                            <td className="px-3 py-2 text-purple-400">{req.phone_number_returned ? formatPhoneNumber(req.phone_number_returned) : '-'}</td>
                            <td className="px-3 py-2 text-gray-400 text-xs">{req.processed_by || '-'}</td>
                          </tr>
                        ))}
                        {approvedRequests.length === 0 && (
                          <tr>
                            <td colSpan={6} className="px-3 py-8 text-center text-gray-400">
                              No approved requests
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="denied" className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 text-left">Date</th>
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Email</th>
                          <th className="px-3 py-2 text-left">Entity</th>
                          <th className="px-3 py-2 text-left">Denied By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deniedRequests.map((req) => (
                          <tr key={req.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                            <td className="px-3 py-2 text-gray-300">{new Date(req.created_at).toLocaleDateString()}</td>
                            <td className="px-3 py-2 text-gray-300">{req.first_name} {req.last_name}</td>
                            <td className="px-3 py-2 text-gray-300">{req.email}</td>
                            <td className="px-3 py-2 text-gray-300">{req.primary_name}</td>
                            <td className="px-3 py-2 text-gray-400 text-xs">{req.processed_by || '-'}</td>
                          </tr>
                        ))}
                        {deniedRequests.length === 0 && (
                          <tr>
                            <td colSpan={5} className="px-3 py-8 text-center text-gray-400">
                              No denied requests
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="all" className="space-y-4">
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
                          <th className="px-3 py-2 text-left">Name</th>
                          <th className="px-3 py-2 text-left">Email</th>
                          <th className="px-3 py-2 text-left">Entity</th>
                          <th className="px-3 py-2 text-left">Phone</th>
                          <th className="px-3 py-2 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {logs.map((log) => (
                          <tr key={log.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                            <td className="px-3 py-2 text-gray-300">{new Date(log.created_at).toLocaleDateString()}</td>
                            <td className="px-3 py-2 text-gray-300">{log.first_name && log.last_name ? `${log.first_name} ${log.last_name}` : '-'}</td>
                            <td className="px-3 py-2 text-gray-300">{log.email}</td>
                            <td className="px-3 py-2 text-gray-300">{log.primary_name}</td>
                            <td className="px-3 py-2 text-purple-400">{log.phone_number_returned ? formatPhoneNumber(log.phone_number_returned) : '-'}</td>
                            <td className="px-3 py-2">
                              {getStatusBadge(log.status || log.api_status)}
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
                </TabsContent>
              </Tabs>
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
