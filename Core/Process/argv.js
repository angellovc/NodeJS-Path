/*
    ARGV

    It is used to access the parameter passed through
    the programs at the time it is executed.

    example:
        node argv.js color=red
*/

console.log(process.argv);

// The first two elements of the argv array are reserved for NodeJS

// The very first element refers to the path were is located the executable
// that started the NodeJS process.
console.log(process.argv[0]);
// Another ways to access the executable path
console.log(process.argv0);
console.log(process.execPath);

// The second element tells the path to the executed file or the program entry point
console.log(process.argv[1]);