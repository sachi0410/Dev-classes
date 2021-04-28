const request = require('request');
const cheerio = require ('cheerio');

function getAllMatches(link){
    request(link, function(error , response , data ){
        processData(data);
    })
}

function processData(html){
    //get links of all the matches.
    let ch = cheerio.load(html);
    let allTags = ch('[data-hover="Scorecard"]');

    for(let i=0; i<allTags.length;i++){
        let matchLink = "https://www.espncricinfo.com"+ch(allTags).attr("href");
        console.log(matchLink);
    }
}

module.exports = getAllMatches;