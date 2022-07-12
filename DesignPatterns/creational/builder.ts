/*
    Builder Pattern

    This is a useful pattern when we're dealing with objects that has
    a lot of complexity, which is the case of classes that has another
    classes on it or that has a lot of attributes, but some of them
    are optional and the other ones are required.

    I.E
        Imagine we want a car instance, but we only want two attributes
        populated: 
            new Car('model', undefined, undefined, 'age-of-the-car');
        We would get a lot of undefined at the time we call the constructor
        which makes the code less readable. Instead, we use a Builder in charge
        of filling the required attributes and leave the optional 
        blanked to be filled by the user once it want

*/
class CarBuilder {
    car:Car;
    // Here in the constructor of the Builder goes the mandatory attributes
    constructor(model:string) {
        this.car = new Car(model); 
    }

    // In every method of the Builder we return the builder itself
    // it will give us the ability to manage the object as it was a chain
    // I.E:
    //      const carBuilder = CarBuilder;
    //      carBuilder.setEngine(1, 'Gas').setWheels(1, 'Micheline').build();
    setWheels(amount:number, brand:string) {
        this.car.wheels = new Wheels(amount, brand); 
        return this;
    }

    setManufacturer(name:string, location:string) {
        this.car.manufacturer = new Manufacturer(name, location);
        return this;
    }

    setEngine(stokes:number, fuel:string) {
        this.car.engine = new Engine(stokes, fuel);
        return this;
    }
    
    // we use the build function to finally get the object
    build() {
        return this.car;
    }
}

class Car {
    model:string;
    private _engine:Engine;
    private _wheels:Wheels;
    private _manufacturer:Manufacturer;
    constructor(model:string) {
        this.model = model;
    }

    set wheels(wheels:Wheels) {
        this._wheels = wheels; 
    }

    set manufacturer(manufacturer:Manufacturer) {
        this._manufacturer = manufacturer;
    }

    set engine(engine:Engine) {
        this._engine = engine;
    }

    get wheels():Wheels {
        return this._wheels; 
    }

    get manufacturer():Manufacturer {
        return this._manufacturer;
    }

    get engine():Engine {
        return this._engine ;
    }
}


class Engine {
    strokes:number;
    fuel:string;
    constructor(stroke:number, fuel:string) {
        this.strokes = stroke;
        this.fuel = fuel;
    }
}

class Wheels {
    amount:number;
    brand:string;
    constructor(amount:number, brand:string) {
        this.amount = amount;
        this.brand = brand;
    }
}

class Manufacturer {
    name:string;
    location:string;
    constructor(name:string, location:string) {
        this.name = name;
        this.location = location;
    }
}


