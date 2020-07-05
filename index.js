const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
    await page.goto('https://experts.shopify.com/', {
      waitUntil: 'networkidle2'
    });

    await page.waitForSelector('main');
    const card = await page.$("div.Polaris-Card > div > img");




    card.click();
    // console.log('premuto');
    //
    const title = await page.$("div.Polaris-Card > div > div > div:nth-child(2) > h2");
    console.log(title.innerHTML);


    // cards[0].click();
    // await page.waitForSelector('.Polaris-Card');
    // const lis = await page.$$('.Polaris-Card');
    // lis[0].click();
    //

    // if (cards) {
    //   console.log('carte selezionate');
    // }

  } catch (e) {
    console.log('our error:', e);
  }
})();