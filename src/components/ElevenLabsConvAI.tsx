import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Volume2 } from 'lucide-react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadElevenLabsWidget = async () => {
      try {
        // Check browser compatibility
        const hasAudioWorklet = 'AudioWorklet' in window && 'audioWorklet' in AudioContext.prototype;
        const hasWebAudio = 'AudioContext' in window || 'webkitAudioContext' in window;
        const isSecureContext = window.isSecureContext;

        console.log('ElevenLabs ConvAI Browser Support Check:', {
          audioWorkletSupported: hasAudioWorklet,
          webAudioSupported: hasWebAudio,
          isSecureContext,
          userAgent: navigator.userAgent
        });

        if (!hasAudioWorklet) {
          console.warn('AudioWorklet not supported. Using fallback approach.');
          setIsVisible(false);
          return;
        }

        if (!isSecureContext && location.hostname !== 'localhost') {
          console.warn('ElevenLabs ConvAI requires HTTPS in production environments.');
          toast({
            title: "HTTPS Required",
            description: "Voice chat requires a secure connection (HTTPS).",
            variant: "destructive",
          });
          setIsVisible(false);
          return;
        }

        // Load the ElevenLabs script
        const existingScript = document.getElementById('elevenlabs-widget-script');
        if (!existingScript) {
          const script = document.createElement('script');
          script.id = 'elevenlabs-widget-script';
          script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
          script.async = true;
          script.type = 'text/javascript';
          
          script.onload = () => {
            console.log('ElevenLabs widget script loaded successfully');
            setIsLoaded(true);
            
            // Create the widget element after script loads
            setTimeout(() => {
              if (widgetContainerRef.current && !widgetContainerRef.current.querySelector('elevenlabs-convai')) {
                console.log('Creating ElevenLabs widget element');
                const widget = document.createElement('elevenlabs-convai');
                widget.setAttribute('agent-id', agentId);
                widgetContainerRef.current.appendChild(widget);
                console.log('Widget element created and added to DOM');
              }
            }, 100);
          };
          
          script.onerror = (error) => {
            console.error('Failed to load ElevenLabs widget script:', error);
            toast({
              title: "Widget Loading Error",
              description: "Failed to load voice chat widget. Please refresh the page.",
              variant: "destructive",
            });
          };

          document.head.appendChild(script);
        } else {
          console.log('ElevenLabs script already exists, setting loaded state');
          setIsLoaded(true);
          
          // Create the widget element if script already exists
          setTimeout(() => {
            if (widgetContainerRef.current && !widgetContainerRef.current.querySelector('elevenlabs-convai')) {
              console.log('Creating ElevenLabs widget element (script already loaded)');
              const widget = document.createElement('elevenlabs-convai');
              widget.setAttribute('agent-id', agentId);
              widgetContainerRef.current.appendChild(widget);
              console.log('Widget element created and added to DOM (script already loaded)');
            }
          }, 100);
        }

      } catch (error) {
        console.error('Error initializing ElevenLabs widget:', error);
        toast({
          title: "Initialization Error",
          description: "Failed to initialize voice chat. Please try refreshing the page.",
          variant: "destructive",
        });
      }
    };

    loadElevenLabsWidget();

    // Error handler for AudioWorklet issues
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.filename && event.filename.includes('elevenlabs') || 
          event.message && event.message.includes('raw-audio-processor')) {
        console.error('ElevenLabs ConvAI Error:', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        });
        
        if (event.message.includes('raw-audio-processor')) {
          toast({
            title: "Audio System Error",
            description: "There was an issue with the audio system. This may be due to browser compatibility.",
            variant: "destructive",
          });
        }
      }
    };

    window.addEventListener('error', handleGlobalError);

    return () => {
      window.removeEventListener('error', handleGlobalError);
    };
  }, [agentId, toast]);

  if (!isVisible) {
    return null;
  }

  const containerClasses = position === 'fixed' 
    ? `fixed bottom-6 right-6 z-50 ${className}` 
    : `${className}`;

  return (
    <div className={containerClasses}>
      <div className="bg-card border border-border rounded-lg shadow-lg">
        {!isLoaded ? (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div 
            ref={widgetContainerRef}
            className="min-w-16 min-h-16"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* ElevenLabs widget will be inserted here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElevenLabsConvAI;