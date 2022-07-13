/*
    Overload
    
    It is another type of polymorphism in which 
    a function can take different forms depending
    on how it is invoked.
*/


class Person {


    /*
        To overload a function, we just create as many
        prototypes of it as we want and finall we finish
        with a function prototype with all the possible parameters
        along with all its possible values.
    */
    sayHi():string
    sayHi(name:string):string
    sayHi(name:number):string
    // Since the parameters above can be absent or from different type 
    // we have to specify that the parameter is optional along with its possible values
    sayHi(name?:string | number):string {
        // We say the overloading is polymorphic because 
        // it will perform different actions based on the
        // received inputs
        if (typeof name === 'number')
            return 'You entered a Number'
        if (name !== undefined)
            return `Hi ${name}`
        return 'Hi'
    }
}


const person = new Person();

console.log(person.sayHi());
console.log(person.sayHi('Angello'));
console.log(person.sayHi(2));
