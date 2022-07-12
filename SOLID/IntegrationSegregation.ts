/*
    Integration Segregation

    This principle tell us that we don't have to interfaces
    whose methods won't be used by the classes. Instead of
    having big interfaces to represent multiple objects,
    it is better off to have different small interfaces
    whose methods will be entirely occupied by the classes
*/

/*
    Correct Example
 */

interface Car {
    drive:() => string
}

interface Plane {
    fly:() => string
}

class Boing implements Plane{
    fly() {return "I can fly"}
}

class Camaro implements Car {
    drive() {return "I can Drive"}
}

/*
    In case we have a class that have to be
    represented by two or more of the small
    interfaces we have segregated, we can
    combine them
*/
class FutureCar implements Plane, Car {
    fly() {return "I can Fly"};
    drive() {return "I can Drive"};
}

/*
    Wrong implementation
*/
interface vehicle {
    fly:() => string
    drive: () => string
}

/*
    Although the vehicle interface can be used to constrain
    many classes it's not recommended to have it this way
    because the class Car, for example, is forced to 
    implementing the Fly method that it won't never use.
    This lead us to add unnecessary code and features  
*/
class WrongCar {
    fly() {return "I cannot fly"};
    drive() {return "I can Drive"};
}