import { test, expect } from '@playwright/test';

test.describe('Navigation — Robot User Journey', () => {
  test('navigates through all pages without errors', async ({ page }) => {
    // Start at Home
    await page.goto('/');
    await expect(page).toHaveTitle(/Dr\. Haitham Sharshar/i);

    // Click About
    await page.getByRole('link', { name: 'About' }).first().click();
    await page.waitForURL('/about');
    await expect(page.locator('body')).toContainText(/Haitham/i);

    // Click Services
    await page.getByRole('link', { name: 'Services' }).first().click();
    await page.waitForURL('/services');
    await expect(page.locator('body')).toBeVisible();

    // Click Technology
    await page.getByRole('link', { name: 'Technology' }).first().click();
    await page.waitForURL('/technology');
    await expect(page.locator('body')).toBeVisible();

    // Click Smile Design
    await page.getByRole('link', { name: 'Smile Design' }).first().click();
    await page.waitForURL('/digital-smile-design');
    await expect(page.locator('body')).toBeVisible();

    // Click Dental Tourism
    await page.getByRole('link', { name: 'Dental Tourism' }).first().click();
    await page.waitForURL('/dental-tourism');
    await expect(page.locator('body')).toBeVisible();

    // Click Contact
    await page.getByRole('link', { name: 'Contact' }).first().click();
    await page.waitForURL('/contact');
    await expect(page.locator('body')).toBeVisible();
  });

  test('clicking logo returns to home', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    // Click the logo link
    const logoLink = page.locator('a[href="/"]').first();
    await expect(logoLink).toBeVisible();
    await logoLink.click();
    // Verify we're back at home
    await expect(page).toHaveURL('/');
  });
});
