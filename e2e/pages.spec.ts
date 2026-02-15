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
