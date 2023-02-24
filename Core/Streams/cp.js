/*
    Streams CP implementation

    cp implementation by using streams.
    This implementation is particularly interesting
    illustrate pretty well the main difference between
    buffers and Streams.


    Buffer implementation
        In the buffer one, the source file is loaded in ram
        memory before it is copied to a new one. It is
        perfectly well if we're dealing with small files.
        What happen if we need to copy a file weighter than
        our memory ram is able to handle.
    Stream implementation:
        In this implementation, the stream reads a reduced
        amount of data from the source and then concatenate its
        content into the new file. It does this as many times
        is needed to finally read and copy the entire source file.
        In this scenario, it does not matter whether the ram is
        bigger enough or not.

        "Unlike buffers, Streams achieve their processes by continuously reading and delivering information" 
*/

const {createReadStream, createWriteStream} = require('fs');

const [,,source, output] = process.argv;

// Reading Stream
const sourceReadStream = createReadStream(source);
// Writing Stream
const outputWriteStream = createWriteStream(output);

/*
    Now our streams are declared, but they're not used.
    The writable stream must be called to be usable,
    while the readable must be listened.
*/
// Every time we put our readable stream to listen 'data'
// our stream will be opened. It will pass every chunk read
// to a callback
sourceReadStream.on('data', (chunk) => {
    //Every chunk is passed through the writable stream
    outputWriteStream.write(chunk);
});