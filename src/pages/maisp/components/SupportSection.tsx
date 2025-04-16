import { motion } from "framer-motion";
const SupportSection = () => {
  return <section id="support-section" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left"> {/* Changed from text-center to text-left and items-center to items-start */}
        <motion.h2 initial={{
        opacity: 0,
        y: -10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]">
          Comprehensive Support
        </motion.h2>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="grid md:grid-cols-1 gap-10 items-start w-full max-w-3xl">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-2xl font-semibold mb-4 text-left">Our Support Includes:</h3>
            
            <div className="space-y-4">
              {/* Each support item now uses text-left for left alignment */}
              <div className="flex items-start text-left">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">24/7 Monitoring & Support</h4>
                  <p className="text-gray-300">Continuous monitoring and rapid response to any issues</p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">Performance Optimization</h4>
                  <p className="text-gray-300">Regular analysis and improvements to maintain peak performance</p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">Ongoing Training</h4>
                  <p className="text-gray-300">Continuous education for your team on AI best practices</p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#7021EE] mr-3 text-2xl leading-none">•</span>
                <div>
                  <h4 className="font-semibold">Regular Updates</h4>
                  <p className="text-gray-300">Scheduled updates with the latest AI capabilities and security measures</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default SupportSection;