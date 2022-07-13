/*
    Association

    Association is a general category that represents a
    relationship between two classes of any kind. Composition
    and agregation are just some specific types of association.
    They belong to this category.
*/


class Student {
    id:string;
    name:string; 
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }
}

class Subject {
    id:string;
    name:string; 
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }
}

class Enrollment {
    id:string;
    studentId:string;
    subjectId:string;
    constructor(id:string, studentId:string, subjectId:string){
        this.id = id;
        this.studentId = studentId;
        this.subjectId = subjectId;
    }
}

/*
    This is a Many to Many relationship. For this reason we use an intermidiate entity
*/
const student = new Student('1', 'Angello');
const subject = new Subject('1', 'Physics');
const enrollment = new Enrollment('1', student.id, subject.id);


/*
    This is another example of association
    in which two classes relates to each other,
    but, at the same time, can exists without the other.
*/
class Orc {
    life:number;
    constructor() {
        this.life = 100;
    }
    attack(enemy:Human) {
        enemy.life -= 10;
    }
}

class Human {
    life:number;
    constructor() {
        this.life = 100;
    }
    attack(enemy:Orc) {
        enemy.life -= 10;
    }
}