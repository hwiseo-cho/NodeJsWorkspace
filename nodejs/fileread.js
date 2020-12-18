var fs = require('fs');
fs.readFile('smaple.txt', 'UTF-8', function(err,data){
    console.log(data);
});