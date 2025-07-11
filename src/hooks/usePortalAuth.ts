import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface PortalUser {
  id: string;
  email: string;
  role: 'admin' | 'client';
  last_login?: string;
}

interface AuthState {
  user: PortalUser | null;
  loading: boolean;
  error: string | null;
}

export function usePortalAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  const setUser = useCallback((user: PortalUser | null) => {
    setAuthState(prev => ({ ...prev, user, loading: false }));
    
    if (user) {
      localStorage.setItem('portal_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('portal_user');
    }
  }, []);

  const sendMagicLink = useCallback(async (email: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));

      const { data, error } = await supabase.functions.invoke('portal-auth/send-magic-link', {
        body: { 
          email,
          redirectTo: `${window.location.origin}/portal`
        }
      });

      if (error) throw error;

      return { success: true, message: data.message };
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to send magic link';
      setAuthState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return { success: false, error: errorMessage };
    }
  }, []);

  const verifyToken = useCallback(async (token: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));

      const { data, error } = await supabase.functions.invoke('portal-auth/verify-token', {
        body: { token }
      });

      if (error) throw error;

      const user = data.user as PortalUser;
      setUser(user);
      
      return { success: true, user };
    } catch (error: any) {
      const errorMessage = error.message || 'Invalid or expired token';
      setAuthState(prev => ({ ...prev, error: errorMessage, loading: false }));
      return { success: false, error: errorMessage };
    }
  }, [setUser]);

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }));
  }, []);

  // Check for stored user on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('portal_user');
      if (storedUser) {
        const user = JSON.parse(storedUser) as PortalUser;
        setUser(user);
      } else {
        setAuthState(prev => ({ ...prev, loading: false }));
      }
    } catch (error) {
      console.error('Error loading stored user:', error);
      setAuthState(prev => ({ ...prev, loading: false }));
    }
  }, [setUser]);

  // Check for token in URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Remove token from URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      
      // Verify the token
      verifyToken(token);
    }
  }, [verifyToken]);

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    isAuthenticated: !!authState.user,
    isAdmin: authState.user?.role === 'admin',
    sendMagicLink,
    verifyToken,
    logout,
    clearError,
  };
}