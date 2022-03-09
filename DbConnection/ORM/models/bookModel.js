const {Model, DataTypes} = require('sequelize');
const { USERTABLE } = require('./userModel');
const BOOKTABLE = 'books';

const BookSchema = {
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
            model: USERTABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Book extends Model {
    // Establishing the relations with other tables
    static associate(models) {
        /*
            By specifying to the ORM the relation between two tables
            we get the ability to make queries easily. Belongs to is
            used for 1 to 1 relationships
        */
        this.belongsTo(models.User, {as: 'user'});
        this.belongsToMany(models.Genre, {
            as: 'genres',
            through: models.GenreBook,
            foreignKey: 'book_id',
            otherKey: 'genre_id'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: BOOKTABLE,
            modelName: 'Book',
            timestamps: false
        }
    }
}

module.exports = {Book, BookSchema, BOOKTABLE};