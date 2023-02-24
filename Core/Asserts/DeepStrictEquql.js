/*
    DeepStrict Equal

    Is normally used to test objects, since it assess the
    relation between one entity and the other without taking
    into account its reference in memory, but its inner attributes.
*/
const assert = require('node:assert');
const a = {a:1}, b = {a:1};
console.log(a === b);
console.log(a == b);


console.log({a:1} == {a:1})

let c = {a:1}, d = c;

console.log(c == d);
assert.deepStrictEqual(a,b);

// The type of the attributes is assessed by using ===
// assert.deepStrictEqual(a,{a:'1'});


const x = {}, y = {}
Object.setPrototypeOf(y, Date.prototype);
// Prototypes are also assessed.
// It's necessary to keep in mind that the prototypes
// are assessed too, no matter if two objects shares the same
// attributes, their prototype are different, the assert will raise
// an error
// assert.deepStrictEqual(x,y);


// Only enumerable attributes are assesed
const enumProperties = {a: '1'}, nonEnumproperties = {a: '1'};
// This assertion will consider two objects equivalent if one of then
// has more attributes, but this attributes are not enumerable. 
Object.defineProperty(nonEnumproperties, 'nonEnum',  {value: 'nonEnum', enumerable: false});
assert.deepStrictEqual(enumProperties, nonEnumproperties);
