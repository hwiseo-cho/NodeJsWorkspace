var testFoler = "./data";
var fs = require("fs");

fs.readdir(testFoler, function(error, fileList) {
    console.log(fileList);
});