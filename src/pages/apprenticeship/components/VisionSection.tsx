
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="w-full max-w-md mx-auto">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Simple illustration of person with robot */}
                <path
                  d="M150 240c33.137 0 60-26.863 60-60s-26.863-60-60-60-60 26.863-60 60 26.863 60 60 60z"
                  fill="#9b87f5"
                  fillOpacity="0.1"
                />
                <path
                  d="M120 100c0-16.569 13.431-30 30-30s30 13.431 30 30v25h-60v-25z"
                  fill="#d6bcfa"
                  fillOpacity="0.2"
                />
                <path
                  d="M160 125c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
                  fill="#ffffff"
                />
                <rect
                  x="170"
                  y="150"
                  width="40"
                  height="40"
                  rx="8"
                  fill="#9b87f5"
                  fillOpacity="0.3"
                />
                <path
                  d="M180 160c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"
                  fill="#ffffff"
                />
                <path
                  d="M200 160c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"
                  fill="#ffffff"
                />
                <path
                  d="M190 170v10"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M180 180h20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M150 125v30h-30v60h60v-60"
                  stroke="#d6bcfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M140 145h-10"
                  stroke="#d6bcfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Vision for AI Talent
            </h2>
            <div className="bg-[#7021EE]/10 p-6 rounded-lg border-l-4 border-[#7021EE] mb-6">
              <p className="text-gray-300 text-lg italic">
                "At WhitegloveAI, we believe in nurturing talent that will drive the next generation of AI innovation. Our apprentices are selected not just for their technical potential, but for their vision and dedication to excellence in everything they do."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
