/*
    Stream

    This is used to work with files or to manage
    huge amount of data. By using this, it's
    possible to read frame to frame instead of reading
    the entire file at once
*/

const fs = require('fs');

/*
    Readable Streams
*/
const readableStream = fs.createReadStream(__dirname+'/newFile.txt');
readableStream.setEncoding('utf-8');

// The functions to work with streams are asynchronous
readableStream.on('data', (chunk) => {
    console.log(chunk);
});

/*
    Writable Streams
*/

// It's possible to write into the standard output directly
process.stdout.write('This is being written directly into the stdout');

// It's possible to create a stream to write something into a file by using fs
const writableStream = fs.createWriteStream(__dirname+'/newFile.txt');
writableStream.write('The file was overriden', (error) => {
    console.log(error);
});

