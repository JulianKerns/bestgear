
const{getInputData} = require('./input_data.js')
const {scraping} = require('./scraping.js')
const {selector} = require('./selector.js')
const {printReport} = require('./report.js')

const item_slots = ["Head","Neck","Shoulder","Back","Chest","Wrist","Hands","Waist","Legs","Feet","Finger1","Finger2"]
async function main(){

     //getting the input data from the CLI arguments
        let inputDataRe = await getInputData()
        if(inputDataRe === undefined){
            console.log(`Please start the programm again!`)
             return null
         }
        
        let response = null
        try{
            response = await fetch(`https://raider.io/api/v1/characters/profile?region=${inputDataRe[0].toLowerCase()}&realm=${inputDataRe[1].toLowerCase()}&name=${inputDataRe[2].toLowerCase()}&fields=gear`)
            console.log('Fetching characters data...')
        }
        catch(err){
            return `An error occured during fetching ${err.message}`
        }
        
        if(response.status > 399){
         console.log('Wrong input or WoW character does not exist on Raider.io!')
         return     
        }

        const data = await response.json()
        const itemInfo = []
        for(item of item_slots){
            if(!data.gear.items[`${item.toLowerCase()}`]?.name){
                continue
            }
            itemInfo.push(data.gear.items[`${item.toLowerCase()}`]?.name)
               
        }

        // getting the scraped data back from scraping.js 
        // from itemInfo.slice(13)
       
        const scrapedData = await scraping(data.class, data.active_spec_name, selector[`${data.class}`][`${data.active_spec_name}`])
         
        if(scrapedData === undefined){
           console.log(`Please restart the programm!`)
            return null 
        }
       
        try{
    
            printReport(itemInfo,scrapedData)

        }catch(err){
            console.log(`Error: ${err.message}`)
            return null
    }
}
main()

