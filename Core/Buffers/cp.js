#!/usr/bin/env node

/*
    This is a use case for buffers. This is a node implementation
    of the cp linux command. 

    In this implementations node loads the source file into a buffer
    and use that buffer to save its content into another file.
*/

const fs = require('fs');
const [,, sourceFile, targetFile]  = process.argv;
// Loading sourceFile content into a Buffer
const file = fs.readFileSync(sourceFile);
// If you perform a console log over the file variable you'll get 
// a buffer string representation on the screen showing the 
// firsts bytes of the source file. 
// console.log(file)
fs.writeFileSync(targetFile, file);