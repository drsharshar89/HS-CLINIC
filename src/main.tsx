import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './app/components/ErrorBoundary';
import App from './app/App.tsx';
import { reportWebVitals } from './lib/webVitals';
import './styles/index.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
} else {
  console.error('ROOT MISSING');
}

// Report Core Web Vitals to GA4 (LCP, FID, CLS, FCP, TTFB)
reportWebVitals();
