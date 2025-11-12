// Inject custom styles into Conduit.ai widget to match site font
export const injectConduitStyles = () => {
  // Wait for the widget to load
  const checkInterval = setInterval(() => {
    // Try to find the Conduit widget container
    const conduitContainer = document.getElementById('conduit-widget-container') || 
                            document.querySelector('[data-widget-id="a577c803-4c1a-4b17-4b7d-2dc85a55b344"]');
    
    if (conduitContainer) {
      // Add inline styles to the container
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        #conduit-widget-container,
        #conduit-widget-container *,
        .conduit-chat-bubble,
        .conduit-chat-bubble *,
        .conduit-chat-window,
        .conduit-chat-window * {
          font-family: 'Manrope', sans-serif !important;
        }
      `;
      document.head.appendChild(styleElement);
      
      // Try to access iframe content if accessible
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        try {
          if (iframe.src && iframe.src.includes('conduit')) {
            // Try to inject styles into iframe (might fail due to CORS)
            iframe.onload = () => {
              try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDoc) {
                  const iframeStyle = iframeDoc.createElement('style');
                  iframeStyle.textContent = `
                    * {
                      font-family: 'Manrope', sans-serif !important;
                    }
                  `;
                  iframeDoc.head.appendChild(iframeStyle);
                }
              } catch (e) {
                // Cross-origin iframe, can't access
                console.log('Cannot inject styles into Conduit iframe due to CORS');
              }
            };
          }
        } catch (e) {
          // Ignore errors
        }
      });
      
      clearInterval(checkInterval);
    }
  }, 100);
  
  // Stop checking after 10 seconds
  setTimeout(() => clearInterval(checkInterval), 10000);
};
