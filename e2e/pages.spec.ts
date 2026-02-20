import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('renders doctor information', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('body')).toContainText(/Haitham/i);
    // Has an image
    const images = page.locator('img');
    await expect(images.first()).toBeVisible();
  });
});

test.describe('Services Page', () => {
  test('renders service offerings', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('body')).toBeVisible();
    // Page has meaningful content (not blank)
    const bodyText = await page.locator('body').textContent();
    expect(bodyText!.length).toBeGreaterThan(100);
  });
});

test.describe('Technology Page', () => {
  test('renders technology content', async ({ page }) => {
    await page.goto('/technology');
    await expect(page.locator('body')).toBeVisible();
    const images = page.locator('img');
    await expect(images.first()).toBeVisible();
  });
});

test.describe('Contact Page', () => {
  test('renders contact information', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('body')).toContainText(/Cairo/i);
    // Has WhatsApp or phone number
    await expect(page.locator('body')).toContainText(/WhatsApp|0599|contact/i);
  });

  test('contact form submits and shows success state', async ({ page }) => {
    await page.goto('/contact');

    // Intercept POST to prevent actual network call (no Netlify Forms in dev)
    await page.route('/', (route) => {
      if (route.request().method() === 'POST') {
        route.fulfill({ status: 200, body: 'OK' });
      } else {
        route.continue();
      }
    });

    // Fill out the form
    await page.fill('#contact-name', 'Test User');
    await page.fill('#contact-email', 'test@example.com');
    await page.fill('#contact-phone', '+201234567890');
    await page.fill('#contact-date', '2026-03-01');
    await page.selectOption('#contact-time', '09:00');

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify success state appears (the "TRANSMISSION RECEIVED" message)
    await expect(page.locator('text=TRANSMISSION RECEIVED')).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Digital Smile Design Page', () => {
  test('renders DSD content', async ({ page }) => {
    await page.goto('/digital-smile-design');
    // Hero uses full-bleed 4K image (no text heading), so check unique body copy
    await expect(page.locator('body')).toContainText(/golden\s*proportion/i);
    // Has hero image
    const images = page.locator('img');
    await expect(images.first()).toBeVisible();
  });
});
