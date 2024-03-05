
const{getInputData} = require('./input_data.js')
const {scraping, scrapingHavoc} = require('./scraping.js')

const item_slots = ["Head","Neck","Shoulder","Back","Chest","Waist","Wrist","Hands","Legs","Feet","Finger1","Finger2","Mainhand","Offhand"]
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
        const scrapedData = await scrapingHavoc(data.class, data.active_spec_name)
        if(scrapedData === undefined){
           console.log(`Please restart the programm!`)
            return
        }

        try{
        for(let i = 0; i < itemInfo.length; i++){
            if(itemInfo[i] === scrapedData[i]){
                console.log(`Current ${item_slots[i]}-slot: Already acquired best in slot gear: ${itemInfo[i]}
---`)    
            }else{
                console.log(`Current ${item_slots[i]}-slot: is ${itemInfo[i]} Best in slot gear would be ${scrapedData[i]}
---`)
            }

        }
        }catch(err){
            console.log(`${err.message}`)

    }
}
main()

