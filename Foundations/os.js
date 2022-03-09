/*
    OS

    By using OS it's possible to access to the
    info inside the Operative System
*/

const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());

// Get the System signals 
console.log(os.constants);

// Get the amount of available memory
console.log(os.freemem());
// The value returned by freemem goes in bytes notation
// it's possible to transform it using the following functions 
const toKB = (bytes) => bytes / 1024;
const toMB = (bytes) => toKB(bytes) / 1024;  
const toGB = (bytes) => toMB(bytes) / 1024

console.log(toMB(os.freemem()));
console.log(toGB(os.freemem()));

// Get the home dir
console.log(os.homedir);

// Get the tmp dir
// in case its neeeded
console.log(os.tmpdir);

// Get the name of the host
// it's useful when working with micro-services
console.log(os.hostname);

// Active networks interfaces that are being used
// by the pc
console.log(os.networkInterfaces);