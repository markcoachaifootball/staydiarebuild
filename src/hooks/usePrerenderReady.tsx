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
    if (isReady && typeof window !== 'undefined') {
      (window as any).prerenderReady = true;
    }
  }, [isReady]);
};
