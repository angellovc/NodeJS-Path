/*
    Composition

    It is the most restricted way of association
    in which one or more entities are used by a
    parent one. Without them, the parent class
    is not able to exists.  
*/


/*
    Although the engine and the wheel are able to continue
    existing by their own, the car wouldn't be possible
    without them.

    We say the Car is a composed class, because it needs other
    independent ones to survive. It is an example of composition
*/
class Engine {}

class Wheel{}

class Car {
    engine:Engine;
    wheels:Wheel[];
}

