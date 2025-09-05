import React, { useState, useEffect, useRef } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, PhoneOff, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ElevenLabsConvAIProps {
  agentId?: string;
  position?: 'fixed' | 'static';
  className?: string;
}

const ElevenLabsConvAI: React.FC<ElevenLabsConvAIProps> = ({
  agentId = "jTvgAy2qrSmT5UzQ57N9",
  position = 'fixed',
  className = ''
}) => {
  const { toast } = useToast();
  const [isMinimized, setIsMinimized] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [audioPermission, setAudioPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const audioContextRef = useRef<AudioContext | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs ConvAI connected');
      toast({
        title: "Voice chat connected",
        description: "You can now speak with our AI assistant",
      });
    },
    onDisconnect: () => {
      console.log('ElevenLabs ConvAI disconnected');
    },
    onMessage: (message) => {
      console.log('ConvAI message:', message);
    },
    onError: (error) => {
      console.error('ElevenLabs ConvAI error:', error);
      toast({
        title: "Voice chat error",
        description: "There was an issue with the voice connection. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Check browser compatibility
  const checkBrowserSupport = () => {
    const hasAudioWorklet = 'AudioWorklet' in window && 'audioWorklet' in AudioContext.prototype;
    const hasWebAudio = 'AudioContext' in window || 'webkitAudioContext' in window;
    const isSecureContext = window.isSecureContext;

    console.log('Browser support check:', {
      audioWorkletSupported: hasAudioWorklet,
      webAudioSupported: hasWebAudio,
      isSecureContext,
      userAgent: navigator.userAgent
    });

    if (!hasAudioWorklet) {
      toast({
        title: "Browser compatibility issue",
        description: "Your browser may not support all voice features. Please use Chrome, Firefox, or Edge.",
        variant: "destructive",
      });
      return false;
    }

    if (!isSecureContext && location.hostname !== 'localhost') {
      toast({
        title: "HTTPS required",
        description: "Voice chat requires a secure connection (HTTPS).",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  // Request microphone permission
  const requestMicrophonePermission = async (): Promise<boolean> => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioPermission('granted');
      
      // Initialize AudioContext after user interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      }
      
      return true;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      setAudioPermission('denied');
      toast({
        title: "Microphone access required",
        description: "Please allow microphone access to use voice chat.",
        variant: "destructive",
      });
      return false;
    }
  };

  const startConversation = async () => {
    if (!checkBrowserSupport()) return;
    
    setHasUserInteracted(true);
    
    if (audioPermission !== 'granted') {
      const hasPermission = await requestMicrophonePermission();
      if (!hasPermission) return;
    }

    try {
      // Generate signed URL for the agent
      const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`, {
        method: "GET",
        headers: {
          "xi-api-key": process.env.VITE_ELEVENLABS_API_KEY || "", // This will be empty in browser
        },
      });

      let url: string;
      if (response.ok) {
        const data = await response.json();
        url = data.signed_url;
      } else {
        // Fallback to public agent URL if API key is not available
        url = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${agentId}`;
      }

      await conversation.startSession({ url });
      setIsMinimized(false);
    } catch (error) {
      console.error('Failed to start conversation:', error);
      toast({
        title: "Connection failed",
        description: "Unable to start voice conversation. Please try again.",
        variant: "destructive",
      });
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
      setIsMinimized(true);
    } catch (error) {
      console.error('Failed to end conversation:', error);
    }
  };

  const toggleMinimized = () => {
    if (conversation.status === 'connected') {
      setIsMinimized(!isMinimized);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const containerClasses = position === 'fixed' 
    ? `fixed bottom-6 right-6 z-50 ${className}` 
    : `${className}`;

  const widgetClasses = isMinimized && conversation.status !== 'connected'
    ? "w-16 h-16"
    : "w-80 h-96";

  return (
    <div className={containerClasses}>
      <div className={`bg-card border border-border rounded-lg shadow-lg transition-all duration-300 ${widgetClasses}`}>
        {/* Minimized State - Floating Button */}
        {isMinimized && conversation.status !== 'connected' && (
          <Button
            onClick={startConversation}
            className="w-full h-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Mic className="h-6 w-6" />
          </Button>
        )}

        {/* Expanded State - Full Widget */}
        {(!isMinimized || conversation.status === 'connected') && (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">AI Assistant</span>
              </div>
              <div className="flex space-x-2">
                {conversation.status === 'connected' && (
                  <Button
                    onClick={toggleMinimized}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    {isMinimized ? "+" : "-"}
                  </Button>
                )}
                <Button
                  onClick={conversation.status === 'connected' ? endConversation : undefined}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  disabled={conversation.status === 'disconnected'}
                >
                  <PhoneOff className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              {conversation.status === 'disconnected' && (
                <div className="text-center space-y-4">
                  <div className="text-muted-foreground">
                    Click to start voice conversation
                  </div>
                  <Button onClick={startConversation} className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Start Call
                  </Button>
                </div>
              )}

              {conversation.status === 'connected' && (
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full ${conversation.isSpeaking ? 'bg-primary animate-pulse' : 'bg-muted'} flex items-center justify-center`}>
                    <Mic className={`h-8 w-8 ${conversation.isSpeaking ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {conversation.isSpeaking ? "AI is speaking..." : "Listening..."}
                  </div>
                  <Button 
                    onClick={endConversation}
                    variant="destructive"
                    className="w-full"
                  >
                    <PhoneOff className="h-4 w-4 mr-2" />
                    End Call
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElevenLabsConvAI;