// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows header', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const header = await page.$('#header')
  expect(header).not.toBeNull()
})

test('header redirect to index', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  await page.waitForSelector('#header')
  await page.click('#demo-streaming')

  // Verificar que redirige la página de inicio
  const url = page.url()
  console.log(url)
  expect(url).toBe(`${LOCALHOST_URL}index`)
})

test('app shows home buttons', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const main = await page.$('#home')
  const botones = await main.$$('button')
  expect(botones.length).toBe(2)
  const textoBoton1 = await botones[0].innerText()
  const textoBoton2 = await botones[1].innerText()
  expect(textoBoton1).toBe('MOVIES')
  expect(textoBoton2).toBe('SERIES')
})

test('buttons do the fetch', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const main = await page.$('#home')
  const boton = await main.$$('button')
  await boton[0].click()
  await boton[1].click()

  // Esperar a que se produzca la solicitud fetch
  const respuesta = await page.waitForResponse('http://localhost:3000/entries')
  const datos = await respuesta.json()
  expect(Object.keys(datos[0]).length).toBeGreaterThan(0)
})

test('app shows footer', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const footer = await page.$('#footer')
  const isVisible = await footer.isVisible()
  expect(isVisible).toBe(true)
})
