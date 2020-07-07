const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url="https://marketingplatform.google.com/about/partners/find-a-partner?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fpartners%2F"
  await page.goto(url);
await page.waitFor('h3.title');
await page.waitFor('div.logo-wrapper a img');
await page.waitFor('div.inner-container')
  const text = await page.evaluate(() => Array.from(document.querySelectorAll('div.inner-container h3.title')).map((partner)=>partner.innerText));
const img = await page.evaluate(() => Array.from(document.querySelectorAll('div.inner-container a img')).map(logo=>logo.src));
    // const innerText = await page.evaluate(() => document.querySelector('p').innerText);
const partners = await page.evaluate(()=>
  Array.from(document.querySelectorAll('div.inner-container'))
  .map(inner=>({
    title: inner.querySelector('h3.title').innerText,
    logo: inner.querySelector('a img').src

  })))

console.log(partners);


  await browser.close();
})();






//Array.from(document.querySelectorAll('h3.title')).map((partner)=>partner.innerText);

//Array.from(document.querySelectorAll('div.logo-wrapper a img')).map(logo=>logo.src)
