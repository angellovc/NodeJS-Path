/*
    DoesNotMatch

    It assess that one string does not accomplish to a regex
*/

const assert = require('node:assert');

// Since the some part of the string accomplish to the regext
// at the left, the assertion will fail 
assert.doesNotMatch('I will fail', /fail/);


assert.doesNotMatch('I will pass', /different/);


// If you pass a type other than a string 
// The function will fail
assert.doesNotMatch(123, /123/);