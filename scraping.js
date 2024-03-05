// Getting Data from Wowhead directly

const puppeteer = require('puppeteer')


async function scraping(charClass, charSpec){
    if (charClass === 'Death Knight'){
        charClass = 'death-knight' 
    }
    if (charClass === 'Demon Hunter'){
        charClass = 'demon-hunter'
    }

    let url = `https://www.wowhead.com/guide/classes/${charClass}/${charSpec}/bis-gear`
    console.log(url)
    let bestgear = []
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
   
    try{await Promise.all([page.goto(url), page.waitForSelector('#guide-body', {timeout: 10_000}),page.waitForSelector('tr:nth-child(14)', {timeout: 10_000})])
        bestgear = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span')).map(x => x.textContent)   
    })
        let i = 0
        while (bestgear.length === 0 && i < 20){
        await Promise.all([page.goto(url), page.waitForSelector('#guide-body', {timeout: 100_000}),page.waitForSelector('tr:nth-child(14)', {timeout: 100_000})])
        i++
        console.log('Could not scrape the data... Trying again!')
            bestgear = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span')).map(x => x.textContent) 
        })
        }
        if(bestgear.length===0){
            console.log(`Could not scrape the data!`)
        }
    }


    catch(err){ 
        console.log(`Could not scrape the data! Please enter character info again! ${err.messge}`)
    }

    await browser.close()
    return bestgear
   
    
}



module.exports={
    scraping
}