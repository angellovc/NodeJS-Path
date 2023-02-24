/*
    Uses a stream to count the bytes of a file
*/


const {createReadStream} = require('fs');

const countBytes = () => {
    return new Promise((resolve, reject) => {
        const source = process.argv[2];
        const sourceStream = createReadStream(source);
        let bytes = 0;

        sourceStream.on('error', (error) => {
            reject(error);
        })
        sourceStream.on('end', () => {
            resolve(bytes);
        })
        sourceStream.on('data', (chunk) => {
            // Reads how many memory is allocated every time a file is read
            console.log(`Memory allocated ${process.memoryUsage().arrayBuffers} MB`);
            bytes += chunk.length;
        })
    });
}

countBytes().then(console.log).catch(console.error);