const { User, UserSchema } = require('./userModel');
const {Book, BookSchema} = require('./bookModel');
const { GenreBook, GENREBOOKTABLE, GenreBookSchema } = require('./genreBookModel');
const { Genre, GenreSchema } = require('./genreModel');
/*
    This function receives a sequelize session
    in order to attach to it the different
    table schemas
*/
function setupModels(sequelize) {
    // Schema initialization
    User.init(UserSchema, User.config(sequelize));
    Book.init(BookSchema, Book.config(sequelize));
    Genre.init(GenreSchema, Genre.config(sequelize));
    GenreBook.init(GenreBookSchema, GenreBook.config(sequelize));
    // Relationships
    Book.associate(sequelize.models);
    User.associate(sequelize.models);
    Genre.associate(sequelize.models);
}

module.exports = setupModels;