const { model } = require('./ormClient');
const sequelize = require('./ormClient');
const {models} = sequelize;
const {Op} = require('sequelize');
/*
    Where clause

    Its possible to use operators to build a query
    in ORM
*/
const whereClause = async () => {
    const book = await models.Book.findAll({
        // it will return a book whose title is test1 and id is 1
        where: {
            title: 'test1',
            id: 1
        }
    });
    console.log(book[0].toJSON());
}

const whereClauseWithOp = async () => {
    const books = await models.Book.findAll({
        where: {
            id: {
                // It will retrieve the books whose ids are greater than 1
                // we can use operators to build request queries
                [Op.gte]: 1
            }
        }
    });
    console.log(books[1].toJSON());
}
/*
    Pagination
    
    It's also possible to hablde pagination by using the 
    optins limit and offset
*/
const pagination = async () => {
    const page1 = await models.Book.findAll({include:  ['genres'], limit: 0, offset: 1});
    console.log(page1[0].toJSON());
} 

/*
    CRUD by using ORM
*/

const getUsers = async () => {
    const data = await models.User.findAll();
    console.log(data[0].get());
}

const createUser = async (user) => {
    const newUser = await models.User.create(user);
    console.log(newUser);
}

const updateUser = async (userId, data) => {
    const user = await models.User.findByPk(userId);
    if (user === null) {
        throw new Error(`user ${userId} was not found`);
    }
    const updatedUser = await user.update(data);
    console.log(updatedUser);
} 

const deleteUser = async (userId) => {
    await (await models.User.findByPk(userId)).destroy();
    return {userId};
} 

const createBook = async (data) => {
    const book = await models.Book.create(data);
    console.log(book);
}

const getBooks = async () => {
    const book = await models.Book.findAll();
    console.log(book[0].get());
}

const getBooksAndItsUsers = async () => {
    const booksAndUsers = await models.User.findAll({include: ['book']});
    console.log(booksAndUsers[0].toJSON());
} 

const createUserAndBooks = async(data) => {
    const newUserAndBooks = await models.User.create(data, {include: ['books']});
    console.log(newUserAndBooks.toJSON());
}

const createBookAndUser = async(data) => {
    const newUserAndBooks = await models.Book.create(data, {include: ['user']});
    console.log(newUserAndBooks.toJSON());
}
// createUser({
//     name: 'AVC',
//     email: 'avc@avc.com',
// });
// getUsers();
// updateUser(10, {email: 'avc@avc.com'});
// deleteUser(2);

// createBook({
//     title: 'Another',
//     userId: 1
// });

// getBooks();


// By using the relation hasMany
// its possible to create the user
// along with all its belongings
// createUserAndBooks({
//     name: 'Test with books',
//     email: 't3@t.com',
//     books: [
//         {title: 'A title'},
//         {title: 'A title 2'},
//         {title: 'A title 3'}
//     ]
// }); 

// It is also possible to create
// one user from the book to which
// it belongs to
// createBookAndUser({
//     title: 'Book first 1',
//     user: {
//         name: 'User second',
//         email: 'a@123.com',
//     }
// });

const createBookWithGenre = async (data) => {
    const newBookGenre = await models.Book.create(data, {include: ['genre_book']});
    console.log(newBookGenre.toJSON());
}

const getBookWithGenre = async (data) => {
    const bg = await models.Genre.findAll({include: ['books']});
    console.log(bg[0].toJSON());
}


// createBookWithGenre({
//     title: 'Book with genre',
//     'genre_book': {
//         genre :'Sci-fi'
//     }
// });

// getBookWithGenre();
// getBooksAndItsUsers();
// pagination();
// whereClauseWithOp();