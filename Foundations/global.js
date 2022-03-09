/*
    Global object

    The global object in NodeJS is the equivalent to the
    window object in our explorer, it has a predifined
    configurations along with essential functions widely
    used in node development
*/

// It's not recommended to use Global Variables
// Nevertheless if it is needed, the correct way
// to do it is by referencing the global object
global.newGlobalVariable = 1;

// to get the global object we just need to call it
console.log(global)

/*
    Important Global variables

    There are another important global variables that are widely used
    here some examples
 */

// require is one of them and is used to
// add modules to the project

// it will show the process of the system
// it's usually used to get the env variables
console.log(process)

// it will show the folder path of the module which call it
console.log(__dirname);

// it will show the folder path along with the file name
// of the module that call the variable
console.log(__filename);



