/*
    require

    It is the function in charge of retrieving the entities
    that were shared by other modules by using exports.

    Params:
        relative path to a module
    returns:
        any entity exported by the module
*/

// It will retrieve the f function from exports module
// Note that we're using relative paths. It is because
// require uses the __dirname object to search for the
// requested modules.
const {f} = require('./exports');

// It's also possible to import entities without using relative paths
// If we don't specify the relative path to the module. It will search fo it
// inside the node_modules folder, which contains every built-in feature of node
const assert = require('assert');
// If we want to be more detailed We can specify that a module we're
// is a built-in module by adding node: before the name of the module
const assert1 = require('node:assert');

// Require cached the module objects when they're required
console.log(require.cache)

// Also require stores a reference to the entry point of the program
// or the first module that was executed by nodeJS. To access it,
// you can use require.main.
console.log(require.main)

// You can also assess if your module is being executed directly
// or being requested or called by other modules. To do this, we
// compare the reference to the program entry point (require.main)
// to the reference of the present module (module) 
// Basically we're asking here if the entry point module is equal to the module
// in which we are.
console.log(require.main === module)

/*
    Use Cases

    It's useful, because sometimes we would want or code
    to do something when it is called directly, but don't
    when it is imported by other modules

    I.E:
*/
if (require.main === module) {
    console.log('I was executed directly for node. Im the entry point')
} else {
    console.log('I was called by another module :)')
}

