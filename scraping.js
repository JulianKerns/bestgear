// Getting Data from Wowhead directly

const puppeteer = require('puppeteer')


async function scraping(charClass, charSpec, selector){
    if (charClass === 'Death Knight'){
        charClass = 'death-knight' 
    }
    if (charClass === 'Demon Hunter'){
        charClass = 'demon-hunter'
    }
    if ( charSpec === 'Beast Mastery'){
        charSpec = 'beast-mastery'
    }

    let url = `https://www.wowhead.com/guide/classes/${charClass.toLowerCase()}/${charSpec.toLowerCase()}/bis-gear`
    console.log(`Scraping: ${url}...`)
    let bestgear = []
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

   // div:nth-child(34) is only workgin smoothly when trying to scrape data from the windwalker monk bis gear site, every site has a slightly different HTML structure
    console.log(selector["load"])
    console.log(selector["div"])
    try{
       
        await Promise.all([page.goto(url), page.waitForSelector(`#guide-body`, {timeout: 20_000}),page.waitForSelector(`${selector["load"]}`, {timeout: 20_000})])
        if(await page.$('#onetrust-reject-all-handler')){
            await page.click("#onetrust-reject-all-handler")
        }
       
        bestgear = await page.evaluate((selector) => { console.log(`${selector["div"]}`); 
        return Array.from(document.querySelectorAll(`#guide-body > ${selector["div"]} > table > tbody > tr > td:nth-child(2) > a > span`)).map(x => x.textContent)   
    },selector) 
        let i = 0
        while (bestgear.length === 0 && i < 20){
        await Promise.all([page.goto(url), page.waitForSelector(`#guide-body`, {timeout: 20_000}), page.waitForSelector(`${selector["load"]}`, {timeout: 20_000})])
        
        
        console.log('Could not scrape the data... Trying again!')
            i++
            
            bestgear = await page.evaluate((selector) => { 
            return Array.from(document.querySelectorAll(`#guide-body > ${selector["div"]} > table > tbody > tr > td:nth-child(2) > a > span`)).map(x => x.textContent)
            
        },selector)

        }
        await page.screenshot({path: `images/browser${i}.png`}) 

        if(bestgear.length===0){
            console.log(`Could not scrape the data!`)
            await browser.close()
        }
        else{
            await browser.close()
            return bestgear
        }
    }
    catch(err){ 
        console.log(`Error: ${err.message}! Could not scrape the data! Please enter character info again! `)
        await browser.close()
        return undefined
    }
 
}


module.exports={
    scraping
}