interface vehicle {
    wheels:number;
    model:string;
    brand:string;
    madeIn:string;
    engine:boolean;
}
/*
    Factory Pattern

    In this case we can conditionate the way in which some objects are created.
    It is useful when we want to group the creation of objects that fall into 
    the same category; for example, 
    
    
    Example
        In this case we have vehicles, all of them
        shares more or less the same categories. This design pattern centralize the
        instance creation, keeping the project ordered and making it simple to
        mantein.

    To get a Transportation Mean, we call the class Transport this way
        const mitsubishiCar = Transport.getCar("Japan", "x", "Mitsubishi");
        const myBycicle = Transport.getBicycle("Japan", "T30", "GW");
 */


class Transport {

    public static getMotorcycle(madeId:string, model:string, brand:string) {
        return new Motorcycle(madeId, model, brand);
    }

    public static getBicycle(madeId:string, model:string, brand:string) {
        return new Bicycle(madeId, model, brand);
    }

    public static getCar(madeId:string, model:string, brand:string) {
        return new Car(madeId, model, brand);
    }
}


class Motorcycle implements vehicle {
    wheels: number;
    model: string;
    brand: string;
    madeIn: string;
    engine: boolean;

    constructor(madeIn:string, model:string, brand:string) {
        this.madeIn = madeIn;
        this.model =model;
        this.brand = brand;
        this.wheels = 2;
        this.engine = true;
    }
}

class Bicycle implements vehicle {
    wheels: number;
    model: string;
    brand: string;
    madeIn: string;
    engine: boolean;

    constructor(madeIn:string, model:string, brand:string) {
        this.madeIn = madeIn;
        this.model =model;
        this.brand = brand;
        this.wheels = 2;
        this.engine = false;
    }
}

class Car implements vehicle {
    wheels: number;
    model: string;
    brand: string;
    madeIn: string;
    engine: boolean;

    constructor(madeIn:string, model:string, brand:string) {
        this.madeIn = madeIn;
        this.model =model;
        this.brand = brand;
        this.wheels = 4;
        this.engine = true;
    }
}