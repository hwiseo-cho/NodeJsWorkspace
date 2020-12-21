var fs = require("fs");

// readFileSync
// 동기
// console.log('a');
// var result = fs.readFileSync('Syntax/sample', 'utf8');
// console.log(result);

// readFile 
// 비동기
console.log('a');
fs.readFile('Syntax/sample', 'utf8', function(err, result){
    console.log(result);
});
console.log("c");