import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/technology',
  '/digital-smile-design',
  '/dental-tourism',
  '/dental-tourism/program',
  '/gallery',
  '/contact',
  '/services/dental-implants',
  '/services/tmj-tmd-treatment',
  '/services/clear-aligners',
  '/services/full-arch-rehabilitation',
  '/guarantee',
  '/privacy-policy',
  '/terms-of-service',
  '/medical-disclaimer',
];

test.describe('Visual & Responsive QA Audit', () => {
  // We'll iterate through all routes and take full-page screenshots for Desktop and Mobile.
  for (const route of ROUTES) {
    test.describe(`Route: ${route}`, () => {
      test(`Desktop - ${route}`, async ({ page }) => {
        // Desktop viewport (default in standard config is often ~1280x720, but let's be explicit)
        await page.setViewportSize({ width: 1440, height: 900 });
        await page.goto(route);
        // Wait for animations and images to settle
        await page.waitForLoadState('networkidle');
        // Basic assertion to ensure page loaded
        await expect(page.locator('body')).toBeVisible();

        // Take a full-page screenshot
        const safeRouteName = route === '/' ? 'home' : route.split('/').join('-').replace(/^-/, '');
        await page.screenshot({
          path: `visual-audit/desktop/${safeRouteName}.png`,
          fullPage: true,
        });
      });

      test(`Mobile - ${route}`, async ({ page }) => {
        // Mobile viewport (iPhone 13 Pro size)
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto(route);
        // Wait for animations and images to settle
        await page.waitForLoadState('networkidle');
        // Basic assertion to ensure page loaded
        await expect(page.locator('body')).toBeVisible();

        // Take a full-page screenshot
        const safeRouteName = route === '/' ? 'home' : route.split('/').join('-').replace(/^-/, '');
        await page.screenshot({ path: `visual-audit/mobile/${safeRouteName}.png`, fullPage: true });
      });
    });
  }
});
