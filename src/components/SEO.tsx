import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/maisp"
  image?: string; // absolute or relative to site root
  noindex?: boolean;
  schemas?: object | object[]; // JSON-LD objects
}

const SITE_URL = 'https://www.whitegloveai.com';

function setOrCreateMeta(name: string, content: string) {
  if (!content) return;
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function setOrCreateProperty(property: string, content: string) {
  if (!content) return;
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  if (!href) return;
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function SEO({ title, description, canonicalPath, image = '/og-image.png', noindex, schemas }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    if (description) setOrCreateMeta('description', description);

    // Canonical
    const path = canonicalPath ?? window.location.pathname + window.location.search;
    const canonicalUrl = `${SITE_URL}${path}`;
    setOrCreateLink('canonical', canonicalUrl);

    // Open Graph
    setOrCreateProperty('og:title', title);
    if (description) setOrCreateProperty('og:description', description);
    setOrCreateProperty('og:type', 'website');
    setOrCreateProperty('og:url', canonicalUrl);
    setOrCreateProperty('og:image', image.startsWith('http') ? image : `${SITE_URL}${image}`);

    // Twitter
    setOrCreateMeta('twitter:card', 'summary_large_image');
    setOrCreateMeta('twitter:title', title);
    if (description) setOrCreateMeta('twitter:description', description);
    setOrCreateMeta('twitter:image', image.startsWith('http') ? image : `${SITE_URL}${image}`);

    // Robots
    if (noindex) {
      setOrCreateMeta('robots', 'noindex, nofollow');
    } else {
      // Only set index if not explicitly noindex
      setOrCreateMeta('robots', 'index, follow');
    }

    // JSON-LD Structured Data
    const schemaArray = Array.isArray(schemas) ? schemas : schemas ? [schemas] : [];
    const createdScripts: HTMLScriptElement[] = [];
    schemaArray.forEach(obj => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.text = JSON.stringify(obj);
      document.head.appendChild(script);
      createdScripts.push(script);
    });

    return () => {
      // Cleanup JSON-LD we added
      createdScripts.forEach(s => s.remove());
    };
  }, [title, description, canonicalPath, image, noindex, JSON.stringify(schemas)]);

  return null;
}
