import { test, expect } from '@playwright/test';

test.describe('Gallery Page', () => {
  test('renders before/after gallery content', async ({ page }) => {
    await page.goto('/gallery');
    await expect(page.locator('body')).toContainText(/before.*after|gallery/i);
    // Has meaningful content (not blank)
    const bodyText = await page.locator('body').textContent();
    expect(bodyText!.length).toBeGreaterThan(100);
  });
});

test.describe('Service Pillar Pages', () => {
  test('Dental Implants page renders', async ({ page }) => {
    await page.goto('/services/dental-implants');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText(/implant/i);
    // Has FAQ section
    await expect(page.locator('body')).toContainText(/frequently asked/i);
  });

  test('TMJ/TMD Treatment page renders', async ({ page }) => {
    await page.goto('/services/tmj-tmd-treatment');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText(/TMD|TMJ/i);
    // Has FAQ section
    await expect(page.locator('body')).toContainText(/frequently asked/i);
  });

  test('Clear Aligners page renders', async ({ page }) => {
    await page.goto('/services/clear-aligners');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText(/aligner/i);
    // Has FAQ section
    await expect(page.locator('body')).toContainText(/frequently asked/i);
  });

  test('Full Arch Rehabilitation page renders', async ({ page }) => {
    await page.goto('/services/full-arch-rehabilitation');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText(/full.arch|all-on-4/i);
    // Has FAQ section
    await expect(page.locator('body')).toContainText(/frequently asked/i);
  });

  test('service subpages have breadcrumb navigation', async ({ page }) => {
    await page.goto('/services/dental-implants');
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toContainText('Home');
    await expect(breadcrumb).toContainText('Services');
  });

  test('service subpage CTA links to contact', async ({ page }) => {
    await page.goto('/services/dental-implants');
    // Click primary CTA
    const cta = page.locator('a[href="/contact"]').first();
    await expect(cta).toBeVisible();
    await cta.click();
    await page.waitForURL('/contact');
    await expect(page.locator('body')).toBeVisible();
  });
});
