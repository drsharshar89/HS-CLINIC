/**
 * Web Vitals — Report Core Web Vitals to Google Analytics 4.
 * Tracks LCP, FID, CLS, FCP, TTFB.
 * These metrics directly affect Google Search ranking.
 */
import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

/** Extend Window with gtag from index.html */
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function sendToGA4(metric: Metric) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
    event_category: 'Web Vitals',
    event_label: metric.id,
    non_interaction: true,
  });
}

export function reportWebVitals() {
  onCLS(sendToGA4);
  onINP(sendToGA4);
  onLCP(sendToGA4);
  onFCP(sendToGA4);
  onTTFB(sendToGA4);
}
