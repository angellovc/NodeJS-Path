/*
    __filename

    It will retrieve the name of the module in which it is called
    along with its absolute path.
*/

// If your program traverse a symbolic link to reach
// your module, the symbolic link will be resolved
// before it is shown when __filename is called.
console.log(__filename)

// No matter if A module is a dependency of B module.
// If __filename is invoked in A it will show the A filename
// along with its absolute Path and the same behavior applies
// to the B file