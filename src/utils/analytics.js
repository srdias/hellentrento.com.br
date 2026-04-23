/**
 * Utilitário de Telemetria e Analytics
 * Integrado com o CRM e ferramentas de marketing (GA4, Meta Pixel).
 */

// Chaves para persistência
const VISITOR_ID_KEY = 'ht_visitor_id';
const TRACKED_SESSIONS_KEY = 'ht_tracked_paths';

/**
 * Gera ou recupera um ID estável para o visitante
 */
const getVisitorId = () => {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
};

/**
 * Extrai parâmetros de marketing da URL
 */
const getUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const params = {};
  
  const keys = [
    'gclid', 'gbraid', 'gad_campaignid', 'fbclid', 'igshid',
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
    'keyword', 'creative', 'matchtype'
  ];

  keys.forEach(key => {
    const value = urlParams.get(key);
    if (value) params[key] = value;
  });

  return params;
};

/**
 * Rastreia visualização de página no CRM (idempotente por sessão)
 */
export const trackPageViewCRM = async () => {
  const currentPath = window.location.pathname + window.location.search;
  
  // Verifica se já rastreamos este path nesta sessão
  const trackedPaths = JSON.parse(sessionStorage.getItem(TRACKED_SESSIONS_KEY) || '[]');
  if (trackedPaths.includes(currentPath)) return;

  const payload = {
    page_path: currentPath,
    referrer: document.referrer || null,
    ...getUrlParams()
  };

  try {
    // Mesma origem via reverse proxy (/api -> backend crm)
    await fetch('/api/tracking/page-view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    // Atualiza registro da sessão
    trackedPaths.push(currentPath);
    sessionStorage.setItem(TRACKED_SESSIONS_KEY, JSON.stringify(trackedPaths));
  } catch (error) {
    if (import.meta.env.DEV) console.error('[Telemetry] Page-view error:', error);
  }
};

/**
 * Rastreia conversão (Lead) no CRM
 */
export const trackLeadCRM = async (section = 'unknown', tema = 'default') => {
  const payload = {
    visitor_id: getVisitorId(),
    page_path: window.location.pathname + window.location.search,
    section,
    tema,
    referrer_hostname: document.referrer ? new URL(document.referrer).hostname : null,
    ...getUrlParams()
  };

  try {
    await fetch('/api/leads/from-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    if (import.meta.env.DEV) console.error('[Telemetry] Lead error:', error);
  }
};

/**
 * Wrapper para eventos múltiplos (Google, Meta e CRM)
 */
export const trackEvent = (eventName, params = {}) => {
  // 1. Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  // 2. Meta Pixel
  if (window.fbq) {
    window.fbq('track', eventName, params);
  }

  // Log de Debug
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Evento: ${eventName}`, params);
  }
};

/**
 * Função principal para cliques no WhatsApp
 */
export const handleWhatsAppClick = async (location, section = 'general') => {
  // Dispara rastreamento de lead no CRM (fire-and-forget-ish)
  trackLeadCRM(section, location);
  
  // Dispara eventos padrão
  trackEvent('contact_click', {
    method: 'whatsapp',
    location: location,
    section: section,
    content_type: 'cta_button'
  });
};
