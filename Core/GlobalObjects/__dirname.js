/*
    __dirname

    It is a module level object that will retrieve 
    the absolute path of the folder in which the current
    module is located.

    __dirname is the same as path.dirname(__filename)
*/

console.log(__dirname)


const path = require('path')
console.log(path.dirname(__filename))