/*
    Count how many times a word appears in a file.
        node countOccurrence <word> <filename> 
    It uses the paused mode implementation
*/

const {createReadStream} = require('fs');

const referenceWord = process.argv[2];
const file = process.argv[3];
let count = 0;
const readStream = createReadStream(file, {encoding: 'utf-8'});

// Every time the stream is ready to be read
// it sends a readable and the following call back is executed
readStream.on('readable', () => {
    /*
        Since Readable streams are async functions another way
        to deal with them is by using the following form: 
            for await (const chunk of readStream) {}
    */
    while (true) {
        // You can also specify how many bytes will be read
        // I.E:
        //      readStream.read(4) - 4 bytes will be read
        const chunk = readStream.read();
        if (chunk === null)
            break;
        chunk.split(' ').forEach(word => {
            if (word.includes(referenceWord)) {
                count++
            }
        })
        
    }
})

readStream.on('end', () => {
    console.log(`word: ${referenceWord} appears ${count} times in file ${file}`);
})
