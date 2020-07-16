const puppeteer = require('puppeteer');



let myArrayOfTitles=[];
(async () => {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
   // await page.setViewport({width: 1920, height: 1080});
  const url="https://experts.shopify.com/"
  await page.goto(url);

/////////////////////////////////// google-marketing
  /*
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

*/

////////////////////////////    shopify


await page.waitFor('div._17BF0 a');
const click = await page.evaluate(() => Array.from(document.querySelectorAll('div._17BF0 a'))[0].click())

await page.waitFor('div._3iz-t');
const experts = await page.evaluate(()=>
 Array.from(document.querySelectorAll('div._3iz-t'))
 .map(expert =>({
  name: expert.querySelector('h2._12oDh._4KkyP').innerText,
  indirizzo: expert.querySelector('span.Polaris-TextStyle--variationSubdued').innerText,
  startingPrice: expert.querySelector('div._3657d').innerText,
  jobsCompleted: expert.querySelector('div.Polaris-Stack.Polaris-Stack--spacingTight.Polaris-Stack--alignmentCenter').innerText,
  rating: expert.querySelector('div.Polaris-Stack.Polaris-Stack--spacingExtraTight.Polaris-Stack--alignmentCenter div.Polaris-Stack__Item').innerText,

})) );
console.log(experts);

})();




//Array.from(document.querySelectorAll('h3.title')).map((partner)=>partner.innerText);

//Array.from(document.querySelectorAll('div.logo-wrapper a img')).map(logo=>logo.src)
