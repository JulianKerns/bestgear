// Objct that stores the HTML-Selectors for best in slot gear for each class and spec on their respective Wowhead.com sites.
// specificely written in a way so i can insert the class name and spec name directly from the fetched data of the raider.io API
// Thats why class names and spec names are written capitalized and have sometimes have spaces between them 

const selector = {
        "Monk" :{ 
            "Windwalker" : {
                div:  'div:nth-child(34) ',
                load: 'tr:nth-child(14)',
                all : '#guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span'
            },
            "Mistweaver" : {
                div:  'div:nth-child(33) ',
                load: 'tr:nth-child(16)',
                all : '#guide-body > div:nth-child(33) > table > tbody > tr > td:nth-child(2) > a > span'
            },
            "Brewmaster" : {
                div:  'div:nth-child(37) ',
                load: 'tr:nth-child(19)',
                all : '#guide-body > div:nth-child(37) > table > tbody > tr > td:nth-child(2) > a > span'
            }
        },
        "Demon Hunter":{
            "Havoc" : {
                div: 'div:nth-child(40)',
                load: 'tr:nth-child(17)',
                all : "#guide-body > div:nth-child(40) > table > tbody > tr > td:nth-child(2) > a > span"
            },
            "Vengeance": {
                div: 'div:nth-child(32)',
                load: 'tr:nth-child(19)',
                all : "#guide-body > div:nth-child(32) > table > tbody > tr > td:nth-child(2) > a > span"
            }  
        },
        "Shaman":{
            "Restoration": {
                div: 'div:nth-child(36)',
                load: 'tr:nth-child(18)',
                all : "#guide-body > div:nth-child(36) > table > tbody > tr > td:nth-child(2) > a > span" 
            },
            "Enhancement" : {
                div: 'div:nth-child(45)',
                load: 'tr:nth-child(19)',
                all : "#guide-body > div:nth-child(45) > table > tbody > tr > td:nth-child(2) > span > a > span"
            },
            "Elemental":{
                div: 'div:nth-child(37)',
                load: 'tr:nth-child(17)',
                all : "#guide-body > div:nth-child(37) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        },
        "Death Knight" :{
            "Blood":{ 
                div: 'div:nth-child(37)',
                load: 'tr:nth-child(16)',
                all :"#guide-body > div:nth-child(37) > table > tbody > tr > td:nth-child(2) > a > span"
            },
            "Frost":{
                div: 'div:nth-child(1)',
                load: 'tr:nth-child(17)',
                all :"#tab-ultimate-bis-lists-breath-of-sindragosa > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > a > span"

            },
            "Unholy":{
                div: 'div:nth-child(37)',
                load: 'tr:nth-child(16)',
                all :"#guide-body > div:nth-child(37) > table > tbody > tr > td:nth-child(2) > a > span"

            }
        },

        "Paladin" :{
            "Holy" : {
                div: 'div:nth-child(29)',
                load: 'tr:nth-child(17)',
                all : "#guide-body > div:nth-child(29) > table > tbody > tr > td:nth-child(2) > a > span"
            },
            "Protection" : {
                div: 'div:nth-child(32)',
                load: 'tr:nth-child(15)',
                all : "#guide-body > div:nth-child(32) > table > tbody > tr > td:nth-child(2) > a > span"
            },
            "Retribution" : {
                div: 'div:nth-child(28)',
                load: 'tr:nth-child(14)',
                all : "#guide-body > div:nth-child(28) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        },
        "Mage" :{
            "Frost":{
                div: 'div:nth-child(32)',
                load: 'tr:nth-child(18)',
                all :"#guide-body > div:nth-child(32) > table > tbody > tr > td:nth-child(2) > span > a > span",
                
            },
            "Arcane": {
                div: 'div:nth-child(38)',
                load: 'tr:nth-child(16)',
                all :"#guide-body > div:nth-child(38) > table > tbody > tr > td:nth-child(2) > a > span"

            },
            "Fire": {
                div: 'div:nth-child(50)',
                load: 'tr:nth-child(16)',
                all :"#guide-body > div:nth-child(50) > table > tbody > tr > td:nth-child(2) > span > a > span"

            }
        },
        "Rogue":{
            "Assassination":{
                div: 'div:nth-child(33)',
                load: 'tr:nth-child(17)',
                all :"#guide-body > div:nth-child(33) > table > tbody > tr > td:nth-child(2) > a > span"
                
            },
            "Outlaw":{
                div: 'div:nth-child(30)',
                load: 'tr:nth-child(17)',
                all :"#guide-body > div:nth-child(30) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            },
            "Subtlety":{
                div: 'div:nth-child(35) ',
                load: 'tr:nth-child(17)',
                all :"#guide-body > div:nth-child(35) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            }
        },
        "Druid":{
            "Balance":{
                div: 'div:nth-child(37)',
                load: 'tr:nth-child(17)',
                all :" #guide-body > div:nth-child(37) > table > tbody > tr > td:nth-child(2) > a > span"
                
            },
            "Feral":{
                div: 'div:nth-child(38)',
                load: 'tr:nth-child(14)',
                all :" #guide-body > div:nth-child(38) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            },
            "Guardian":{
                div: 'div:nth-child(36) ',
                load: 'tr:nth-child(16)',
                all :" #guide-body > div:nth-child(36) > table > tbody > tr > td:nth-child(2) > a > span"
            },
            "Restoration":{
                div: 'div:nth-child(34) ',
                load: 'tr:nth-child(16)',
                all :" #guide-body > div:nth-child(34) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        },
        "Warlock":{
            "Affliction":{
                div: 'div:nth-child(38)',
                load: 'tr:nth-child(18)',
                all :" #guide-body > div:nth-child(38) > table > tbody > tr > td:nth-child(2) > a > span"
                
            },
            "Demonology":{
                div: 'div:nth-child(30)',
                load: 'tr:nth-child(18)',
                all :"#guide-body > div:nth-child(30) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            },
            "Destruction":{
                div: 'div:nth-child(36) ',
                load: 'tr:nth-child(18)',
                all :" #guide-body > div:nth-child(36) > table > tbody > tr> td:nth-child(2) > a > span"
                  
            }
        },
        "Evoker":{
            "Devestation":{
                div: 'div:nth-child(56)',
                load: 'tr:nth-child(17)',
                all :" #guide-body > div:nth-child(56) > table > tbody > tr > td:nth-child(2) > span > a > span"
                
            },
            "Preservation":{
                div: 'div:nth-child(33)',
                load: 'tr:nth-child(16)',
                all :" #guide-body > div:nth-child(33) > table > tbody > tr> td:nth-child(2) > a > span"
                  
            },
            "Augmentation":{
                div: 'div:nth-child(40) ',
                load: 'tr:nth-child(18)',
                all :"  #guide-body > div:nth-child(40) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        },
        "Priest":{
            "Discipline":{
                div: 'div:nth-child(33)',
                load: 'tr:nth-child(18)',
                all :"#guide-body > div:nth-child(33) > table > tbody > tr > td:nth-child(2) > a > span"
                
            },
            "Holy":{
                div: 'div:nth-child(32)',
                load: 'tr:nth-child(18)',
                all :"#guide-body > div:nth-child(32) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            },
            "Shadow":{
                div: 'div:nth-child(30) ',
                load: 'tr:nth-child(18)',
                all :" #guide-body > div:nth-child(30) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        },
        "Warrior":{
            "Arms":{
                div: 'div:nth-child(30)',
                load: 'tr:nth-child(16)',
                all :"#guide-body > div:nth-child(30) > table > tbody > tr > td:nth-child(2) > a > span"
                
            },
            "Fury":{
                div: 'div:nth-child(31)',
                load: 'tr:nth-child(17)',
                all :"#guide-body > div:nth-child(31) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            },
            "Protection":{
                div: 'div:nth-child(39) ',
                load: 'tr:nth-child(19)',
                all :" #guide-body > div:nth-child(39) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        },
        "Hunter":{
            "Beast Mastery":{
                div: 'div:nth-child(35)',
                load: 'tr:nth-child(16)',
                all :"#guide-body > div:nth-child(35) > table > tbody > tr > td:nth-child(2) > a > span"
                
            },
            "Marksmanship":{
                div: 'div:nth-child(35)',
                load: 'tr:nth-child(17)',
                all :"#guide-body > div:nth-child(35) > table > tbody > tr > td:nth-child(2) > a > span"
                  
            },
            "Survival":{
                div: 'div:nth-child(33) ',
                load: 'tr:nth-child(16)',
                all :" #guide-body > div:nth-child(33) > table > tbody > tr > td:nth-child(2) > a > span"
            }
        }

    }


module.exports={
    selector
}