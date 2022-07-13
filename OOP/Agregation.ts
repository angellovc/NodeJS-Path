/*
    Agregation

    It express a relation one to many between two classes;
    nevertheless, both classes can exists independently
    in case the other is absent.
*/


/*
    In this example both can survive independently
    because the student does not need a school to
    be an student, since he could go to university
    or take an informal course.
    
    The same situation happens to the School,
    whether there is a student or not, school
    is still a school.
*/

// In this case the student can only have one class
class Student {
    id:string;
    name:string;
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }
}

// Meanwhile, the schools can contain many students
class School {
    id:string;
    name:string
    students:Student[]
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student:Student) {
        this.students.push(student);
    }
}


export {

}