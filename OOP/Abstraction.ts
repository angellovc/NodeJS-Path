/*
    Abstraction

    This principles tells that the procedural logic of
    the program should be hidden, but should be exposed
    through an interface which make the code easy to
    understand and read for other developers.

    This practice avoid also dependencies with others.
    Using the abstraction shape, every time we want to
    use a shape object, we don't need to worry about the
    logic necessary to calculate the area of any of them.
    The only thing we have to do is calling the methods 
    we need.
*/

interface Shapte {
    area: () => number
}

/*
    This should be considered an abstraction, because
    it's not exposing the logic behind finding the area
    of the shapes. It use an abstraction instead which
    is the name (area)
*/
class Rectable implements Shapte {
    width:number;
    height:number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
    area = () => this.height * this.width;
}


class Square implements Shapte {
    width:number;
    height:number;

    constructor(side:number) {
        this.width = side;
        this.height = side;
    }
    area = () => this.height ** 2;
}

