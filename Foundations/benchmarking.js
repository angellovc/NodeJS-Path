/*
    Benchmarking

    We can measure how long it takes for an operation
    to end by using console log
*/

console.time('for')
let sum = 0;
for(let i = 0; i < 100000; i++){
    sum += i;
}
console.timeEnd('for')