
# Plan: Create Government AI Training Pack Page & Cross-Links

This plan implements a comprehensive new page at `/maisp/training/government-pack` for the Government AI Training Pack, adds cross-links across existing training pages, updates navigation, footer, and the AI Course Advisor knowledge base.

---

## Summary of Changes

| Area | Changes |
|------|---------|
| New Page | Create `src/pages/training/GovernmentPack.tsx` with full content |
| Routing | Add route in `App.tsx` |
| Navigation | Update `navigationData.ts` to include Government Training Pack |
| Footer | Update `Footer.tsx` to include new link |
| Training Page | Add callout banner after "Featured Certifications" section |
| Catalogue Page | Add info banner before course listings |
| HB3512 Page | Add "Complete HB3512 Compliance Solution" section |
| AI Course Advisor | Update edge function with Government Pack knowledge |

---

## File 1: `src/pages/training/GovernmentPack.tsx` (NEW)

Create a comprehensive new page with the following sections:

### Structure Overview:
1. **Hero Section**
   - Heading: "Government AI Training Pack"
   - Subheading: "Comprehensive AI Literacy Program for Public Sector Employees"
   - Description about four nationally accredited certifications (28 hours)
   - CTAs: "Request Quote", "Download Overview", "See Pricing"

2. **DIR Disclaimer** (existing component)

3. **TXShare Banner** (styled consistently with other training pages)

4. **What's Included Section**
   - Four certification cards with badges showing hours:
     - AI+ Everyone (8 hours) - Users icon
     - AI+ Foundation (4 hours) - Lightbulb icon
     - AI+ Government (8 hours) - Building2 icon
     - AI+ Ethics (8 hours) - Shield icon
   - Each card shows key topics and delivery format

5. **Why the Government AI Training Pack Section**
   - Three benefit cards: Comprehensive Coverage, Progressive Learning, Cost-Effective

6. **Proven Results Section**
   - Case study cards for McKinney, Harlingen, Dallas Baptist University

7. **Pricing & Delivery Options Section**
   - Three pricing cards: Self-Paced ($780), Virtual ($3,980), In-Person ($4,130)
   - TXShare note
   - Collapsible volume discount tables using Accordion component

8. **Implementation Approach Section**
   - Timeline cards for Phase 1 (Pilot), Phase 2 (Department), Phase 3 (Organization-Wide)
   - Custom pricing note

9. **ROI Section**
   - Simple ROI calculator display (not interactive initially)
   - Example ROI display for 100 employees
   - Additional benefits list

10. **Why Choose WhitegloveAI Section**
    - Six value cards: Texas Government Expertise, Nationally Accredited, TXShare Approved, Technology-Agnostic, Proven Results, Ongoing Support

11. **FAQ Section**
    - 10 Q&As covering HB3512, mixing formats, completion time, recognition, customization, etc.

12. **CTA Section**
    - "Ready to Build AI Expertise Across Your Organization?"
    - Contact buttons and info

13. **Contact Section** (existing component)

### Technical Details:
- Uses existing components: SEO, HeroBackground, Card, Button, Accordion, DirDisclaimer
- Imports icons from lucide-react
- Follows existing page patterns from Training.tsx and HB3512.tsx
- Mobile responsive with grid layouts
- SEO meta tags included

---

## File 2: `src/App.tsx`

Add route for the new page:

```typescript
{ path: "/maisp/training/government-pack", element: <GovernmentPack /> }
```

Add lazy import for GovernmentPack component.

---

## File 3: `src/components/navigation/navigationData.ts`

Update the AI Training children array to add Government Training Pack:

**Current (lines 56-62):**
```typescript
{
  text: "AI Training",
  to: "/maisp/training",
  children: [
    { to: "/maisp/training", text: "Overview" },
    { to: "/maisp/training/catalogue", text: "Course Catalogue" },
    { to: "/maisp/training/hb3512", text: "Texas HB3512 Compliance" }
  ]
}
```

**New:**
```typescript
{
  text: "AI Training",
  to: "/maisp/training",
  children: [
    { to: "/maisp/training", text: "Overview" },
    { to: "/maisp/training/government-pack", text: "Government Training Pack" },
    { to: "/maisp/training/catalogue", text: "Course Catalogue" },
    { to: "/maisp/training/hb3512", text: "Texas HB3512 Compliance" }
  ]
}
```

---

## File 4: `src/components/Footer.tsx`

Add Government Training Pack link in "More Services" section:

**Current (lines 91-96):**
```tsx
<li><Link to="/maisp/training" ...>AI Training</Link></li>
<li><Link to="/maisp/training/catalogue" ...>Training Catalogue</Link></li>
<li><Link to="/maisp/training/hb3512" ...>Texas HB3512 Compliance</Link></li>
```

**New:**
```tsx
<li><Link to="/maisp/training" ...>AI Training</Link></li>
<li><Link to="/maisp/training/government-pack" ...>Government Training Pack</Link></li>
<li><Link to="/maisp/training/catalogue" ...>Training Catalogue</Link></li>
<li><Link to="/maisp/training/hb3512" ...>Texas HB3512 Compliance</Link></li>
```

---

## File 5: `src/pages/Training.tsx`

Add callout banner after "Featured Certifications" section (after line 321):

```tsx
{/* Government Training Pack Banner */}
<section className="py-8">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl p-8 border border-primary/30">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="bg-primary/20 p-4 rounded-xl">
          <Package className="h-12 w-12 text-primary" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Looking for a Complete Government AI Training Solution?</h3>
          <p className="text-muted-foreground">
            The Government AI Training Pack bundles four certifications (AI+ Everyone, AI+ Foundation, AI+ Government, AI+ Ethics) for comprehensive AI literacy across your organization. Save with bundled pricing and volume discounts.
          </p>
        </div>
        <Button size="lg" onClick={() => navigate('/training/government-pack')}>
          Explore Government Training Pack
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>
</section>
```

Also add link to GovAI Training card description (programCategories array, line ~103):

```typescript
{
  icon: Landmark,
  title: "GovAI Training & Compliance",
  description: (<>
    Public sector AI education and regulatory compliance. Navigate TRAIGA requirements, <Link to="/training/hb3512" className="text-primary hover:underline">HB3512 mandates</Link>, AI procurement standards, and citizen-facing AI applications.
    <br/><span className="text-sm">→ <Link to="/training/government-pack" className="text-primary hover:underline">See our Government AI Training Pack</Link></span>
  </>),
  color: "text-orange-500"
}
```

Add imports: `Package`, `ArrowRight` from lucide-react.

---

## File 6: `src/pages/TrainingCatalogue.tsx`

Add info banner after DirDisclaimer and before AI Course Advisor section (after line 164):

```tsx
{/* Government Pack Info Banner */}
<section className="py-4">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
      <div className="flex items-center gap-3">
        <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />
        <p className="text-sm">
          <strong>Government agencies:</strong> Save with our Government AI Training Pack—four certifications bundled at discounted pricing.{' '}
          <Link to="/training/government-pack" className="text-primary hover:underline font-medium">
            Learn more →
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>
```

Add imports: `Info` from lucide-react, `Link` from react-router-dom.

---

## File 7: `src/pages/training/HB3512.tsx`

Add "Complete HB3512 Compliance Solution" section after "Who This Program Is For" section (after line 609):

```tsx
{/* Complete HB3512 Compliance Solution */}
<section className="py-16 bg-gradient-to-b from-background to-muted/20">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete HB3512 Compliance Solution</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Our Government AI Training Pack provides comprehensive coverage of HB3512 requirements with four nationally accredited certifications designed specifically for government employees.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          "Covers all HB3512 mandated topics",
          "Government-specific examples and case studies",
          "Nationally accredited through ProTrain (MSA-CESS)",
          "Available through TXShare Contract #2025-023",
          "Flexible delivery: self-paced, virtual, or in-person",
          "Volume discounts for large deployments"
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <span className="text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
      
      <Button 
        size="lg"
        onClick={() => navigate('/training/government-pack')}
      >
        View Government Training Pack Details
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </div>
</section>
```

Add import: `ArrowRight` from lucide-react.

---

## File 8: `supabase/functions/course-chat/index.ts`

Add Government AI Training Pack knowledge to the system prompt after the accreditation section:

```text
GOVERNMENT AI TRAINING PACK (BUNDLE OFFERING):

The Government AI Training Pack is a comprehensive bundle of four nationally accredited certifications designed specifically for government agencies:

1. AI+ Everyone (8 hours) - Broad AI introduction for all employees
   - What is AI and how it works
   - AI applications across industries
   - AI's impact on work and society
   - Future trends and opportunities

2. AI+ Foundation (4 hours) - Practical prompt engineering and AI tool usage
   - Prompt engineering fundamentals
   - Working with ChatGPT, Copilot, and other tools
   - Practical AI applications for productivity
   - Hands-on labs and exercises

3. AI+ Government (8 hours) - Government-specific applications and Texas compliance
   - Texas HB3512 and TRAIGA compliance
   - Government AI use cases and examples
   - Citizen-facing AI applications
   - Procurement and authorization requirements

4. AI+ Ethics (8 hours) - Responsible AI deployment framework
   - Five principles of responsible AI
   - Bias detection and mitigation
   - Privacy, security, and transparency
   - Human oversight and accountability

Total: 28 hours of progressive, government-focused training

GOVERNMENT PACK PRICING:
- Self-paced: $780 per employee
- Virtual instructor-led: $3,980 per employee
- In-person: $4,130 per employee

VOLUME DISCOUNTS (Self-paced):
- 50-99 employees: 10% off ($702/employee)
- 100-249 employees: 15% off ($663/employee)
- 250-499 employees: 20% off ($624/employee)
- 500+ employees: 25% off ($585/employee)

KEY BENEFITS:
- Designed for HB3512 compliance
- Nationally accredited through ProTrain (MSA-CESS)
- Available through TXShare Contract #2025-023
- Technology-agnostic curriculum
- Proven results with Texas municipalities
- Flexible implementation (pilot → department → citywide)

WHEN TO RECOMMEND THE GOVERNMENT PACK:
- Government agency employees (city, county, state)
- Organizations needing HB3512 compliance
- Agencies wanting comprehensive AI literacy across all staff levels
- Organizations with 25+ employees (volume pricing makes it cost-effective)
- Agencies preferring bundled solutions over individual certifications

SAMPLE RESPONSES:

User: "What training do you recommend for a city government?"
Answer: "For city government, I recommend the Government AI Training Pack. It's specifically designed for public sector employees and includes four certifications covering everything from AI basics to government-specific applications to ethical deployment. It's designed to meet HB3512 requirements and is available through TXShare Contract #2025-023. Would you like to learn more about the pack or see individual certifications?"

User: "We need to train 150 city employees for HB3512 compliance"
Answer: "Perfect! For 150 employees, the Government AI Training Pack is ideal. You'll get 15% volume discount pricing. For self-paced delivery, that's $663 per employee (total: $99,450). The pack includes all four certifications needed for comprehensive HB3512 compliance: AI+ Everyone, AI+ Foundation, AI+ Government, and AI+ Ethics. You can also mix delivery formats—for example, self-paced for frontline staff and virtual instructor-led for managers. Would you like a detailed quote?"

User: "What's the difference between buying certifications individually vs. the Government Pack?"
Answer: "Great question! The Government AI Training Pack bundles four certifications (AI+ Everyone, AI+ Foundation, AI+ Government, AI+ Ethics) into a comprehensive 28-hour program. The bundled pricing is the same as individual courses but provides a structured, progressive learning path. The real savings come from volume discounts—up to 25% off for 500+ employees. The pack is specifically designed for government agencies with HB3512 compliance in mind."
```

---

## Files Affected Summary

| File | Lines Modified/Added | Action |
|------|---------------------|--------|
| `src/pages/training/GovernmentPack.tsx` | ~800 lines | Create new page |
| `src/App.tsx` | ~5 lines | Add route and import |
| `src/components/navigation/navigationData.ts` | ~3 lines | Add menu item |
| `src/components/Footer.tsx` | ~1 line | Add footer link |
| `src/pages/Training.tsx` | ~30 lines | Add callout banner and card link |
| `src/pages/TrainingCatalogue.tsx` | ~15 lines | Add info banner |
| `src/pages/training/HB3512.tsx` | ~40 lines | Add compliance solution section |
| `supabase/functions/course-chat/index.ts` | ~80 lines | Add Pack knowledge |

---

## New Page Component Structure

```text
GovernmentPack.tsx
├── SEO Component (meta tags)
├── HeroBackground
│   └── Hero Section (heading, description, CTAs)
├── DirDisclaimer
├── TXShare Banner
├── What's Included Section
│   └── 4 Certification Cards
├── Why the Government AI Training Pack Section
│   └── 3 Benefit Cards
├── Proven Results Section
│   └── 3 Case Study Cards
├── Pricing & Delivery Options Section
│   ├── 3 Pricing Cards
│   └── Volume Discounts Accordion
├── Implementation Approach Section
│   └── 3 Phase Cards
├── ROI Section
│   └── Example ROI Display
├── Why Choose WhitegloveAI Section
│   └── 6 Value Cards
├── FAQ Section
│   └── 10 Q&A Items
├── CTA Section
└── ContactSection Component
```

---

## Design Consistency

The new page will maintain design consistency by:
- Using existing components (Card, Button, Accordion, HeroBackground)
- Following the same color scheme (purple/blue gradients, primary/secondary colors)
- Matching typography hierarchy from Training.tsx and HB3512.tsx
- Using consistent icon styling from lucide-react
- Maintaining responsive grid layouts (md:grid-cols-2, lg:grid-cols-3)
- Including the same trust signals (TXShare, MSA-CESS, DIR disclaimer)

---

## SEO Configuration

```tsx
<SEO
  title="Government AI Training Pack | Nationally Accredited | WhitegloveAI"
  description="Comprehensive AI training bundle for government agencies. Four nationally accredited certifications covering AI fundamentals, government applications, and ethical deployment. TXShare approved."
  canonicalPath="/maisp/training/government-pack"
/>
```

---

## Expected Outcome

After implementation:
- New dedicated page for Government AI Training Pack at `/maisp/training/government-pack`
- Strategic cross-links from Training, Catalogue, and HB3512 pages
- Updated navigation menu with Government Training Pack option
- Updated footer with new link
- AI Course Advisor can recommend and discuss the Government Pack
- Complete pricing, volume discounts, and ROI information available
- Consistent design and messaging aligned with accreditation updates
