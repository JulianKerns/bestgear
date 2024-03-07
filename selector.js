const selector = {
        "Monk" :{ 
            "Windwalker" : {
                div: 'div:nth-child(34)',
                load: 'tr:nth-child(14)',
                span : '',
                all : '#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span'
            }
        },
        "Demon Hunter":{
            "Havoc" : {
                div: 'div:nth-child(40)',
                load: 'tr:nth-child(17)'
            }
        },
        "Shaman":{
            "Restoration": {
                div: 'div:nth-child(36)',
                load: 'tr:nth-child(18)'
            },
            "Enhancement" : {
                div: 'div:nth-child(45)',
                load: 'tr:nth-child(19)'
            }
        },
        "Death Knight" :{
            "Blood":{ 
                div: 'div:nth-child(37)',
                load: 'tr:nth-child(16)'
            }
        },
        "Paladin" :{
            "Protection" : {
                div: 'div:nth-child(32)',
                load: 'tr:nth-child(15)'
            }
        },
        "Mage" :{
            "Frost":{
                div: 'div:nth-child(32)',
                load: 'tr:nth-child(18)',
                span : 'span >'
            }
        }
     }


module.exports={
    selector
}