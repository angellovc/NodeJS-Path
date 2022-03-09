const {Model,DataTypes} = require('sequelize');

const GENRETABLE = 'genres';

const GenreSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    genre: {
        allowNull: false,
        type: DataTypes.STRING
    }
};


class Genre extends Model {
    static associate(models) {
        this.belongsToMany(models.Book, {
            as: 'books',
            through: models.GenreBook,
            foreignKey: 'genre_id',
            otherKey: 'book_id'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: GENRETABLE,
            modelName: 'Genre',
            timestamps: false
        }
    }
}

module.exports = {GENRETABLE, GenreSchema, Genre};