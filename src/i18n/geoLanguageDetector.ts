// Custom i18next language detector plugin that uses IP geolocation
// to determine the user's country and map it to a supported language.

const MANUAL_LANG_KEY = 'i18n_manual_lang';

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

export function markManualLanguageSelection() {
  localStorage.setItem(MANUAL_LANG_KEY, 'true');
}

export function hasManualLanguageSelection(): boolean {
  return localStorage.getItem(MANUAL_LANG_KEY) === 'true';
}

const geoLanguageDetector = {
  name: 'geoLocation',
  
  lookup(): string | undefined {
    // Don't override if user has manually selected a language via the switcher
    if (hasManualLanguageSelection()) return undefined;
    
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
    if (hasManualLanguageSelection()) return;
    
    const response = await fetch('https://api.country.is/', { 
      signal: AbortSignal.timeout(3000) 
    });
    
    if (!response.ok) return;
    
    const data = await response.json();
    const countryCode = data?.country;
    
    if (countryCode && countryToLanguage[countryCode]) {
      const detectedLang = countryToLanguage[countryCode];
      sessionStorage.setItem('geoDetectedLng', detectedLang);
      
      if (!hasManualLanguageSelection()) {
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
