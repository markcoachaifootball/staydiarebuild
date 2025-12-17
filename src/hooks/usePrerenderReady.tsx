import { useEffect } from 'react';

/**
 * Hook to signal Netlify Prerender Extension that page content is ready.
 * Call this in any page component once critical content has loaded.
 *
 * @param isReady - Optional boolean to delay the signal until data is loaded
 */
export const usePrerenderReady = (isReady: boolean = true) => {
  // Ensure the prerender flag exists and defaults to false, so prerenderers wait correctly.
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).prerenderReady === undefined) {
      (window as any).prerenderReady = false;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isReady) {
      (window as any).prerenderReady = true;

      // Helpful marker for debugging: should appear in prerendered HTML snapshots.
      try {
        document.documentElement.setAttribute('data-prerender-ready', 'true');
        let tag = document.querySelector('meta[name="x-prerender-ready"]') as HTMLMetaElement | null;
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', 'x-prerender-ready');
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', 'true');
      } catch {
        // no-op
      }
    }
  }, [isReady]);
};

