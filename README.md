# bestgear
## Abstract 
<p> Utilizing the Raider.io API to fetch the data from any character on any realm and any server this programm compares the majority of the characters gear to the best in slot gear present on Wowhead.com.
</p>

## Dependencies
<p>
This programm utilizes the puppeteer library to scrape data from a website.
If you have trouble running puppeteer try looking into the [Troubleshooting Site](https://pptr.dev/troubleshooting).
Additionaly I was only able to scrape the data consistently while running puppeteer from the puppeteer -extra library using puppeteer-extra-stealth-plugin.
Only in the with the launch option `puppeteer.launch({headless : false})` I would get consistent results 
</p>

