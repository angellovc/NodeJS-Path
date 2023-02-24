/*
    exports

    This object is in charge of making a module entity
    available for other modules. It's the way you share
    code between modules (import / export).
*/
   
const f = () => console.log('Im a function');
   
//  exports object is located in the referent to the module
// if you want to export a module, you have to access to the exports
// object and put there everything you want to share with other modules
// This way we'll be able to export just one entity
module.exports = f

// In case you want to export more than one entities, you can assign to
// exports an object with a reference of all the pieces of code you want
// to share.
module.exports = {
    f,
    name: 'this is my name',
    number: 12345
}

// There's a shortcur for modules.exports in each module which is exports
// Nevertheless, you have to be careful when using exports only. Because
// it behaves like any other variable. It just has a reference to the exports
// object, so if you assign something to it directly you'll lose the reference
// I.E: exports = f;

// correct way to use it
exports.f = f;
// It supports mutiple exports too
exports.name = 'im a name';
exports.number = 1235;


console.log(module === require.main)