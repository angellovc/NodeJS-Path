/*
    Console

    This is used to log things in console
*/

// This log everything is passed through
console.log()

// Log something as an error
console.error()

// Log it as a warning
console.warn()



// Shows a table from an object
const example = [
    {
        firstName: 'TestName',
        lastName: 'TestLastName'
    },
    {
        firstName: 'TestName1',
        lastName: 'TestLastName1'
    },
    {
        firstName: 'TestName2',
        lastName: 'TestLastName2'
    }
]
console.table(example);

// we can log a count
console.count('Retry');
console.count('Retry');
console.count('Retry');
console.count('Retry');
console.count('Retry');
// it can be restored 
console.countReset('Retry');
console.count('Retry');
console.count('Retry');
console.count('Retry');


// We can group logs
console.group('Group 1')
console.log('g1');
// we can also have neested loops
console.group('Group 2')
console.log('g2');
console.log('g2');
console.log('g2');
console.groupEnd('Group 2')

console.log('g1');
console.groupEnd('Group 1')
