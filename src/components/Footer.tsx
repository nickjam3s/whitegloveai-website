
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#7021EE]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Contact Us section */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7021EE] mt-1" />
                <p className="text-gray-400 hover:text-[#7021EE]">
                  5 Cowboys Way, Suite 300<br />
                  Frisco, TX 75034
                </p>
              </div>
              <a 
                href="mailto:workwith@whitegloveai.com" 
                className="text-gray-400 flex items-center gap-2 hover:text-[#7021EE] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#7021EE]" />
                workwith@whitegloveai.com
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a 
                href="tel:+14692099907" 
                className="text-gray-400 flex items-center gap-2 hover:text-[#7021EE] transition-colors group whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#7021EE]" />
                +1-469-209-9907
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a 
                href="https://www.linkedin.com/company/whitegloveai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 flex items-center gap-2 hover:text-[#7021EE] transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#7021EE]" />
                LinkedIn
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>
          </div>

          {/* Company section */}
          <div className="lg:col-span-1 lg:flex lg:justify-center">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-[#7021EE] transition-colors">About Us</Link></li>
                <li><Link to="/about/apprentice" className="text-gray-400 hover:text-[#7021EE] transition-colors">Apprenticeship</Link></li>
              </ul>
            </div>
          </div>

          {/* Managed AI Services section */}
          <div className="lg:col-span-1 lg:flex lg:justify-center">
            <div>
              <h4 className="text-white font-semibold mb-4">Managed AI Services</h4>
              <ul className="space-y-2">
                <li><Link to="/maisp" className="text-gray-400 hover:text-[#7021EE] transition-colors">Overview</Link></li>
                <li><Link to="/maisp/textai" className="text-gray-400 hover:text-[#7021EE] transition-colors">TextAI</Link></li>
                <li><Link to="/maisp/voiceai" className="text-gray-400 hover:text-[#7021EE] transition-colors">VoiceAI</Link></li>
                <li><Link to="/maisp/avatarai" className="text-gray-400 hover:text-[#7021EE] transition-colors">AvatarAI</Link></li>
                <li><Link to="/maisp/automateai" className="text-gray-400 hover:text-[#7021EE] transition-colors">AutomateAI</Link></li>
                <li><Link to="/maisp/vendorai" className="text-gray-400 hover:text-[#7021EE] transition-colors">VendorAI</Link></li>
                <li><Link to="/maisp/mediaai" className="text-gray-400 hover:text-[#7021EE] transition-colors">MediaAI</Link></li>
                <li><Link to="/maisp/humaniodai" className="text-gray-400 hover:text-[#7021EE] transition-colors">HumanoidAI</Link></li>
              </ul>
            </div>
          </div>

          {/* Consulting section */}
          <div className="lg:col-span-1 lg:flex lg:justify-center">
            <div>
              <h4 className="text-white font-semibold mb-4">Consulting</h4>
              <ul className="space-y-2">
                <li><Link to="/vcaio" className="text-gray-400 hover:text-[#7021EE] transition-colors">Overview</Link></li>
                <li><Link to="/vcaio/launch" className="text-gray-400 hover:text-[#7021EE] transition-colors">Launchpad</Link></li>
                <li><Link to="/vcaio/adopt" className="text-gray-400 hover:text-[#7021EE] transition-colors">Adopt</Link></li>
                <li><Link to="/vcaio/enable" className="text-gray-400 hover:text-[#7021EE] transition-colors">Enable</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications and Copyright */}
        <div className="border-t border-[#7021EE]/20 pt-8 mt-12">
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
