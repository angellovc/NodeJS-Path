/*
    Process

    This is useful to manage the node process
    in which our program is running
*/

// Its possible to execute functions when the node process has ended
/*
    The difference between exit and beforeExit is that
    when you use exit, the code will be executed after
    the event loop had finished, so none async functions
    will take place
*/
process.on('exit', () => {
    console.log('The program has endede');
    setTimeout(() => console.log('Not executed'), 1000);
});

process.on('beforeExit', () => {
    console.log('The program is about to end');
});

// It's also possible to execute code when an uncaught exception
// takes place. This is useful in productive environments, so that
// you can notify by email everytime an error is raised there
process.on('uncaughtException', (error, origin) => {
    console.log('Sending an email');
});
