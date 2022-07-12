/*
    Liskov Substitution Principle

    This principle says that every class that inherit from other
    class should be always complatible with the properties or
    mothods inside its parent class
*/

/*
    Correct Implementation
*/

/*
    If two Classes share methods or properties in common, but
    some of them are totally different it's better off to
    create an interface used to constrain those properties
    they share
*/
interface Shape {
    height:number,
    width:number,
    area(): number,
}

class Rectangle implements Shape {
    height:number;
    width:number;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    increaseWidth(amount:number) {
        this.width += amount;
    }

    area():number {
        return this.height * this.width;
    }
}

class Square implements Shape {
    height:number;
    width:number;
    constructor(width) {
        this.height = width;
        this.width = width;
    }

    area():number {
        return this.height * this.width;
    }
}



/*
    Wrong implementation
*/
/*
    In this case we're violating the Liskov principles, because
    despite of the Square is able to use some of the methods of
    its parent, if we use the functions
        increaseWidth(3)
            or
        increaseHeight(8)
    In an Square instance, the square will lose its properties
    that makes it a square. So none all the methods inside its
    parent applies for it, it's a violation.
*/
class WrongRectangle {
    height:number;
    width:number;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    increaseWidth(amount:number) {
        this.width += amount;
    }

    increaseHeight(amount:number) {
        this.height += amount;
    }
}


class WrongSquare extends WrongRectangle {
    constructor(width) {
        super(width, width);
    }
}