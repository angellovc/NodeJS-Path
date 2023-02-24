/*
    Buffers

    Buffers are just sets of memory the serves to receive,
    store and send binary data.
    
            ____________________________
           |                            |
    ------>| 00101100 10010100 00110010 |----->
           |____________________________|
    Receive            Store             Send


    Buffers were introduced to Node, because by the time it
    was invented JS didn't have the ability to deal with raw
    binary data and since Node is supposed to be a Server
    side technology it should have a way to deal with FILES
    and Internet requests that at the end of the day are
    raw data or binary data.
*/

const {Buffer} = require('node:buffer');

/*
    buffers allocates memory in bytes. Every time you request
    a buffer it will have a fixed amount of bytes. Keep in mind
    that buffers are not able to be resized, they always have
    the same amount of bytes requested the first time they were
    called.Each byte is able to store a decimal number from 0 to 255
*/
const buffer = Buffer.alloc(1);
buffer.write('s', 'ascii');

console.log(buffer.toJSON())


/*
    Although working buffers are not resizable, they offer
    a pretty flexible way to work with them.
*/

// IMPORTANT: if you don't specify the encoding method, it will use UTF-8 in it's place
// which is the reference to unicode
const bufferFromString = Buffer.from('This is a Buffer', 'utf-8');
console.log(bufferFromString);
const bufferFromArrayOfHex = Buffer.from(['0x68', '0x65', '0x6c', '0x6f'], 'hex');
console.log(bufferFromArrayOfHex.toString());
const bufferFromArrayOfDec = Buffer.from([104, 101, 108, 111], 'dec');
console.log(bufferFromArrayOfDec.toString());
const bufferFromBase64 = Buffer.from('aGVsbw==', 'base64');
console.log(bufferFromBase64.toString());

/*
    You can also retrieve what's inside the the buffer into different formats
*/

console.log(bufferFromString.toString('utf-8'));
console.log(bufferFromString.toString('hex'));
console.log(bufferFromString.toString('base64'));

