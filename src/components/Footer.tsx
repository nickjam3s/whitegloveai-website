
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/maisp" className="text-gray-400 hover:text-white transition-colors">Managed AI Services</Link></li>
              <li><Link to="/maisp/textai" className="text-gray-400 hover:text-white transition-colors">TextAI</Link></li>
              <li><Link to="/maisp/voiceai" className="text-gray-400 hover:text-white transition-colors">VoiceAI</Link></li>
              <li><Link to="/maisp/avatarai" className="text-gray-400 hover:text-white transition-colors">AvatarAI</Link></li>
              <li><Link to="/maisp/automateai" className="text-gray-400 hover:text-white transition-colors">AutomateAI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about/apprentice" className="text-gray-400 hover:text-white transition-colors">Apprenticeship</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* vCAIO */}
          <div>
            <h4 className="text-white font-semibold mb-4">vCAIO Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/vcaio" className="text-gray-400 hover:text-white transition-colors">Overview</Link></li>
              <li><Link to="/vcaio/launch" className="text-gray-400 hover:text-white transition-colors">Launchpad</Link></li>
              <li><Link to="/vcaio/adopt" className="text-gray-400 hover:text-white transition-colors">Adopt</Link></li>
              <li><Link to="/vcaio/enable" className="text-gray-400 hover:text-white transition-colors">Enable</Link></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://aiamf.ai" className="text-gray-400 hover:text-white transition-colors">AI-AMF</a></li>
              <li><a href="https://aiexec.whitegloveai.com" className="text-gray-400 hover:text-white transition-colors">The AI Executive</a></li>
            </ul>
          </div>
        </div>

        {/* Certifications and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <span className="text-gray-400">Veteran Owned and Operated</span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span className="text-gray-400">Certified Historically Underutilized Business (HUB)</span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span className="text-gray-400">Texas Comptroller of Public Accounts</span>
            </div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} WhitegloveAI LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
