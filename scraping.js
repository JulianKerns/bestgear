// Getting Data from Wowhead directly
const puppeteer = require('puppeteer')
const url = 'https://www.wowhead.com/guide/classes/monk/windwalker/bis-gear'

async function scraping(){

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const bestgear = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span')).map(x => x.textContent)   
    })


    console.log(bestgear)

    await browser.close()
}


scraping()