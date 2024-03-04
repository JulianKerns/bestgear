
const readline = require('node:readline')
const {stdin:input, stdout:output} =  require('node:process')
const { resolve } = require('node:path')
const rl = readline.createInterface({input, output})



function getInputData(){
    let inputData = []
    const promise = new Promise((resolve) => {
            rl.question('Please input the characters region: ', (answer1) =>{
            region = `${answer1}`
            inputData.push(region)


            rl.question('Please input the characters realm: ', (answer2) =>{
                realm = `${answer2}`
                inputData.push(realm)


                rl.question('Please input the characters name: ', (answer3) =>{
                    playerName = `${answer3}`
                    inputData.push(playerName)
                    
                    rl.close()
                    resolve(inputData)
                })     
            })
        })
    })
    return promise
}
 


/*const item_slots = ["Head","Neck","Shoulder","Back","Chest","Waist","Wrist","Hands","Legs","Feet","Finger1","Finger2","Mainhand","Offhand"]
async function fetchPlayerData(inputData){
    
    const response = await fetch(`https://raider.io/api/v1/characters/profile?region=${inputData[0]}&realm=${inputData[1]}&name=${inputData[2]}&fields=gear`)
    const data = await response.json()
    
    for(item of item_slots){
        const itemInfo = {
            name : data.gear.items[`${item.toLowerCase()}`]?.name,
            itemlvl : data.gear.items[`${item.toLowerCase()}`]?.item_level 
        }

        if(!itemInfo.name && !itemInfo.itemlvl){
            continue
        }
        return(`Geartype: ${item}  Name: ${itemInfo.name}  ItemLevel: ${itemInfo.itemlvl}`)

    }
}
*/
module.exports ={
    getInputData

}