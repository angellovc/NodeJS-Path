/*
    Override

    In this form of polymorphism, the methods inherited
    by a parent class take different behavior.
*/


class Human {
    whoAmI() {
        console.log("I'm a Humman");
    }
}

class Warrior extends Human {
    /*
        Everytime we declare inside a child class
        a method from a parent class. It is overriden
        in the child avoiding the parent behavior and
        using the child one.
    */   
    whoAmI() {
        console.log("I'm a Warrior");
    }
}

const warrior = new Warrior();
warrior.whoAmI();