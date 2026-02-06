import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroBackground from './HeroBackground';
import { StandardHeroProps } from './StandardHero.types';
import { cn } from '@/lib/utils';

// Standardized animation configurations
const animations = {
  logo: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
  },
  cta: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
  },
  children: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' }
  },
  scrollIndicator: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: 0.8 }
  }
};

// Logo component with consistent styling
const WGAILogo = ({ variant = 'icon' }: { variant?: 'icon' | 'full' }) => {
  if (variant === 'full') {
    return (
      <img 
        src="/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
        alt="WhitegloveAI Logo"
        className="h-12 md:h-16"
      />
    );
  }
  
  return (
    <img 
      src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
      alt="WGAI Logo" 
      width="100" 
      height="100" 
      className="logo-animation"
      style={{ 
        filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
        display: "block"
      }}
    />
  );
};

// Scroll indicator component
const ScrollIndicator = ({ targetId }: { targetId?: string }) => {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      {...animations.scrollIndicator}
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      aria-label="Scroll to content"
    >
      <span className="text-sm font-medium">Scroll</span>
      <ChevronDown className="h-6 w-6 animate-bounce" />
    </motion.button>
  );
};

// CTA Button component
const CTAButtonComponent = ({ 
  cta, 
  variant = 'primary' 
}: { 
  cta: StandardHeroProps['primaryCTA']; 
  variant?: 'primary' | 'secondary';
}) => {
  if (!cta) return null;
  
  const Icon = cta.icon || ArrowRight;
  const isPrimary = variant === 'primary';
  
  const buttonClasses = cn(
    "inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg transition-colors",
    isPrimary 
      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
      : "bg-secondary/20 hover:bg-secondary/30 text-foreground border border-secondary/50"
  );

  if (cta.external) {
    return (
      <a 
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {cta.text}
        <Icon className="h-5 w-5" />
      </a>
    );
  }

  return (
    <Link to={cta.href} className={buttonClasses}>
      {cta.text}
      <Icon className="h-5 w-5" />
    </Link>
  );
};

// Height classes mapping
const heightClasses = {
  full: 'min-h-screen',
  large: 'pt-40 pb-28',
  auto: 'py-20 md:py-32'
};

// Minimal background (for mesh variant fallback or minimal mode)
const MinimalBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="relative bg-gradient-to-b from-secondary/10 to-background">
    {children}
  </div>
);

const StandardHero: React.FC<StandardHeroProps> = ({
  title,
  subtitle,
  icon: Icon,
  showLogo = false,
  logoVariant = 'icon',
  height = 'large',
  backgroundVariant = 'ambient',
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = false,
  scrollTargetId,
  children,
  className,
  centered = true,
  sideContent
}) => {
  const hasSplitLayout = !!sideContent;
  
  const content = (
    <section className={cn(
      "relative overflow-hidden px-4 sm:px-6 lg:px-8",
      heightClasses[height],
      height === 'full' && 'flex items-center',
      className
    )}>
      <div className={cn(
        "max-w-7xl mx-auto relative z-10",
        height === 'full' && 'w-full'
      )}>
        {hasSplitLayout ? (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content side */}
            <div className={cn("animate-fade-up", centered && !hasSplitLayout && "text-center")}>
              {renderContent()}
            </div>
            {/* Side content */}
            <div className="hidden md:block">
              {sideContent}
            </div>
          </div>
        ) : (
          <div className={cn(centered && "text-center")}>
            {renderContent()}
          </div>
        )}
      </div>
      
      {showScrollIndicator && height === 'full' && (
        <ScrollIndicator targetId={scrollTargetId} />
      )}
    </section>
  );

  function renderContent() {
    return (
      <>
        {/* Logo or Icon */}
        {(showLogo || Icon) && (
          <motion.div 
            {...animations.logo}
            className={cn("mb-6", centered && !hasSplitLayout && "flex justify-center")}
          >
            {showLogo ? (
              <WGAILogo variant={logoVariant} />
            ) : Icon ? (
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Icon className="h-8 w-8 text-secondary" />
              </div>
            ) : null}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1 
          {...animations.title}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-secondary"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p 
            {...animations.subtitle}
            className={cn(
              "text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12",
              centered && !hasSplitLayout && "max-w-3xl mx-auto"
            )}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div 
            {...animations.cta}
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              centered && !hasSplitLayout && "items-center justify-center"
            )}
          >
            {primaryCTA && <CTAButtonComponent cta={primaryCTA} variant="primary" />}
            {secondaryCTA && <CTAButtonComponent cta={secondaryCTA} variant="secondary" />}
          </motion.div>
        )}

        {/* Custom children content */}
        {children && (
          <motion.div {...animations.children} className="mt-8">
            {children}
          </motion.div>
        )}
      </>
    );
  }

  // Wrap with appropriate background
  if (backgroundVariant === 'minimal') {
    return <MinimalBackground>{content}</MinimalBackground>;
  }

  // Default: ambient background using HeroBackground
  return <HeroBackground>{content}</HeroBackground>;
};

export default StandardHero;
