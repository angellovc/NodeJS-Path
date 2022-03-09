const {Model, Sequelize, DataTypes} = require('sequelize');
/*
    Model

    a model is a class in which the results of the
    ORM queries will be mapped every time a select
    is made. A model is representation of a table
    in the DB

    Sequelize ORM is as powerful that when a model is defined
    into it, but its table doesn't exist into the DB, the ORM 
    creates it 
*/
const USERTABLE = 'users';
/*
    The table Schema

    How the table would look in the DB
*/
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        // field: 'user_id'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'costumer'
    }
}

/*
    JS model to map the data retrieved
*/
class User extends Model{
    static associate(models) {
        /*
            1 to 1

            This will allow us to retrieve the book
            which is associated to the user
        */
        this.hasOne(models.Book, {
            as: 'book',
            foreignKey: 'user_id'
        });
        /*
            1 to many

            This will allow us to retrieve every book
            which is associated to the user. Also by
            this, we can store the user along with
            the books at the same time
        */
        this.hasMany(models.Book, {
            as: 'books',
            foreignKey: 'user_id'
        });
    }

    // It will indicates sequelize which table will be map into this model
    static config(sequelize) {
        return {
            sequelize,
            tableName: USERTABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {User, UserSchema, USERTABLE};