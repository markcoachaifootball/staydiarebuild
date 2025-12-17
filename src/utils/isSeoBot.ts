export const isSeoBotUserAgent = (ua?: string) => {
  if (typeof ua === 'string') {
    return /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|HeadlessChrome|Prerender|Rendertron/i.test(
      ua
    );
  }

  if (typeof navigator === 'undefined') return false;
  return /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|HeadlessChrome|Prerender|Rendertron/i.test(
    navigator.userAgent
  );
};
