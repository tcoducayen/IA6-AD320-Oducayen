/*
 * Main program, takes the reuired function and uses it to log
 * all of the files from a given folder in a given path and list
 * specific ones that have the desired ext
*/
var myModule = require('./module.js')

var dirName = process.argv[2]
var fileExt = process.argv[3]

myModule(dirName,fileExt,function(err,list) {
  if (err)
    return console.error(err)

  list.forEach(function(file) {
    console.log(file)
  })
})
