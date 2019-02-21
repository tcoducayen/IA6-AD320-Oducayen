var fs = require('fs');

var file = process.argv[2];

fs.readFile(file,'utf8', function(err,content) {
  if (err) return console.error(err);
  console.log(content.split('\n').length - 1);
});
