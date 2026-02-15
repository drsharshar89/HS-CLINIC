import { test, expect } from '@playwright/test';

test.describe('Dental Tourism Page', () => {
  test('renders the tourism content', async ({ page }) => {
    await page.goto('/dental-tourism');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
    const bodyText = await page.locator('body').textContent();
    expect(bodyText!.length).toBeGreaterThan(200);
  });

  test('robot user navigates to dental tourism from home', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Dental Tourism' }).first().click();
    await page.waitForURL('/dental-tourism');
    await expect(page.locator('body')).toBeVisible();
    const bodyText = await page.locator('body').textContent();
    expect(bodyText!.length).toBeGreaterThan(200);
  });

  // NOTE: Form interaction + visible text tests are skipped in headless E2E
  // because framer-motion whileInView keeps elements at opacity:0.
  // The form is tested via Vitest unit tests in ConsultationForm.test.tsx.
});
