

# Plan: Add Proper SEO for Government Training Pack Page

This plan adds the Government Training Pack page to the sitemap and enhances the SEO with JSON-LD structured data for better search engine visibility.

---

## Current Status

| Item | Status |
|------|--------|
| Navigation menu (`navigationData.ts`) | Already listed at `/maisp/training/government-pack` |
| Footer (`Footer.tsx`) | Already listed with link to page |
| Basic SEO (title, description, canonical) | Already implemented in `GovernmentPack.tsx` |
| Sitemap (`sitemap.xml`) | **Missing** - needs to be added |
| JSON-LD structured data | **Missing** - should be added for rich search results |

---

## Changes Required

### File 1: `public/sitemap.xml`

Add the Government Training Pack page entry after the existing training entries (after line 130):

**New Entry:**
```xml
  <url>
    <loc>https://whitegloveai.com/maisp/training/government-pack</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
```

Priority is set to 0.9 (high) because this is a key product page for government sales.

---

### File 2: `src/pages/training/GovernmentPack.tsx`

Enhance the SEO component (lines 294-298) to include JSON-LD structured data:

**Current:**
```tsx
<SEO
  title="Government AI Training Pack | 4 Certifications for HB3512 Compliance | WhitegloveAI"
  description="Comprehensive AI training bundle for government agencies. Four nationally accredited certifications (28 hours) covering AI fundamentals, government applications, and ethical deployment. TXShare approved, HB3512 aligned."
  canonicalPath="/maisp/training/government-pack"
/>
```

**New:**
```tsx
<SEO
  title="Government AI Training Pack | 4 Certifications for HB3512 Compliance | WhitegloveAI"
  description="Comprehensive AI training bundle for government agencies. Four nationally accredited certifications (28 hours) covering AI fundamentals, government applications, and ethical deployment. TXShare approved, HB3512 aligned."
  canonicalPath="/maisp/training/government-pack"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Government AI Training Pack",
      "description": "Comprehensive AI literacy program for public sector employees. Four nationally accredited certifications covering AI fundamentals, government applications, and ethical deployment.",
      "provider": {
        "@type": "Organization",
        "name": "WhitegloveAI",
        "sameAs": "https://whitegloveai.com"
      },
      "educationalCredentialAwarded": "AI+ Certifications (Everyone, Foundation, Government, Ethics)",
      "timeRequired": "PT28H",
      "coursePrerequisites": "None",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "online",
          "name": "Self-Paced Online Training"
        },
        {
          "@type": "CourseInstance",
          "courseMode": "online",
          "name": "Virtual Instructor-Led Training"
        },
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "name": "In-Person Training"
        }
      ],
      "offers": {
        "@type": "Offer",
        "price": "780",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Government employees, public sector workers, state and local agencies"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Government AI Training Pack",
      "description": "Four nationally accredited AI certifications bundled for government agencies. TXShare Contract #2025-023 approved.",
      "brand": {
        "@type": "Brand",
        "name": "WhitegloveAI"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "585",
        "highPrice": "4130",
        "priceCurrency": "USD",
        "offerCount": "3"
      }
    }
  ]}
/>
```

The JSON-LD includes:
- **Course schema**: For Google's rich results for educational content
- **Product schema**: For price range visibility in search results
- Multiple course delivery modes (self-paced, virtual, in-person)
- Audience targeting for government employees
- Price range from $585 (volume discount) to $4,130 (in-person)

---

## Files Affected Summary

| File | Lines Modified | Action |
|------|----------------|--------|
| `public/sitemap.xml` | ~5 lines | Add new URL entry |
| `src/pages/training/GovernmentPack.tsx` | ~55 lines | Add JSON-LD schemas to SEO component |

---

## Verification Already Complete

The page is already properly listed in:
- Navigation menu: "AI Training" > "Government Training Pack"
- Footer: "More Services" section includes "Government Training Pack"

---

## SEO Benefits

After implementation:
- Page will be discoverable via sitemap for search engine crawlers
- Rich search results with course and pricing information
- Better visibility for "government AI training" searches
- Price range displayed in search results
- Course duration (28 hours) visible in rich snippets
- Audience targeting improves relevance for government-related queries

