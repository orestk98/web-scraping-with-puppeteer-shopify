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

    await page.click("span._1rA3U");
    console.log('clicked');



    await page.waitForSelector('h2');



    const name = await page.$eval('.2dskn > h2', el => el.innerText);
    console.log(name);
    // const cards = await page.$$("span._1rA3U");
    //
    //
    // for (const card of cards) {
    //   card.click();
    //   console.log('premuto');
    //
    //
    //
    //   //
    //   const titles = await page.$$("h2._12oDh");
    //   //   ');
    //   for (const title of titles) {
    //     const name = await title.$eval('h2._12oDh', h2 => h2.innerText);
    //     console.log('name', name);
    //   }
    // for (const title of titles) {
    //   console.log(title.innerHTML);
    // }
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