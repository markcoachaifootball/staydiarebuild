// Custom i18next language detector plugin that uses IP geolocation
// to determine the user's country and map it to a supported language.

const countryToLanguage: Record<string, string> = {
  // Dutch-speaking
  NL: 'nl', // Netherlands
  BE: 'nl', // Belgium (Dutch/French - defaulting to Dutch)
  SR: 'nl', // Suriname
  
  // French-speaking
  FR: 'fr', // France
  MC: 'fr', // Monaco
  LU: 'fr', // Luxembourg
  SN: 'fr', // Senegal
  CI: 'fr', // Ivory Coast
  ML: 'fr', // Mali
  BF: 'fr', // Burkina Faso
  NE: 'fr', // Niger
  TG: 'fr', // Togo
  BJ: 'fr', // Benin
  GA: 'fr', // Gabon
  CG: 'fr', // Congo
  CD: 'fr', // DR Congo
  CM: 'fr', // Cameroon
  MG: 'fr', // Madagascar
  HT: 'fr', // Haiti
  
  // German-speaking
  DE: 'de', // Germany
  AT: 'de', // Austria
  CH: 'de', // Switzerland
  LI: 'de', // Liechtenstein
};

const geoLanguageDetector = {
  name: 'geoLocation',
  
  lookup(): string | undefined {
    // Don't override if user has already manually selected a language
    const manualSelection = localStorage.getItem('i18nextLng');
    if (manualSelection) return undefined;
    
    // Check if we already cached the geo-detected language
    const cached = sessionStorage.getItem('geoDetectedLng');
    if (cached) return cached;
    
    // Trigger async detection (won't block initial render)
    detectCountry();
    
    return undefined;
  },
  
  cacheUserLanguage(): void {
    // Caching handled by sessionStorage in detectCountry
  },
};

async function detectCountry() {
  try {
    // Skip if user already has a manual selection
    if (localStorage.getItem('i18nextLng')) return;
    
    const response = await fetch('https://ipapi.co/json/', { 
      signal: AbortSignal.timeout(3000) 
    });
    
    if (!response.ok) return;
    
    const data = await response.json();
    const countryCode = data?.country_code;
    
    if (countryCode && countryToLanguage[countryCode]) {
      const detectedLang = countryToLanguage[countryCode];
      sessionStorage.setItem('geoDetectedLng', detectedLang);
      
      // Only change if no manual selection exists
      if (!localStorage.getItem('i18nextLng')) {
        // Dynamically import i18n to change language
        const { default: i18n } = await import('./index');
        if (i18n.language !== detectedLang) {
          i18n.changeLanguage(detectedLang);
          document.documentElement.lang = detectedLang;
        }
      }
    }
  } catch {
    // Silently fail - fall back to browser language detection
  }
}

export default geoLanguageDetector;
