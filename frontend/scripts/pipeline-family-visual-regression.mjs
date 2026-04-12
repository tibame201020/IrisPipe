import fs from 'node:fs/promises'
import path from 'node:path'

const BASE_URL = process.env.IRISPIPE_VISUAL_BASE_URL ?? 'http://127.0.0.1:4206'
const PIPELINE_ID = process.env.IRISPIPE_VISUAL_PIPELINE_ID ?? '56'
const RUN_ID = process.env.IRISPIPE_VISUAL_RUN_ID ?? '1'
const OUTPUT_DIR = path.resolve(process.cwd(), 'tests/visual-snapshots/current')

const routes = [
  { key: 'config', path: `/pipeline/items/${PIPELINE_ID}/config` },
  { key: 'runs', path: `/pipeline/items/${PIPELINE_ID}/runs` },
  { key: 'run-detail', path: `/pipeline/items/${PIPELINE_ID}/runs/${RUN_ID}` },
]

async function loadPlaywright() {
  try {
    return await import('playwright')
  } catch (error) {
    console.error('[visual-regression] Playwright is not installed. Install `playwright` to run screenshot regression.')
    throw error
  }
}

async function capture() {
  const { chromium } = await loadPlaywright()
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  const browser = await chromium.launch({ headless: true })

  try {
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width: 1728, height: 972 } })
      const page = await context.newPage()
      await page.addInitScript(([themeName]) => {
        window.localStorage.setItem('irispipe-console-theme', themeName)
      }, [theme])

      for (const route of routes) {
        const url = `${BASE_URL}${route.path}`
        await page.goto(url, { waitUntil: 'networkidle' })
        const file = path.join(OUTPUT_DIR, `${route.key}.${theme}.png`)
        await page.screenshot({ path: file, fullPage: true })
        console.log(`[visual-regression] captured ${file}`)
      }

      await context.close()
    }
  } finally {
    await browser.close()
  }
}

capture().catch((error) => {
  console.error('[visual-regression] failed:', error)
  process.exitCode = 1
})
