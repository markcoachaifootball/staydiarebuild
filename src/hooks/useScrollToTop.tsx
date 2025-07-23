
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top of the page when route changes
 */
export function useScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Use setTimeout to ensure the DOM is fully rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
}
