
const{getInputData} = require('./fetch_data.js')

const item_slots = ["Head","Neck","Shoulder","Back","Chest","Waist","Wrist","Hands","Legs","Feet","Finger1","Finger2","Mainhand","Offhand"]
async function main(){
    
        let inputDataRe = await getInputData()
         

        const response = await fetch(`https://raider.io/api/v1/characters/profile?region=${inputDataRe[0]}&realm=${inputDataRe[1]}&name=${inputDataRe[2]}&fields=gear`)
        const data = await response.json()
      
        for(item of item_slots){
            const itemInfo =  {
                name : data.gear.items[`${item.toLowerCase()}`]?.name,
                itemlvl : data.gear.items[`${item.toLowerCase()}`]?.item_level 
            }
    
            if(!itemInfo.name && !itemInfo.itemlvl){
                continue
            }
            console.log(`Geartype: ${item}  Name: ${itemInfo.name}  ItemLevel: ${itemInfo.itemlvl}`)
    
        }
    
    }
main()

