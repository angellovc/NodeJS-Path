/*
    Child Process

    We can execute child processes
    by using exec or spawn
    Exec is used to execute simple bash commands
    and also to execute another scripts from other
    languages. Spawn is used when we want do 
    more complex things with processes
*/

const {exec, spawn} = require('child_process');

exec('ls -la', (error, stdout, stderror) => {
    console.log(stdout);
})

exec('node console.js', (error, stdout, stderror) => {
    console.log(stdout);
})

// In spawn the arguments are passed through in an array
let ps = spawn('ls', ['-la']);
ps.stdout.on('data', (data) => {
    console.log(data.toString());
});

ps.on('exit', () => {
    console.log('Process has endded');
});

console.log(ps.killed);
