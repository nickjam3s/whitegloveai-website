
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <section className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Site Map */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-xl text-white font-semibold mb-6">Site Map</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h5 className="text-[#7021EE] font-medium mb-3">Main</h5>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/aboutus" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[#7021EE] font-medium mb-3">Consulting</h5>
                <ul className="space-y-2">
                  <li><Link to="/consulting" className="text-gray-400 hover:text-white transition-colors">Overview</Link></li>
                  <li><Link to="/consulting/launch" className="text-gray-400 hover:text-white transition-colors">Launch</Link></li>
                  <li><Link to="/consulting/adopt" className="text-gray-400 hover:text-white transition-colors">Adopt</Link></li>
                  <li><Link to="/consulting/enable" className="text-gray-400 hover:text-white transition-colors">Enable</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[#7021EE] font-medium mb-3">MAISP</h5>
                <ul className="space-y-2">
                  <li><Link to="/maisp" className="text-gray-400 hover:text-white transition-colors">Overview</Link></li>
                  <li><Link to="/maisp/textai" className="text-gray-400 hover:text-white transition-colors">TextAI</Link></li>
                  <li><Link to="/maisp/voiceai" className="text-gray-400 hover:text-white transition-colors">VoiceAI</Link></li>
                  <li><Link to="/maisp/avatarai" className="text-gray-400 hover:text-white transition-colors">AvatarAI</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[#7021EE] font-medium mb-3">Legal</h5>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-gray-400">© Copyright WhitegloveAI LLC 2026</p>
            <p className="text-[#7021EE] text-sm mt-3 md:mt-0">Managed AI Service Provider™</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
