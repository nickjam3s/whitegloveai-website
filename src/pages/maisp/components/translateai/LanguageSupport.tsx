import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";

const LanguageSupport = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const languages = [
    "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Bengali", "Bosnian",
    "Bulgarian", "Burmese", "Catalan", "Chinese (Simplified)", "Chinese (Traditional)", "Croatian",
    "Czech", "Danish", "Dutch", "English", "Estonian", "Filipino", "Finnish", "French", "Georgian",
    "German", "Greek", "Gujarati", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian",
    "Italian", "Japanese", "Kannada", "Kazakh", "Khmer", "Korean", "Latvian", "Lithuanian",
    "Macedonian", "Malay", "Malayalam", "Marathi", "Mongolian", "Nepali", "Norwegian", "Pashto",
    "Persian", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian", "Serbian", "Sinhala",
    "Slovak", "Slovenian", "Spanish", "Swahili", "Swedish", "Tamil", "Telugu", "Thai", "Turkish",
    "Ukrainian", "Urdu", "Vietnamese"
  ];

  return (
    <section className="py-20 bg-background px-4 sm:px-6 lg:px-8" id="languages">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Globe className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary heading-highlight-scroll">
            Languages Supported
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive language coverage for global communication
          </p>
        </div>

        <div className="bg-card/50 rounded-xl border border-border/50 overflow-hidden">
          <div 
            className="p-6 cursor-pointer hover:bg-card/70 transition-colors duration-300 flex items-center justify-between"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                View All Supported Languages
              </h3>
              <p className="text-muted-foreground">
                {languages.length} languages available for real-time translation
              </p>
            </div>
            <div className="p-2 bg-primary/10 rounded-full">
              {isExpanded ? (
                <ChevronUp className="w-6 h-6 text-primary" />
              ) : (
                <ChevronDown className="w-6 h-6 text-primary" />
              )}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-border/30">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="flex items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground text-sm">{language}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSupport;