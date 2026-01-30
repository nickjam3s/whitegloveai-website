

# Plan: Update Training Pages with National Accreditation Messaging

This plan updates the three WhitegloveAI training pages (`/maisp/training`, `/maisp/training/catalogue`, `/maisp/training/hb3512`) to add nationally accredited training messaging through ProTrain, a Middle States (MSA-CESS) accredited institution.

---

## Summary of Changes

| Page | Changes |
|------|---------|
| `/maisp/training` | Update hero text, update "Industry Recognition" card, add "Training You Can Trust" section, remove AICerts Partner section |
| `/maisp/training/catalogue` | Update hero text, remove AICerts Partner section |
| `/maisp/training/hb3512` | Update "Your Compliance Partner" text, add "Nationally Accredited Provider" item to compliance grid |

---

## File: `src/pages/Training.tsx`

### Change 1: Update Hero Section Text (Line 141-142)

**Current:**
```
Empower your workforce with industry-leading AI training and certifications through WhitegloveAI, an authorized training partner of AICerts.
```

**New:**
```
Empower your workforce with nationally accredited AI training and certifications through WhitegloveAI—delivered by ProTrain, a Middle States accredited educational institution meeting the highest standards of quality and excellence.
```

### Change 2: Update "Industry Recognition" Card to "Nationally Accredited Training" (Lines 62-65)

**Current (in benefits array):**
```typescript
{
  icon: Award,
  title: "Industry Recognition",
  description: "IACET accreditation coming Jan 2026 – CEUs accepted by major professional organizations"
}
```

**New:**
```typescript
{
  icon: Award,
  title: "Nationally Accredited Training",
  description: "Delivered through ProTrain, a Middle States (MSA-CESS) accredited institution—meeting rigorous national standards for educational quality. IACET accreditation coming Jan 2026."
}
```

### Change 3: Add "Training You Can Trust" Section

Insert a new section after "Why Choose WhitegloveAI Training?" (after line 216) and before the TXShare Announcement Bar.

**New Section:**
```text
Section heading: "Training You Can Trust"
Subheading: "Nationally Accredited. Professionally Recognized. Government-Approved."

Body paragraph:
"WhitegloveAI delivers AI training through ProTrain, a Middle States Association (MSA-CESS) nationally accredited institution, ensuring every course meets rigorous standards for educational quality, instructor expertise, and learner outcomes. Our programs are designed for government agencies, enterprises, and professionals who demand excellence and accountability in professional development."

Three badges displayed horizontally:
1. MSA-CESS Accredited Institution (Shield icon with text)
2. TXShare Approved (use existing TXShare branding)
3. ProTrain Authorized Partner (Badge with text)
```

### Change 4: Remove AICerts Partner Section (Lines 438-453)

Delete the entire "Partner Badge Section" that displays the AICerts badge and partner text.

### Change 5: Remove AICerts Import (Line 11)

Remove the unused import:
```typescript
import aicertsBadge from "@/assets/aicerts-partner-badge.png";
```

---

## File: `src/pages/TrainingCatalogue.tsx`

### Change 1: Update Hero Section Text (Lines 151-152)

**Current:**
```
Empower your workforce with industry-leading AI training and certifications through WhitegloveAI, an authorized training partner of AICerts.
```

**New:**
```
Empower your workforce with nationally accredited AI training and certifications through WhitegloveAI, delivering training through ProTrain, a Middle States accredited institution.
```

### Change 2: Remove AICerts Partner Section (Lines 293-308)

Delete the entire "Partner Badge Section" that includes:
- The AICerts badge image
- "AICerts Partner" heading
- Partner description text

### Change 3: Remove AICerts Import (Line 10)

Remove the unused import:
```typescript
import aicertsBadge from "@/assets/aicerts-partner-badge.png";
```

---

## File: `src/pages/training/HB3512.tsx`

### Change 1: Update "Your Compliance Partner" Text (Lines 204-209)

**Current:**
```
WhitegloveAI built its AI Training & Certification Program specifically for HB3512 compliance: 
modern, accessible, and aligned to the same rigorous governance principles we use to serve enterprise, 
public sector, and SLED organizations.
```

**New:**
```
WhitegloveAI built its nationally accredited AI Training & Certification Program specifically for HB3512 compliance—delivered through ProTrain, a Middle States (MSA-CESS) accredited institution. Our programs are modern, accessible, and aligned to the rigorous governance principles government agencies require.
```

### Change 2: Add "Nationally Accredited Provider" Item (Lines 553-584)

Add a new item to the compliance features grid:

```typescript
{
  icon: Award, // Import Award from lucide-react
  title: "Nationally Accredited Provider",
  description: "Training delivered through a Middle States (MSA-CESS) accredited institution—meeting federal and state requirements for professional development quality and educational standards."
}
```

This will be added to the existing 6-item grid, making it a 7-item grid.

### Change 3: Add Award Icon Import (Line 7)

Add `Award` to the lucide-react imports.

---

## Visual Badge Components

Create simple badge components using existing design patterns (no external images needed):

### Badge 1: MSA-CESS Accredited Institution
```text
Design: Shield icon with "MSA-CESS" on top line, "Accredited Institution" below
Colors: Navy blue background, white text (matching brand)
Size: ~120px wide
```

### Badge 2: TXShare Approved
```text
Use existing TXShare styling from the announcement bars
Simple text badge: "TXShare Approved"
```

### Badge 3: ProTrain Authorized Partner
```text
Design: Simple rectangular badge
Text: "ProTrain" on top, "Authorized Partner" below
Colors: Brand purple gradient
Size: ~120px wide
```

---

## Implementation Sequence

### Phase 1: High Priority (Training.tsx)
1. Update hero section text
2. Update "Industry Recognition" to "Nationally Accredited Training" in benefits array
3. Add "Training You Can Trust" section with badge components
4. Remove AICerts Partner section and import

### Phase 2: Medium Priority (TrainingCatalogue.tsx)
5. Update hero section text
6. Remove AICerts Partner section and import

### Phase 3: Medium Priority (HB3512.tsx)
7. Update "Your Compliance Partner" text
8. Add "Nationally Accredited Provider" to compliance grid
9. Add Award icon import

---

## Technical Details

### New Component: Trust Badges

Create inline badge components within the "Training You Can Trust" section using:
- Existing Card component styling
- Shield icon from lucide-react for MSA-CESS badge
- Award icon from lucide-react for ProTrain badge
- Consistent sizing with `w-[120px]` constraint

### Section Styling

The new "Training You Can Trust" section will use:
- `py-16 bg-muted/20` for light background differentiation
- Centered content with `max-w-4xl mx-auto`
- Horizontal badge layout: `flex justify-center gap-8 flex-wrap`
- Consistent with "Industry-Recognized Accreditation" section styling

### Files Affected

| File | Lines Modified | Action |
|------|----------------|--------|
| `src/pages/Training.tsx` | ~50 lines | Modify hero, benefits, add section, remove section |
| `src/pages/TrainingCatalogue.tsx` | ~20 lines | Modify hero, remove section |
| `src/pages/training/HB3512.tsx` | ~15 lines | Modify text, add grid item, add import |

---

## What Remains Unchanged

Per the requirements, these elements will NOT be modified:
- AI Course Advisor widget
- Course catalogue listings and filters
- Featured certifications section
- "Our Training Programs" section
- TXShare messaging and badges
- HB3512 compliance details and requirements
- Contact forms and CTAs
- Navigation and footer
- All existing interactive functionality

---

## Expected Outcome

**Before:** "Industry-leading AI training through WhitegloveAI, an authorized training partner of AICerts"

**After:** "Nationally accredited AI training through WhitegloveAI, delivered by ProTrain, a Middle States accredited institution"

This update will:
- Strengthen trust signals for government buyers
- Clarify the ProTrain partnership (not AICerts)
- Add dedicated accreditation section with visual badges
- Align messaging with HB3512 requirements for accredited training

