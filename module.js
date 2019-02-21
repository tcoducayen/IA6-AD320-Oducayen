var fs = require('fs')
var path = require('path')

module.exports = function myModule(dirName,fileExt,callback) {
  fileExt = '.' + fileExt
  fs.readdir(dirName,function(err,list) {
      if (err)
        return callback(err) // early return=
      list = list.filter( function(file) {
        return path.extname(file) === fileExt
      })
      callback(null,list)
  })
}
