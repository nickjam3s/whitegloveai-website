
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';

const FooterSection = () => {
  return (
    <section className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Site Map</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link to="/vcaio" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                Virtual CAIO
              </Link>
              <Link to="/vcaio/launch" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                Launch
              </Link>
              <Link to="/vcaio/enable" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                Enable
              </Link>
              <Link to="/vcaio/adopt" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                Adopt
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                About Us
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                Contact
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <div className="space-y-3">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <FileText size={16} />
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <FileText size={16} />
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-400 mb-2 md:mb-0">© Copyright WhitegloveAI LLC 2025</p>
            <p className="text-gray-400">Managed AI Service Provider™</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
