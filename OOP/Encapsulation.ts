/*
    Encapsulation

    It tells us that the properties or variables over which we'll
    operate on must be hidden, being the methods of the class the
    only way to modify them.

    This is useful to avoid dependencies. If others are able to
    access to the variables or attributes directly, once those
    attributes changes for any reason every other functionality
    that depends on them is forced to change too. Having
    a method in charge of always returning the same kind of value
    whenever the attributes changes, the method that exposes them
    will usually returns the same kind of value.
    This way we can keep the other functionalities outside the class
    unaltered.
*/

class Menu {
    private _dishes = {'Crab': 10, 'Tomato Soup': 5, "Lobster": 30}

    constructor() {

    }

    get dishes() {
        return this._dishes;
    }

    /*
        This is an example of encapsulation

        Imagine the class Restaurant is un charge of add the taxes to
        every dish every year. If for some reason the property _dishes
        must be changed to be an array instead of an object, the
        Restaurant logic should also change if it were accessing directly
        to the _dhishes attribute.

        This way, every time we modify the attributes of the menu, the
        Restaurant class won't be affected, since it will be calling
        a method that gives the same result whether the attributes
        change or not.
    */
    addTaxes(percentage:number) {
        
        if (percentage < 1 && percentage > 100)
            throw new Error('Should be a number between 1 and 100');
        
        percentage = (percentage/100) + 1;

        Object.keys(this._dishes).forEach(dish => {
            this._dishes[dish] *= percentage;  
        })
    }
}