/*
    CWD

    It returns the current working directory. It means
    the folder in which our project entry point was called.
*/

// It is different from __dirname. Since __dirname shows the directory
// of the current module, process.cwd() shows the first module that
// was called by nodeJS
console.log(process.cwd());

/*
    process.cwd() is equal to get the path to the first module called.
    It's possible to achieve this by calling the reference to the 
    program entry point in require.main
*/
console.log(require.main.path);