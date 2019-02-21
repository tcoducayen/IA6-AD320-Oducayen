var fs = require('fs');
var path = require('path');

var pathName = process.argv[2];
var fileExt = "." + process.argv[3];

fs.readdir(pathName, function(err,list) {
  if (err) return console.error(err);

  for (var i = 0;i < list.length;i++) {
      if (path.extname(list[i]) === fileExt) {
          console.log(list[i]);
      };
  }
});
