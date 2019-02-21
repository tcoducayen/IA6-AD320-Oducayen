// prints a list of files in a given directory
var myModule = require('./module.js');

var dirName = process.argv[2];
var fileExt = "." + process.argv[3];

myModule(dirName,fileExt,function(err,list) {
  if (err) return console.error(err);
  //myModule filters by ext files
  list.forEach(function(file) {
    console.log(file);
  })
});
