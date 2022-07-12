/*
    S: Single Responsability Principles 

    It assumes that a class should have one, and only one, reason to changes.
    In other words, we need to gather all the things that change for the same
    reason and separetes those that change for different reasons.

    This principles applies for every class or module
*/

enum Status {
    inProgress,
    finished,
    new
}
/*
    Correct Example

    This is a correct implementation because keeps the storing and
    changing the state responsabilities separated
*/

// Responsability: manipulate the book state 
class Book {
    title:string;
    author:string;
    status:Status;
    currentPage:number;

    constructor(title:string, author:string) {
        this.title = title;
        this.author = author;
        this.status = Status.new;
        this.currentPage = 0;
    }

    updateStatus(newStatus:Status) {
        this.status = newStatus
    }

    updateCurrentPage(newPage:number) {
        this.currentPage = newPage;
    }


}

// Responsability: Store books into DB
class BookRepository {

    constructor() {
        // Initializing DB connection
    }

    async storeBookIntoDB(book:Book) {
        // await dbconnection.save(Book)
    }
    async removeBookFromDB(book:Book) {
        //await dbconnection.remove(Book)
    }
}


/*
    Wrong example

    It's an example of a class not following the Single Responsability Principle
    as you can see the Book is in charge of managind the state related to the
    Book itself and its also in charge managind the connection to the Database
    in order to store the book.

    This is a bad practice because the book class handleling two different 
    responsabilities: store into the DB and change the state of the Book
    itself
*/

class BookWrong {
    title:string;
    author:string;
    status:Status;
    currentPage:number;

    constructor(title:string, author:string) {
        this.title = title;
        this.author = author;
        this.status = Status.new;
        this.currentPage = 0;
    }

    // 1 Reason: manage the state of the book
    updateStatus(newStatus:Status) {
        this.status = newStatus
    }

    updateCurrentPage(newPage:number) {
        this.currentPage = newPage;
    }

    // 2 Reason: manage the Database connection
    async storeBookIntoDB() {
        // await dbconnection.save(this)
    }

    async removeBookFromDB() {
        //await dbconnection.remove(this)
    }
}
