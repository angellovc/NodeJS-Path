/*
    Multiple Inheritance

    There are two main ways of using inheritance in Typescript
    - Interfaces And Mixers 
*/


class Warrior {
    energy:number;
    whoAmI() {
        console.log("I'm a warrior");
    }
}

class Human  {
    life:number;
    whoAmI() {
        console.log("I'm a Human");
    }
}

/*
    Multiple Inheritance with Interfaces

    Since it's not possible for a single class to inherit from more than
    one class, We can use an interface instead. The interface will inherit
    all the methods and properties from its parents and will later be used to
    constrain a class.
    
    This is not the most efficient way of inheritance, since the interface
    will force us to write all the code that was written in every of its
    parents. In case we don't want to repeat code, we should use the Mixer approach.
*/

interface HumanWarrior extends Warrior, Human {
    mastery:string;
}  

class MultipleInheritanceInterfaceMethod implements HumanWarrior {
    mastery: string;
    energy: number;
    life: number;
    whoAmI(): void {
        console.log("I'm a player");       
    }
}


/*
    Multiple Inheritance Using Mixers

    A mixer is a function in charge of copying the properties and methods
    from the constructor of the parent class into the child one.

    Although TS by itself doed not have multiple inheritance, its possible
    to get the 
*/

function classMixer(childClass: any, parentClasses: any[]):any {
    // Iterating Over Each Parent Class
    parentClasses.forEach(parentClass => {
        // Getting and iterating over the parent Class attributes
        Object.getOwnPropertyNames(parentClass.prototype).forEach(name => {
            // Getting the configuration of the parent class attribute
            const parentAttribute:PropertyDescriptor = Object.getOwnPropertyDescriptor(parentClass.prototype, name);

            // Adding the parent attribute given above
            // Define property method is in charge of adding new attributes in a class
            // 1 Argument: target class
            // 2 Argument: name of the new attribute
            // 3 Argument: property descriptor (configuration of the attribute)
            Object.defineProperty(childClass.prototype, name, parentAttribute);
        });
    });
}

/*
    To make TypeScript able to type the mixed class
    we have to create an interface with the same name
    and put it extends all the parent classes mixed
*/
interface MultipleInheritanceMixerMethod extends Human, Warrior {

}

class MultipleInheritanceMixerMethod {

}
// Now we're able to use it. First mix the parent class into the child and then it's ready to be used
classMixer(MultipleInheritanceMixerMethod, [Human, Warrior]);
/*
    IMPORTANT: take in mind that the order of the parent classes matter
    If the parent classes have attributes with the same name, the last
    parent class in the list will have precedence, so the child class
    will get the attribute of the last class with the same attribute
    in the list

    classMixer(MultipleInheritanceMixerMethod, [Human, Warrior]) != classMixer(MultipleInheritanceMixerMethod, [Warrior, Human])
*/


const player =  new  MultipleInheritanceMixerMethod();
player.whoAmI();