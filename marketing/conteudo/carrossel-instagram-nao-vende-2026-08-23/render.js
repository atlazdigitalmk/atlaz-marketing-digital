const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const sandboxChromium = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
  const launchOpts = { args: ['--disable-lcd-text', '--font-render-hinting=none'] };
  if (fs.existsSync(sandboxChromium)) launchOpts.executablePath = sandboxChromium;
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto('file://' + path.resolve(__dirname, 'carrossel.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.resolve(__dirname, `instagram/slide-${num}.png`) });
  }

  await browser.close();
  console.log(`Renderizado: ${slides.length} slides.`);
})();
