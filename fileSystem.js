let fs = require('fs');
let data = fs.readFileSync('abc.txt'); //readFileSync file ko read krna ka liya
console.log(data.toString()); //toString data lane ka liya nhi to buffer value aaegi 
let wdata = 'This is some demo data that i want to write'
fs.writeFileSync('write.txt',wdata) //writeFileSync file mai write krta h agr file nhihui to vo bana dega apna aap
fs.appendFileSync('write.txt',' this is append data'); //append krta h ('filename','jo text likhna h') 

// fs.unlinkSync('write.txt'); //delete krta h file ko 
// fs.mkdirSync('other'); //folder create krta h 
console.log(fs.existsSync('D:/bits.txt')); //check krta h ki file ya folder exist krta h ya nhi 