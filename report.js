
function printReport(currGear,bisGear){
    const itemSlots = ["Head","Neck","Shoulder","Back","Chest","Wrist","Hands","Waist","Legs","Feet","Finger1","Finger2"]
   
    console.log(`----------------
Gear Comparison:
---------------- `)

    for(let i = 0; i < bisGear.length; i++){
        if(currGear[i] === bisGear[i]){
            console.log(`Current ${itemSlots[i]}-slot. Already acquired best in slot gear: ${currGear[i]}
----------`)    
        }else if(currGear[i] === bisGear[i+1] ) {
            console.log(`Current ${itemSlots[i]}-slot is ${currGear[i]}: Best in slot gear would be ${bisGear[i]}`)
            console.log(`Current ${itemSlots[i]}-slot. Already acquired best in slot gear in ${itemSlots[i+1]}-slot: ${currGear[i]}
----------`)    
        }else if(currGear[i] === bisGear[i-1]){
            console.log(`Current ${itemSlots[i]}-slot is ${currGear[i]}: Best in slot gear would be ${bisGear[i]}`)
            console.log(`Current ${itemSlots[i]}-slot. Already acquired best in slot gear in ${itemSlots[i-1]}-slot: ${currGear[i]}
----------`)  
        }
        
        else{
            console.log(`Current ${itemSlots[i]}-slot is ${currGear[i]}: Best in slot gear would be ${bisGear[i]}
----------`)
        }

    }
    console.log(`----------------
Comparison finished!
---------------- `)
}

module.exports = {
    printReport
}