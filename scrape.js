const { chromium } = require('@playwright/test');

const seeds = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let total = 0;

  for (const seed of seeds) {
    const url = `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`;
    await page.goto(url, { waitUntil: 'networkidle' });

    await page.waitForSelector('table', { timeout: 10000 });

    const texts = await page.$$eval('table tr td', (cells) =>
      cells.map((cell) => cell.textContent.trim())
    );

    for (const text of texts) {
      const num = parseFloat(text);
      if (!isNaN(num)) {
        total += num;
      }
    }
  }

  console.log("Total sum of all numbers:", total);
  await browser.close();
}

main().catch(console.error);
