/*
    Exit & ExitCode

    Exit is used to close the execution of the program
    no matter if there's an async task being executed
    or not.
*/


// This line will close the program immediately
// process.exit();


/*
    ExitCode

    Whether we execute the exit function or not
    our program always will be finished returning
    an exit code to the shell that executed Node Process.

    we can capture the Exit code
    by typing in
        echo $?
    into the terminal after the Node Process is closed.
*/

// we can set our program exit code by through process.exitCode
// it won't close our program immediately, but when it's closed
// it will return the set exit code to the shell.
// process.exitCode = 1

// Every Exit code means something different
// There's a convention you can find in the link below:
//      https://node.readthedocs.io/en/latest/api/process/


/*
    Listening Closing actions

    Every time our project is supposed to close
    due to a non handled execution error or the
    event queue is empty. It emits an event 
    indicating the process is about to end.
    We can capture those events.
*/


// It will capture everything that causes our process to close along with its exit code
process.on('exit', (code) => {
    console.log('Leaving the program...')
    console.log(code)
}, 5);


// It will capture every non handled error and its type
process.on('uncaughtException', (error, type) => {
    console.log(error, type)
    process.exitCode = 5
})

// It will be executed after or program exits. It could be normally used 
// to create safer exits
process.on('beforeExit', () => {
    console.log('Closing...')
})

// const x = t +z 


// throw new Error('asdnaksdn')



