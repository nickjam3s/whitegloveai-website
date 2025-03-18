
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#7021EE]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/maisp" className="text-gray-400 hover:text-[#7021EE] transition-colors">Managed AI Services</Link></li>
              <li><Link to="/maisp/textai" className="text-gray-400 hover:text-[#7021EE] transition-colors">TextAI</Link></li>
              <li><Link to="/maisp/voiceai" className="text-gray-400 hover:text-[#7021EE] transition-colors">VoiceAI</Link></li>
              <li><Link to="/maisp/avatarai" className="text-gray-400 hover:text-[#7021EE] transition-colors">AvatarAI</Link></li>
              <li><Link to="/maisp/automateai" className="text-gray-400 hover:text-[#7021EE] transition-colors">AutomateAI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-[#7021EE] transition-colors">About Us</Link></li>
              <li><Link to="/about/apprentice" className="text-gray-400 hover:text-[#7021EE] transition-colors">Apprenticeship</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-[#7021EE] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-[#7021EE] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* vCAIO */}
          <div>
            <h4 className="text-white font-semibold mb-4">vCAIO Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/vcaio" className="text-gray-400 hover:text-[#7021EE] transition-colors">Overview</Link></li>
              <li><Link to="/vcaio/launch" className="text-gray-400 hover:text-[#7021EE] transition-colors">Launchpad</Link></li>
              <li><Link to="/vcaio/adopt" className="text-gray-400 hover:text-[#7021EE] transition-colors">Adopt</Link></li>
              <li><Link to="/vcaio/enable" className="text-gray-400 hover:text-[#7021EE] transition-colors">Enable</Link></li>
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-white font-semibold mb-4">Site Map</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#7021EE] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#7021EE] transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#7021EE] transition-colors">Contact</Link></li>
              <li><a href="https://aiamf.ai" className="text-gray-400 hover:text-[#7021EE] transition-colors">AI-AMF</a></li>
            </ul>
          </div>
        </div>

        {/* Certifications and Copyright */}
        <div className="border-t border-[#7021EE]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <Link to="/privacy" className="text-gray-400 hover:text-[#7021EE] mr-4 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#7021EE] transition-colors">Terms of Service</Link>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div>© Copyright WhitegloveAI LLC 2025</div>
              <div className="text-[#7021EE] text-sm">Managed AI Service Provider™</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
