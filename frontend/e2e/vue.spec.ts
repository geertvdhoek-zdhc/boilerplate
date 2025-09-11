import { test, expect } from '@playwright/test'

test('visits the landing page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Build Something Amazing' })).toBeVisible()
})

test('can navigate between auth modes', async ({ page }) => {
  await page.goto('/')
  
  // Should show login form initially
  await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible()
  
  // Click sign up link
  await page.getByText('Sign up here').click()
  
  // Should show register form
  await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible()
  
  // Click back to login
  await page.getByText('Sign in here').click()
  
  // Should show login form again
  await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible()
})
