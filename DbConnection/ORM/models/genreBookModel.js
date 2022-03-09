/*
    This kind of tables are used to represent
    Many to Many relationships between tables
*/

const {Model, DataTypes} = require('sequelize');
const {BOOKTABLE} = require('./bookModel');
const {GENRETABLE} = require('./genreModel');

const GENREBOOKTABLE = 'genres_books'

const GenreBookSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    bookId: {
        field: 'book_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: BOOKTABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    genreId: {
        field: 'genre_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: GENRETABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class GenreBook extends Model {
    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: GENREBOOKTABLE,
            modelName: 'GenreBook',
            timestamps: false
        }
    }
}

module.exports = {GenreBook, GenreBookSchema, GENREBOOKTABLE}