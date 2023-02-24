/*
    Count how many times a word appears in a file.
        node countOccurrence <word> <filename> 
    This implementation uses the flowing mode, where
    the streams reads a buffer automatically.
*/

const {createReadStream} = require('fs');

const referenceWord = process.argv[2];
const file = process.argv[3];
let count = 0;

// Creating the readable Stream
const readStream = createReadStream(file, {encoding: 'utf-8'});

// When the readable stream is put to listen the 'data' event
// It will start reading and transmitting the source.
readStream.on('data', (chunk) => {
    chunk.split(' ').forEach(word => {
        if (word.includes(referenceWord)) {
            count++
        }
    })
})

readStream.on('end', () => {
    console.log(`word: ${referenceWord} appears ${count} times in file ${file}`);
})
