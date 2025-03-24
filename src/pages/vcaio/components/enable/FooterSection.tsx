
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';

const FooterSection = () => {
  return (
    <section className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Site Map */}
          <div>
            <h4 className="text-white font-semibold mb-4">Site Map</h4>
            <ul className="space-y-2">
              <li><Link to="/vcaio" className="text-gray-400 hover:text-[#7021EE] transition-colors">Virtual CAIO</Link></li>
              <li><Link to="/vcaio/launch" className="text-gray-400 hover:text-[#7021EE] transition-colors">Launch</Link></li>
              <li><Link to="/vcaio/enable" className="text-gray-400 hover:text-[#7021EE] transition-colors">Enable</Link></li>
              <li><Link to="/vcaio/adopt" className="text-gray-400 hover:text-[#7021EE] transition-colors">Adopt</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#7021EE] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#7021EE] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FileText size={16} className="mr-2 text-gray-400" />
                <Link to="/privacy" className="text-gray-400 hover:text-[#7021EE] transition-colors">Privacy</Link>
              </li>
              <li className="flex items-center">
                <FileText size={16} className="mr-2 text-gray-400" />
                <Link to="/terms" className="text-gray-400 hover:text-[#7021EE] transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Trademark */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col items-start">
            <p className="text-gray-400 mb-2">© Copyright WhitegloveAI LLC 2025</p>
            <p className="text-[#7021EE]">Managed AI Service Provider™</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
