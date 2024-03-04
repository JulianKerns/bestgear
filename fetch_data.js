const item_slots = ["Head","Neck","Shoulder","Back","Chest","Waist","Wrist","Hands","Legs","Feet","Finger1","Finger2","Mainhand","Offhand"]
async function fetchPlayerData(){
    player_name = "mediman"
    region = "eu"
    realm = "doomhammer"
    const response = await fetch(`https://raider.io/api/v1/characters/profile?region=${region.toLowerCase()}&realm=${realm.toLowerCase()}&name=${player_name.toLowerCase()}&fields=gear`)
    const data = await response.json()
    
    for(item of item_slots){
        const itemInfo = {
            name : data.gear.items[`${item.toLowerCase()}`]?.name,
            itemlvl : data.gear.items[`${item.toLowerCase()}`]?.item_level 
        }

        if(!itemInfo.name && !itemInfo.itemlvl){
            continue
        }
        console.log(`Geartype: ${item}  Name: ${itemInfo.name}  ItemLevel: ${itemInfo.itemlvl}`)

    }
}

fetchPlayerData()