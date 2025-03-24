
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <section className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {/* Site Map */}
          <div>
            <h3 className="text-white font-medium mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li><Link to="/vcaio" className="text-gray-400 hover:text-white transition-colors">Virtual CAIO</Link></li>
              <li><Link to="/vcaio/launch" className="text-gray-400 hover:text-white transition-colors">Launch</Link></li>
              <li><Link to="/vcaio/enable" className="text-gray-400 hover:text-white transition-colors">Enable</Link></li>
              <li><Link to="/vcaio/adopt" className="text-gray-400 hover:text-white transition-colors">Adopt</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Trademark */}
        <div className="pt-6 border-t border-gray-800">
          <p className="text-gray-400">© Copyright WhitegloveAI LLC 2025</p>
          <p className="text-gray-400 mt-1">Managed AI Service Provider™</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
