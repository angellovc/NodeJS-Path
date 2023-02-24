/*
    AssertionError

    It refers to the class to which all the errors thrown
    by the assert module belongs. Every error thrown by it
    is an AssertionError.
*/

const assert = require('node:assert');
// We're able to create our own custom errors
const error = new assert.AssertionError(
    // Options
    {
    actual: 1, // First Value
    expected: 2, // Second value to compare with
    operator: 'Comparing two numbers' // Which kind of comparison was made
});

// We can pass to the Assert function our custom errors.
// If an error belonging to AssertionError class is passed
// through, it will be raise in case the test fails.
//  Parameters:
//  - actual:
//  - expected:
//  - message (string) or error (AssertionError)
assert.equal(1,2, error);


// We can create our own AssertionErrors 
// And throw them whenever we want
if (1 !== 2)
    throw error;

    const a = 1; b = 2;
if (a !== b)
    throw new assert.AssertionError({
        actual: a,
        expected: b,
        operator: '!== comparison'
    });

