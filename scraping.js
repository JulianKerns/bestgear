// Getting Data from Wowhead directly
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin())
const {setTimeout} = require("node:timers/promises")


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
 //Exceptions for a few spec names and class names 
    let url = `https://www.wowhead.com/guide/classes/${charClass.toLowerCase()}/${charSpec.toLowerCase()}/bis-gear`
    console.log(`Scraping: ${url}...`)
    let bestgear = []
    const browser = await puppeteer.launch({headless : false})
    const page = await browser.newPage()

    try{
        await page.goto(url,{waitUntil :'load'})
        await Promise.all([ page.waitForSelector(`#guide-body`, {timeout: 20_000}), page.waitForSelector(`${selector["load"]}`, {timeout: 20_000})])
       
        if(await page.$('#onetrust-reject-all-handler')){
            await page.click("#onetrust-reject-all-handler")
        }
       
            bestgear = await page.evaluate((selector) => {  
                return Array.from(document.querySelectorAll(`${selector["all"]}`)).map((x) => x.textContent)},selector) 

        // trying again in the while loop if it does not work the first time

        let i = 0
        while (bestgear.length === 0 && i < 5){
            await page.goto(url,{waitUntil :'load'})   
            await Promise.all([page.waitForSelector(`#guide-body`, {timeout: 20_000}), page.waitForSelector(`${selector["load"]}`, {timeout: 20_000})])
            await setTimeout(1000)
            console.log('Could not scrape the data... Trying again!')
            i++
            
            bestgear = await page.evaluate((selector) => { 
                return Array.from(document.querySelectorAll(`${selector["all"]}`)).map(x => x.textContent)
            },selector)

        }
        
        if(bestgear.length === 0){
            console.log(`Could not scrape the data!`)
            await browser.close()
        }
        else{
            await browser.close()
            const bestgearSliced = bestgear.slice(0,12)
            
            return bestgearSliced
        }
    }
    catch(err){ 
        console.log(`Error: ${err.message}! Could not scrape the data!`)
        await browser.close()
        return undefined
    }
 
}


module.exports={
    scraping
}