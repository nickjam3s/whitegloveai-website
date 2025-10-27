
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Contact Us section */}
          <div className="lg:col-span-1">
            <h4 className="text-foreground font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <p className="text-muted-foreground hover:text-primary">
                  5 Cowboys Way, Suite 300<br />
                  Frisco, TX 75034
                </p>
              </div>
              <a 
                href="mailto:workwith@whitegloveai.com" 
                className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary" />
                workwith@whitegloveai.com
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a 
                href="tel:+14694219918" 
                className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors group whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-primary" />
                +1 (469) 421-9918
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a 
                href="https://www.linkedin.com/company/whitegloveai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>
          </div>

          {/* Company section */}
          <div className="lg:col-span-1 lg:flex lg:justify-center">
            <div>
              <h4 className="text-foreground font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/about/apprentice" className="text-muted-foreground hover:text-primary transition-colors">Apprenticeship</Link></li>
                <li><Link to="/aboutus/strategic-advisors" className="text-muted-foreground hover:text-primary transition-colors">Strategic Advisors</Link></li>
              </ul>
            </div>
          </div>

          {/* Managed AI Services section */}
          <div className="lg:col-span-1 lg:flex lg:justify-center">
            <div>
              <h4 className="text-foreground font-semibold mb-4">Managed AI Services</h4>
               <ul className="space-y-2">
                <li><Link to="/maisp" className="text-muted-foreground hover:text-primary transition-colors">Overview</Link></li>
                <li><Link to="/maisp/automateai" className="text-muted-foreground hover:text-primary transition-colors">AutomateAI</Link></li>
                <li><Link to="/maisp/avatarai" className="text-muted-foreground hover:text-primary transition-colors">AvatarAI</Link></li>
                <li><Link to="/maisp/embodied-ai" className="text-muted-foreground hover:text-primary transition-colors">EmbodiedAI</Link></li>
                <li><Link to="/maisp/textai" className="text-muted-foreground hover:text-primary transition-colors">TextAI</Link></li>
                <li><Link to="/maisp/translateai" className="text-muted-foreground hover:text-primary transition-colors">TranslateAI</Link></li>
                <li><Link to="/maisp/voiceai" className="text-muted-foreground hover:text-primary transition-colors">VoiceAI</Link></li>
               </ul>
            </div>
          </div>

          {/* Consulting section */}
          <div className="lg:col-span-1 lg:flex lg:justify-center">
            <div>
              <h4 className="text-foreground font-semibold mb-4">Consulting</h4>
              <ul className="space-y-2">
                <li><Link to="/vcaio" className="text-muted-foreground hover:text-primary transition-colors">Overview</Link></li>
                <li><Link to="/vcaio/launch" className="text-muted-foreground hover:text-primary transition-colors">Launchpad</Link></li>
                <li><Link to="/vcaio/adopt" className="text-muted-foreground hover:text-primary transition-colors">Adopt</Link></li>
                <li><Link to="/vcaio/enable" className="text-muted-foreground hover:text-primary transition-colors">Enable</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications and Copyright */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Vendor Number - Now above the privacy/terms */}
            <div className="text-muted-foreground mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
              Historically Underutilized Business Vendor Number: 19340294370
            </div>
            <div className="text-muted-foreground">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary mr-4 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <div className="text-muted-foreground text-center md:text-right">
               <div>© Copyright WhitegloveAI LLC 2025</div>
              <div className="text-primary text-sm">Managed AI Service Provider™</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

