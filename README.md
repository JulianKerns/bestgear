# bestgear
## Abstract 
<p> Utilizing the Raider.io API to fetch the data from any character on any realm and any server this programm compares the majority of the characters gear to the best in slot gear present on Wowhead.com.
</p>

## Dependencies

  This program utilizes the puppeteer library to scrape data from a website.
  If you have trouble running puppeteer try looking into the [Troubleshooting Site](https://pptr.dev/troubleshooting).

  Additionaly I was only able to scrape the data consistently while running puppeteer from the puppeteer -extra library using puppeteer-extra-stealth-plugin.
  Only with the launch option `puppeteer.launch({headless : false})` I would get pretty consistent scraping results.
  
## How to
  Bestgear functions with 3 simple CLI inputs after installing all the dependencies you just have to run `npm start`.
  Then you have to input 1 argument for each question you get asked starting with the characters realm, then the characters server following the characters name.
  <p>If the realm your character resides on is written in 2 seperate words just string them together with a dash so it stays one argument in the CLI.(for example: Burning Legion => Burning-Legion)</p>
  The program then logs information of the characters gear in comparsion to the best in slot gear provided on the wowhead website.

### WoW-Characters
  If you dont have a WoW-Character to try you can use some of my characters.
  They are all on the **eu** server on the **Doomhammer** realm.

  The character names you can try are:
  + Mediman
  + Immort
  + Morstein
  

