/**
 * Utilitário de Analytics para a Agência Tony
 * Focado em rastreamento de conversão e eventos.
 */

export const trackEvent = (eventName, params = {}) => {
  // Rastreamento GA4 (se houver gtag instalado)
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  // Rastreamento Meta Pixel (se houver fbq instalado)
  if (window.fbq) {
    window.fbq('track', eventName, params);
  }

  // Log para depuração em ambiente de desenvolvimento
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Evento: ${eventName}`, params);
  }
};

export const trackWhatsAppClick = (location) => {
  trackEvent('contact_click', {
    method: 'whatsapp',
    location: location,
    content_type: 'cta_button'
  });
};
