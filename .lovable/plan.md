
# Plan: Standardize Hero Section Design and Animation System ✅ COMPLETED

This plan creates a unified hero section system across all WhitegloveAI pages, ensuring visual consistency while maintaining flexibility for page-specific content.

---

## Current State Analysis

After reviewing 20+ hero section implementations across the site, I found **7 different design patterns** currently in use:

| Pattern | Pages Using It | Key Characteristics |
|---------|----------------|---------------------|
| **GradientMeshAnimation** | Home page only | Canvas-based particle animation, full viewport height, WhitegloveAI logo |
| **HeroBackground component** | GovAI, Training, TRAIGA, Robotics | Dot pattern + blur circles + gradient overlays |
| **Morphing blob** | AI Enablement, MediaAI | `radial-gradient` with CSS keyframe animations |
| **Floating particles** | VendorAI | `framer-motion` animated circles |
| **Static gradient** | TextAI, AvatarAI, AutomateAI, vCAIO, AboutUs, Adopt, Launch | `bg-gradient-to-br from-secondary/5` + dot pattern |
| **Solid gradient overlay** | MAISP main page | `from-[#7021EE]/20 to-black/90` |
| **No background** | Some component HeroSections | Plain background inherited from parent |

**Key Inconsistencies Found:**
- **Heights vary**: `h-[100vh]`, `pt-40 pb-28`, `py-20 md:py-32`, `min-h-screen`
- **Title styles vary**: Some use `heading-highlight`, others use `gradient-text`, others use `bg-clip-text`
- **Animation approaches differ**: Some use framer-motion, some CSS keyframes, some no animations
- **Logo placement**: Some show WGAI icon, some show full logo, some have no logo
- **CTA button styles**: Multiple different button variants used

---

## Recommended Standardized Design System

### Design Concept: "Ambient Intelligence"
Given WhitegloveAI's audience (government, enterprise, professional services), the hero should convey:
- **Trust and stability** (subtle, not flashy)
- **Innovation** (modern, tech-forward)
- **Professionalism** (clean, not cluttered)
- **AI expertise** (intelligent, ambient effects)

### The Unified Hero Pattern

```text
+---------------------------------------------------+
|  [Dot Pattern Overlay - 20% opacity]              |
|                                                   |
|    [Blur Circle - top left - slow float]          |
|                                                   |
|         [Optional: Service Icon or WGAI Logo]     |
|                                                   |
|         [Title - Gradient Text Animation]         |
|         (from-white to-[#7021EE])                 |
|                                                   |
|         [Subtitle - Gray 200-300]                 |
|         (fade-in with delay)                      |
|                                                   |
|         [CTA Button(s) - Standardized]            |
|                                                   |
|    [Blur Circle - bottom right - slow float]      |
|                                                   |
|  [Optional: Scroll indicator for full-height]     |
+---------------------------------------------------+
```

---

## Implementation Approach

### Phase 1: Create Unified Hero Component

Create a new standardized `<StandardHero>` component in `src/components/shared/StandardHero.tsx` with these props:

| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Main headline |
| `subtitle` | string | Supporting text |
| `icon` | LucideIcon (optional) | Service icon to display |
| `showLogo` | boolean | Whether to show WGAI logo |
| `logoVariant` | "icon" | "full" | Which logo style |
| `height` | "full" | "auto" | Full viewport or content-based |
| `primaryCTA` | { text, href, external? } | Primary button |
| `secondaryCTA` | { text, href, external? } | Optional secondary button |
| `showScrollIndicator` | boolean | Show bouncing arrow |
| `children` | ReactNode | Custom content (countdown timer, video, etc.) |

### Phase 2: Background Animation Options

The component will support three animation modes via a `backgroundVariant` prop:

1. **"ambient"** (default) - Uses existing `HeroBackground` component
   - Dot pattern overlay
   - Two floating blur circles
   - Gradient overlay

2. **"mesh"** - Uses `GradientMeshAnimation` (home page style)
   - Canvas-based particles
   - Moving gradient blobs
   - Most visually dynamic

3. **"minimal"** - Simple gradient only
   - `bg-gradient-to-b from-[#7021EE]/10 to-background`
   - For pages where content is the focus

### Phase 3: Standardized Animations

All hero sections will use consistent framer-motion animations:

```typescript
// Title animation - spring-based entrance
const titleAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Subtitle animation - delayed fade
const subtitleAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 }
};

// CTA animation - further delayed
const ctaAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.4 }
};
```

### Phase 4: Typography Standards

| Element | Classes |
|---------|---------|
| **Title** | `text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]` |
| **Subtitle** | `text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto` |
| **Primary CTA** | `bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg` |
| **Secondary CTA** | `bg-secondary/20 hover:bg-secondary/30 border border-secondary/50` |

---

## Files to Create/Modify

### New Files

| File | Purpose |
|------|---------|
| `src/components/shared/StandardHero.tsx` | Unified hero component |
| `src/components/shared/StandardHero.types.ts` | TypeScript interfaces |

### Files to Update (30 hero sections)

Grouped by priority:

**High-traffic pages (Phase 1):**
1. `src/components/home/HeroSection.tsx` - Keep GradientMesh, align animations
2. `src/pages/GovAI.tsx` - Already uses HeroBackground, standardize content
3. `src/pages/Training.tsx` - Already uses HeroBackground, standardize content
4. `src/pages/TRAIGA.tsx` - Already uses HeroBackground, keep countdown
5. `src/pages/Consulting.tsx` (vCAIO) - Standardize

**Service pages (Phase 2):**
6. `src/pages/maisp/components/HeroSection.tsx`
7. `src/pages/maisp/components/textai/HeroSection.tsx`
8. `src/pages/maisp/components/avatarai/HeroSection.tsx`
9. `src/pages/maisp/components/automateai/HeroSection.tsx`
10. `src/pages/maisp/components/vendorai/HeroSection.tsx`
11. `src/pages/maisp/components/mediaai/HeroSection.tsx`
12. `src/pages/maisp/components/translateai/HeroSection.tsx`
13. `src/pages/maisp/components/textai/TextAIForGoodHero.tsx`
14. `src/pages/Robotics.tsx`

**Consulting pages (Phase 3):**
15. `src/pages/consulting/components/adopt/HeroSection.tsx`
16. `src/pages/consulting/components/launch/HeroSection.tsx`
17. `src/pages/consulting/components/enable/HeroSection.tsx`
18. `src/pages/consulting/components/chiefaiofficer/HeroSection.tsx`

**About/Other pages (Phase 4):**
19. `src/pages/AboutUs.tsx`
20. `src/pages/StrategicAdvisors.tsx` (and `src/pages/advisors/heroSection.tsx`)
21. `src/pages/Internship.tsx`
22. `src/pages/components/HeroSection.tsx`

---

## Visual Standardization Summary

| Aspect | Standard |
|--------|----------|
| **Background** | HeroBackground component (ambient mode) as default |
| **Height** | Full viewport (`h-[100vh]`) for main landing pages; `py-20 md:py-32` for service pages |
| **Title gradient** | `from-white to-[#7021EE]` |
| **Animation** | framer-motion with consistent timing (0.8s base, 0.2s stagger) |
| **Logo** | WGAI icon with purple hue filter for service pages; Full logo for home page |
| **Blur circles** | `bg-secondary/10` and `bg-primary/10` with `animate-float-slow` |
| **Button style** | Primary: filled secondary color; Secondary: ghost with border |

---

## Technical Considerations

### Performance
- Keep canvas animations (GradientMesh) only for home page
- Use CSS animations for blur circles where possible
- Lazy load framer-motion animations with `viewport={{ once: true }}`

### Accessibility
- Ensure color contrast meets WCAG AA standards
- Add `aria-label` to decorative elements
- Ensure animations respect `prefers-reduced-motion`

### Mobile Responsiveness
- Title scales: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- Reduce blur circle sizes on mobile
- Stack CTA buttons vertically on mobile

---

## Estimated Scope

| Phase | Files | Effort |
|-------|-------|--------|
| Create StandardHero component | 2 | ~1 hour |
| Update high-traffic pages | 5 | ~2 hours |
| Update service pages | 9 | ~3 hours |
| Update consulting pages | 4 | ~1.5 hours |
| Update about/other pages | 4 | ~1 hour |
| **Total** | **24 files** | **~8.5 hours** |

---

## Alternative Approaches Considered

1. **Keep all unique designs** - Rejected because inconsistency hurts brand perception
2. **Single animation for all** - Rejected because home page deserves premium treatment
3. **Remove all animations** - Rejected because animations convey innovation and modernity
