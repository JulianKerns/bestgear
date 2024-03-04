// Getting Data from Wowhead directly

const puppeteer = require('puppeteer')
const url = 'https://www.wowhead.com/guide/classes/monk/windwalker/bis-gear'

async function scraping(){
    let i = 0
    let bestgear = []
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
   
    await Promise.all([page.goto(url), page.waitForSelector('#guide-body', {timeout: 5_000}),page.waitForSelector('tr:nth-child(14)', {timeout: 5_000})])
        bestgear = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span')).map(x => x.textContent)   
    })

    while (bestgear.length === 0 && i < 20){
        await Promise.all([page.goto(url), page.waitForSelector('#guide-body', {timeout: 1000_000}),page.waitForSelector('tr:nth-child(14)', {timeout: 1000_000})])
        i++
        console.log('Could not scrape the data... Trying again!')
            bestgear = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span')).map(x => x.textContent) 
        
    })}
    if(bestgear.length===0){
        console.log('Could not scrape the data!')
    }

    await browser.close()
    console.log(bestgear)
   
    
}

scraping()

