const puppeteer = require('puppeteer');

  // Sample Prototype

(
  async () => {
    const movieUrl = "https://www.imdb.com/title/tt0068646/?ref_=tt_rec_tti"

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(movieUrl, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      const title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
      const rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
      const ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;

      return { 
        title,
        rating,
        ratingCount
      }
    })

    console.log(data);
    
    await browser.close();
  }
)();