import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import PatentedExpertise from './components/PatentedExpertise'
import ServicesSection from './components/ServicesSection'
import ScalableSolutions from './components/ScalableSolutions'
import SupportSection from './components/SupportSection'
import '@/styles/animations.css'
import PageWrapper from '@/components/layout/PageWrapper'
import ContactSection from './components/ContactSection'

const MAISP = () => {
useEffect(() => {
window.scrollTo(0, 0)

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible')
}
})
}, {
threshold: 0.1,
rootMargin: '0px 0px -100px 0px'
})

document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
observer.observe(heading)
})

const animateSections = document.querySelectorAll('.animate-section, .animate-on-scroll')
animateSections.forEach(section => {
observer.observe(section)
})

return () => {
observer.disconnect()
}
}, [])

const fadeInUp = {
initial: { opacity: 0, y: 20 },
animate: { opacity: 1, y: 0 },
transition: { duration: 0.6 }
}

return (
<div className="min-h-screen bg-black text-white font-sans font-sora overflow-x-hidden">
<section className="relative h-[100vh] flex items-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
<div className="absolute inset-0 backdrop-blur-sm" />
</div>

<div className="absolute inset-0 overflow-hidden">
{[...Array(20)].map((_, i) => (
<motion.div
key={i}
className="absolute rounded-full bg-[#7021EE]/20"
initial={{
x: Math.random() * window.innerWidth,
y: Math.random() * window.innerHeight,
scale: Math.random() * 0.5 + 0.5,
}}
animate={{
x: [
Math.random() * window.innerWidth,
Math.random() * window.innerWidth,
Math.random() * window.innerWidth,
],
y: [
Math.random() * window.innerHeight,
Math.random() * window.innerHeight,
Math.random() * window.innerHeight,
],
opacity: [0.2, 0.5, 0.2],
}}
transition={{
duration: Math.random() * 20 + 20,
repeat: Infinity,
ease: "linear",
}}
style={{
width: `${Math.random() * 200 + 50}px`,
height: `${Math.random() * 200 + 50}px`,
}}
/>
))}
</div>

<div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
<div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
<div className="flex justify-center mb-6">
<img 
src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
alt="WGAI Logo" 
width="100" 
height="100" 
className="logo-animation mx-auto"
style={{ 
filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
display: "block"
}}
/>
</div>
<motion.h1 
initial={{ opacity: 0, y: 30 }} 
animate={{ opacity: 1, y: 0 }} 
transition={{ duration: 0.8 }}
className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
>
Managed AI Services 
</motion.h1>
<motion.p 
initial={{ opacity: 0, y: 20 }} 
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm"
>
Delegate Your AI Needs to Us—Securely, Strategically, Seamlessly.
</motion.p>

<motion.div 
className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
initial={{ y: 0, opacity: 0.5 }}
animate={{ y: 10, opacity: 1 }}
transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
>
<a href="#patented-expertise" aria-label="Scroll to learn more">
<ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
</a>
</motion.div>
</div>
</div>
</section>

<PageWrapper>
<motion.section
id="patented-expertise"
initial="initial"
whileInView="animate"
viewport={{ once: true }}
variants={fadeInUp}
className="scroll-mt-20"
>
<PatentedExpertise />
</motion.section>

<motion.section
id="services"
initial="initial"
whileInView="animate"
viewport={{ once: true }}
variants={fadeInUp}
className="mt-16 scroll-mt-20"
>
<ServicesSection />
</motion.section>

<motion.section
id="scalable-solutions"
initial="initial"
whileInView="animate"
viewport={{ once: true }}
variants={fadeInUp}
className="mt-16 scroll-mt-20"
>
<ScalableSolutions />
</motion.section>

<motion.section
id="support-section"
initial="initial"
whileInView="animate"
viewport={{ once: true }}
variants={fadeInUp}
className="mt-16 scroll-mt-20"
>
<SupportSection />
</motion.section>
</PageWrapper>
<ContactSection />
</div>
)
}

export default MAISP