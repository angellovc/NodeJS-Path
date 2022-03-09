const PsqlClient = require('./psqlClient');
const config = require('./config');
/*
    Connection by client

    Every time a new user wants to access the DB a new
    connection must be established, when the user leaves
    the connection must be closed to avoid memory over flow
*/
const getUsersByClient1 = async () => {
    const client = new PsqlClient({
        // Using env variables
        host: config.host,
        port: config.port,
        user: 'avc',
        password: 'admin123',
        database: config.database,
        // pool: false
    });
    const users = await client.query('SELECT * FROM users');
    const avc = await client.query("SELECT * FROM users WHERE name ILIKE 'avc'");
    await client.disconnect();
}

const getUsersByClient2 = async () => {
    console.time('client')
    const client = new PsqlClient({
        host: 'localhost',
        port: 54321,
        user: 'test_user',
        password: 'test123',
        database: 'app_storage',
        // pool: false
    });
    const users = await client.query('SELECT * FROM users');
    await client.disconnect();
    console.timeEnd('client')
}

getUsersByClient1();
getUsersByClient2();

/*
    Pool way will reuse the connection to bring access to the second user
*/
const getUserByPool1 = async () => {
    const client = new PsqlClient({
        host: 'localhost',
        port: 54321,
        user: 'avc',
        password: 'admin123',
        database: 'app_storage',
        pool: true
    });
    const users = await client.query('SELECT * FROM users');
    const avc = await client.query("SELECT * FROM users WHERE name ILIKE 'avc'");
    await client.disconnect();
}

// In this case, the second connection will take less time than the client one,
// since the connection is reused
const getUserByPool2 = async () => {
    console.time('Pool')
    const client = new PsqlClient({
        host: 'localhost',
        port: 54321,
        user: 'test_user',
        password: 'test123',
        database: 'app_storage',
        pool: true
    });
    const users = await client.query('SELECT * FROM users');
    await client.disconnect();
    console.timeEnd('Pool')
}
getUserByPool1();
getUserByPool2();
