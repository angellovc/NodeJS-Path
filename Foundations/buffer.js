/*
    Buffers

    A buffer is a space in ram memory
    where its possible to store information
    temporally. The information here is stored
    in binary

*/

// We can request JS a memory buffer by using the alloc function
// the parameter is the number of bytes requested by it
const buffer = Buffer.alloc(3);
console.log(buffer)

// To store informatio into it
// we need to do it byte to byte
for(let i = 0; i < 3; i++) {
    buffer[i] = i;
}
console.log(buffer);

// We can use the buffer function from
// To translate JS native data into binary data
// able to be stored into the buffer
// this function will return a buffer with the data passed through it
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('Hola'));
const numbers = Buffer.from([1,2,3]); 
console.log(numbers);