import { test, expect } from '@playwright/test'

test('should test the forgot password link', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About' and click on it
  await page.click('text=Forgot your password?')
  // The new URL should be "/" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/')
  // The new page should contain a h1 with "About"
  await expect(page.locator('h1')).toContainText('Welcome back 👋')
})
