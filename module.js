var fs = require('fs');
var path = require('path');


module.exports = function(dirName,fileExt,callback) { //input data in modular.js
  //access the fs.readdir function
  fs.readdir(dirName,function(err,list) {
      if (err) return callback(err); // sends error to initial callback
      // filter through all of the files
      var filter = ;
      list.foreach(function(file) {
        var ext = path.extname(file);
        if (ext === fileExt) {
          console.log(file);
        };
      });
  });
});
