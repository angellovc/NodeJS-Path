/*
    Polymorphism

    This concept in OOP tells that every child class should be able
    to be referenced as its parent class. According to the context
    we can decide whether we tread it as its parent or itself.
*/

// Parent class
class Person {
    life:number;
    defense:number;
    power:number

    constructor(defense:number, power:number) {
        this.life = 100;
        this.defense = defense;
        this.power = power;
    }

    attack(enemy:Person) {
        const damage:number = this.power - enemy.defense;
        if (damage > 0) {
            enemy.life -= damage;
        }
    }
}

// Child classes
class Warrior extends Person {
    constructor() {
        super(5, 2);
    }
}
class Mage extends Person {
    constructor() {
        super(0, 10);
    }
}

/*
    Here we can see the Polymorphism since the child classes
    can be treated either as its parent class or as themselves.
*/
const warrior:Warrior = new Warrior();
const mage:Person = new Mage();

console.log(warrior.life);
/*
    Here we're applying the Polymorphism

    Although attack method is expecting to receive a Person
    class and got a Warrior one instead, the compatibility
    is not affected by this, because Warrior is algo a Person
    and is being treated as that.
*/
mage.attack(warrior);
console.log(warrior.life);



