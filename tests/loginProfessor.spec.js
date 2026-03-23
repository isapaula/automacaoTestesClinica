
import { test, expect } from '@playwright/test';

test('Deve logar como professor', async ({ page }) => {
  await page.goto('http://localhost/Psychology-clinic-project/public/home.html');
  await page.getByRole('navigation').getByRole('link', { name: 'Login/Cadastro' }).click();
  await expect(page.getByRole('heading', { name: 'Tela de Login' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Digite seu e-mail' }).click();
  await page.getByRole('textbox', { name: 'Digite seu e-mail' }).fill('heloise-dasilva71@hidrara.com.br');
  await page.getByRole('textbox', { name: '*********' }).click();
  await page.getByRole('textbox', { name: '*********' }).fill('p4I3SDOatb');
  await page.getByRole('button', { name: 'Logar' }).click();
  await expect(page.getByRole('heading', { name: 'Segue as solicitações' })).toBeVisible();
});