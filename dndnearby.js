import fetch from 'node-fetch';
import * as cheerio from 'cheerio';



//let title = $('title');
//console.log(title.text());
//let pageContent = $('html body#html-body div#skrollr-body div.container-wrap-wrap div.container-wrap main.content-wrap div.container.content div.row div.main-content-wrap.col-md-9 div.main-content div#page-content')
//console.log(pageContent.text());
//
//
//
//
class Character {
  constructor(playerClass, playerSubclass) {
    this.playerClass = playerClass;
    this.playerSubclass = playerSubclass;
  } 

   
  async levelTable(level){
    const url = `http://dnd5e.wikidot.com/${this.playerClass}`;

    const response = await fetch(url);
    const body = await response.text();

    let classFeatures = cheerio.load(body);
    let levelTable = classFeatures('html body#html-body div#skrollr-body div.container-wrap-wrap div.container-wrap main.content-wrap div.container.content div.row div.main-content-wrap.col-md-9 div.main-content div#page-content table.wiki-content-table tbody:first');
    


    levelTable
      .each((i, tableRow) => {
        const rowContents = classFeatures(tableRow)
        .find('tr')
        .text()
  console.log(rowContents);
});
  }

async subclassFeatures(){
  const url = `http://dnd5e.wikidot.com/${this.playerClass}:${this.playerSubclass}`;


  const response = await fetch(url);
  const body = await response.text();

  let subclassPage = cheerio.load(body);

  let subclassFeatures = subclassPage('html body#html-body div#skrollr-body div.container-wrap-wrap div.container-wrap main.content-wrap div.container.content div.row div.main-content-wrap.col-md-9 div.main-content div#page-content div.feature div.row div.col-lg-12')
  console.log(subclassFeatures.text());//starts with source text book but works across classes


  subclassFeatures
    .each((i, feat) => {
      const featureContents = subclassPage(feat)
      .text()
      console.log(featureContents);
      console.log('break');
  });

}


  


}


let cleric = new Character("barbarian", "ancestral-guardian");
//cleric.levelTable(0);
cleric.subclassFeatures()


//console.log(table.text());

//console.log(levelTable.html());
//

