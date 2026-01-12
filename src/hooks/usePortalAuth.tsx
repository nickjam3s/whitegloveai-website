import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface PortalUser {
  id: string;
  email: string;
  role: 'admin' | 'client';
  is_active: boolean;
  created_at: string;
  last_login?: string;
}

interface PortalAuthContextType {
  user: User | null;
  session: Session | null;
  portalUser: PortalUser | null;
  loading: boolean;
  initError: string | null;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signInWithMagicLink: (email: string) => Promise<{ error: any }>;
  resendConfirmation: (email: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  resetSession: () => Promise<void>;
  isAdmin: boolean;
}

const PortalAuthContext = createContext<PortalAuthContextType | undefined>(undefined);

const AUTH_INIT_TIMEOUT_MS = 6000; // 6 seconds safety timeout

export const PortalAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [portalUser, setPortalUser] = useState<PortalUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const loadingRef = useRef(true);
  const initCompleteRef = useRef(false);

  const fetchPortalUser = async (userEmail: string) => {
    try {
      const { data, error } = await supabase
        .from('portal_users')
        .select('*')
        .eq('email', userEmail)
        .single();

      if (error) {
        console.error('[PortalAuth] Error fetching portal user:', error);
        return null;
      }

      return data;
    } catch (err) {
      console.error('[PortalAuth] Exception fetching portal user:', err);
      return null;
    }
  };

  const setConfigSafe = async (email: string) => {
    // Fire-and-forget with timeout - don't block auth flow
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      await supabase.rpc('set_config', {
        parameter: 'portal.current_user_email',
        value: email
      });
      
      clearTimeout(timeoutId);
    } catch (err) {
      console.warn('[PortalAuth] set_config failed (non-blocking):', err);
    }
  };

  const finishLoading = () => {
    if (loadingRef.current) {
      loadingRef.current = false;
      setLoading(false);
      initCompleteRef.current = true;
      console.info('[PortalAuth] Auth initialization complete');
    }
  };

  useEffect(() => {
    console.info('[PortalAuth] Starting auth initialization...');
    
    // Safety timeout - ensure loading always resolves
    const safetyTimeout = setTimeout(() => {
      if (loadingRef.current) {
        console.warn('[PortalAuth] Auth initialization timed out after', AUTH_INIT_TIMEOUT_MS, 'ms');
        setInitError('Authentication initialization timed out. Please refresh or reset your session.');
        finishLoading();
      }
    }, AUTH_INIT_TIMEOUT_MS);

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        console.info('[PortalAuth] Auth state change:', event);
        
        try {
          setSession(newSession);
          setUser(newSession?.user ?? null);
          
          // Clear any previous init error on successful auth event
          if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            setInitError(null);
          }
          
          if (newSession?.user?.email) {
            // Non-blocking: set config and fetch portal user
            setConfigSafe(newSession.user.email);
            
            // Fetch portal user in background (don't block loading)
            fetchPortalUser(newSession.user.email).then((userData) => {
              setPortalUser(userData);
            });
          } else {
            setPortalUser(null);
          }
          
          // Finish loading after processing auth state
          finishLoading();
        } catch (err) {
          console.error('[PortalAuth] Error in auth state change handler:', err);
          setInitError('Error processing authentication state.');
          finishLoading();
        }
      }
    );

    // Check for existing session
    const initSession = async () => {
      try {
        console.info('[PortalAuth] Checking for existing session...');
        const { data: { session: existingSession }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('[PortalAuth] Error getting session:', error);
          setInitError('Failed to retrieve session. Please try refreshing.');
          finishLoading();
          return;
        }
        
        setSession(existingSession);
        setUser(existingSession?.user ?? null);
        
        if (existingSession?.user?.email) {
          console.info('[PortalAuth] Found existing session for:', existingSession.user.email);
          setConfigSafe(existingSession.user.email);
          
          // Fetch portal user in background
          fetchPortalUser(existingSession.user.email).then((userData) => {
            setPortalUser(userData);
          });
        } else {
          console.info('[PortalAuth] No existing session found');
        }
        
        finishLoading();
      } catch (err) {
        console.error('[PortalAuth] Exception during session init:', err);
        setInitError('Session initialization failed. Please refresh the page.');
        finishLoading();
      }
    };

    initSession();

    return () => {
      clearTimeout(safetyTimeout);
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/portal`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          portal_user: true
        }
      }
    });
    return { error };
  };

  const signInWithMagicLink = async (email: string) => {
    const redirectUrl = `${window.location.origin}/portal`;
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          portal_user: true
        }
      }
    });
    return { error };
  };

  const resendConfirmation = async (email: string) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`
      }
    });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null);
      setSession(null);
      setPortalUser(null);
    }
    return { error };
  };

  const resetSession = async () => {
    console.info('[PortalAuth] Resetting session...');
    try {
      // Sign out locally (doesn't require server)
      await supabase.auth.signOut({ scope: 'local' });
      
      // Clear all Supabase-related localStorage keys
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('sb-') || key.includes('supabase'))) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
      
      // Reset state
      setUser(null);
      setSession(null);
      setPortalUser(null);
      setInitError(null);
      
      console.info('[PortalAuth] Session reset complete');
    } catch (err) {
      console.error('[PortalAuth] Error resetting session:', err);
    }
  };

  const isAdmin = portalUser?.role === 'admin';

  const value = {
    user,
    session,
    portalUser,
    loading,
    initError,
    signIn,
    signUp,
    signInWithMagicLink,
    resendConfirmation,
    signOut,
    resetSession,
    isAdmin,
  };

  return (
    <PortalAuthContext.Provider value={value}>
      {children}
    </PortalAuthContext.Provider>
  );
};

export const usePortalAuth = () => {
  const context = useContext(PortalAuthContext);
  if (context === undefined) {
    throw new Error('usePortalAuth must be used within a PortalAuthProvider');
  }
  return context;
};
