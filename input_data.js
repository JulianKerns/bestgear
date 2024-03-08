
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
            if(inputData.length !== 1){
                console.log('Please only input 1 argument per question. Please restart the programm!')
                rl.close()
                return 
               
            }

            rl.question('Please input the characters realm: ', (answer2) =>{
                realm = `${answer2}`
                inputData.push(realm)
                if(inputData.length !== 2){
                    console.log('Please only input 1 argument per question. Please restart the programm!')
                    rl.close()
                    return

                }
                rl.question('Please input the characters name: ', (answer3) =>{
                    playerName = `${answer3}`
                    inputData.push(playerName)
                    if(inputData.length !== 3){
                        console.log('Please only input 1 argument per question. Please restart the programm!')
                        rl.close()
                        return 
                    }
                    rl.close()
                    resolve(inputData)
                })     
            })
        })
    })
    return promise
}
 

module.exports ={
    getInputData

}