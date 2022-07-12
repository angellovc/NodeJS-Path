/*
    Dependency Inversion 

    This principle tells that the high level entities must
    not depend on low level ones.

        Higher Level Entity:
            A high level entity y an entity that depends on
            other entity to works; for exaple, a Car class
            which needs an Engine instance to operate. In this
            case, the Engine would be the Lower Level Entity.

    Instead of depending on classes itself, the Higher order
    class should depend on an abstraction of a lower order
    class (An interface), so that if the lower class changes
    nothing inside the Higher order Class should be modified
*/

/*
    Correct

    This is the correct implementation, because whether
    we were to use Mongo or any other DB Managing class,
    by using the repository we assure the following
    lower order entities are compatible with the higher
    one and we avoid modifying it.

    Depend on abstraction is better than depend on concrete
*/

// Lower Order Entity Abstraction
interface DataBase {
    store:(object) => void,
    load:(stirng) => void
}
// Lower Order Entities implementing the abstraction
class MySQL implements DataBase{
    store(info:object) {/* Storing */};
    load(query:string) {/* Loading */};
}

class Mongo implements DataBase {
    store(info:object) {/* Storing */};
    load(query:string) {/* Loading */};
}
/*
    Result: Higher order entity Compatible
    to any Lower order entities
*/
class UserRepository {
    db:DataBase;
    constructor(db:DataBase) {
        this.db = db;
    }
    storeUser(user:object) {
        this.db.store(user);
    }
}

/*
    Wrong 

    This is a wrong implementation, becase if we were to
    change the DB, we would have to modify the Higher order
    class, the WrongUserRepository, should be modified too 
*/

// Lower Order Classes
class WrongMySQLW {

    storeInfor(info:string) {/* Saving the info */};
    loadInfo(query:string) {/* retrieving the info */};
}
class WrongMongo {
    store(info:object) {/* Storing the info */}
    load(entity:string) {/* retrieving the info */};
}
// Higher Order Class
class WrongUserRepository {
    db:WrongMySQLW
    constructor(db:WrongMySQLW) {
        this.db = db;
    }

    getUser(user:string) {
        return this.db.loadInfo(user);
    }
}
