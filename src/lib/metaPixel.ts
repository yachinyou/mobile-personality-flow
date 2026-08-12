declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead(params?: Record<string, unknown>) {
  window.fbq?.("track", "Lead", params);
}
