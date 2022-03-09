const USER = 'avc';
const PASSWORD = 'admin123';
const HOST = 'localhost';
const PORT = 54321;
const DATABASE = 'store';

const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres'
    },
    production: {
        url: URI,
        dialect: 'postgres'
    }
}