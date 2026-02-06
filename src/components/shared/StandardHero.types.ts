import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface CTAButton {
  text: string;
  href: string;
  external?: boolean;
  icon?: LucideIcon;
}

export type BackgroundVariant = 'ambient' | 'mesh' | 'minimal';
export type HeightVariant = 'full' | 'auto' | 'large';
export type LogoVariant = 'icon' | 'full';

export interface StandardHeroProps {
  /** Main headline text */
  title: string;
  /** Supporting description text */
  subtitle?: string;
  /** Optional icon to display above title */
  icon?: LucideIcon;
  /** Whether to show the WGAI logo */
  showLogo?: boolean;
  /** Which logo variant to use */
  logoVariant?: LogoVariant;
  /** Hero section height */
  height?: HeightVariant;
  /** Background animation style */
  backgroundVariant?: BackgroundVariant;
  /** Primary call-to-action button */
  primaryCTA?: CTAButton;
  /** Secondary call-to-action button */
  secondaryCTA?: CTAButton;
  /** Show scroll indicator for full-height heroes */
  showScrollIndicator?: boolean;
  /** ID to scroll to when clicking scroll indicator */
  scrollTargetId?: string;
  /** Custom content to render (countdown timer, video, etc.) */
  children?: ReactNode;
  /** Additional CSS classes for the section */
  className?: string;
  /** Whether to center the content */
  centered?: boolean;
  /** Custom side content (for split layouts) */
  sideContent?: ReactNode;
}
