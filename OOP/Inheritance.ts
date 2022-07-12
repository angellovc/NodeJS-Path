/*
    Inheritance

    This concept is very important in OOP. It tells us that
    we are able to create hierarchies among the classes in
    which the lower lever classes will inherit all the methods
    and properties from its parents.
    
    It's pretty useful, because this way we avoid repeating logic
    unnecessarily.
*/

class Human {
    life:number;
    defende:number;
    power:number
    constructor(life:number, defense:number, power:number) {
        this.life = life;
        this.defende = defense;
        this.power = power;
    }
}


class Warrior extends Human {
    constructor() {
        // Super is called here to use the constructor of the parent class
        super(100, 20, 10);
    }

    attack(human:Human) {
        human.life -= this.power;
    }
}


class Player extends Warrior {
    constructor() {
        super();
    }

    useJoystick() {
        console.log("You're using a Joystick");
    }

    useKeyboard() {
        console.log("You're using a keyboard");
    }

    /*
        No matter how at the bottom a class is in the inheritance
        hirerarchie, it's possible to access to all of its parents
        attributes.


        Player can access to:
            warrior and human
    */
    showPower() {
        console.log(this.power);
    }
}


class Npc extends Warrior {
    constructor() {
        super();
    }

    artificialInteligenceBeginer() {
        console.log("Human beign controlled by an artificial intelligence in beginer mode");
    }

    artificialInteligenceNormal() {
        console.log("Human beign controlled by an artificial intelligence in normal mode");
    }

}