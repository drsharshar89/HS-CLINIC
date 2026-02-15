import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads and shows the hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dr\. Haitham Sharshar/i);
    // Hero section visible
    await expect(page.locator('body')).toBeVisible();
  });

  test('navigation bar renders all links', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // All nav links present
    await expect(nav.getByText('About')).toBeVisible();
    await expect(nav.getByText('Services')).toBeVisible();
    await expect(nav.getByText('Technology')).toBeVisible();
    await expect(nav.getByText('Dental Tourism')).toBeVisible();
    await expect(nav.getByText('Contact')).toBeVisible();
  });

  test('footer renders copyright', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('Dr. Haitham Sharshar');
  });
});
