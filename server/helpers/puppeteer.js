const puppeteer = require('puppeteer');

  // Sample Prototype
const checkCredible = async (search) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`https://kpbn.co.id/persh.php?alphabet=${encodeURI(search[0])}`);

  const kpbn = await page.evaluate((search) => {
    let flag = false;
    const searchTotal = document.querySelectorAll('table > tbody > tr');
    searchTotal.forEach((item, ind) => {
      const eachItem = item.querySelectorAll('td');
      if (eachItem[1] !== undefined) {
        console.log(eachItem[1].innerText.split(', ')[0]);
        if (eachItem[1].innerText.split(', ')[0].toLowerCase() === search.toLowerCase()) {
          flag = true;
        }
      }
    })
    return flag;
  }, search);

  await page.goto(`https://www.indonesia-investments.com/id/bisnis/profil-perusahaan/item74?companysearchstring=${ encodeURI(search) }`);

  const indoInvestments = await page.evaluate(search => {
    let flag = false;
    const searchTotal = document.querySelectorAll('table[class="companyfiles"]')[0].querySelectorAll('tbody > tr');
    
    searchTotal.forEach(item => {
      const eachItem = item.querySelectorAll('td[class="companyname"]')[0]
      if (eachItem) {
        if (eachItem.innerText.toLowerCase() === search.toLowerCase()) {
          flag = true;
        }
      }
    })

    return flag;
  }, search);

  return {kpbn, indoInvestments};
}

const execute = async () => {
  const kpbn = await checkCredible('abm investama');
  const score = {
    kpbn
  }
  console.log(score)
}

execute();

module.exports = checkCredible;
