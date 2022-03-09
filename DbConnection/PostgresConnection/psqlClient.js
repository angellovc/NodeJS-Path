const {Client, Pool} = require('pg');
/*
    There are two ways to connect to the DB: client and pool

    The client refers to a DB sessions created every time a user want
    to access it. On the other hand, the pool is a connections established
    just once and it is in turn reused by other users.
    
    Pooling connections saves time and resources by reusing the opened
    connections
*/

class PsqlClient {
    constructor({host, port, user, password, database, pool = false}) {
        this.pool = pool;
        if (pool === false) {
            console.log('Client connection established');
            /*
                It is also possible to establish a connection by using a URI
                
                The URI must be formed according to the following example
                `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

                The client or pool creation changes
                new Client({ connectionString: URI });
            */
            this.client = new Client({
                host,
                port,
                user,
                password,
                database
            });
            this.connect();
        } else {
            console.log('Pool connection established');
            this.client = new Pool({
                host,
                port,
                user,
                password,
                database
            });
        }
    }

    connect() {
        if (this.pool === true)
            throw new Error('This methods is not available for pool connections');
        this.client.connect();
    }

    async query(query) {
        return await this.client.query(query);
    }

    async disconnect() {
        await this.client.end();
    }

}

module.exports = PsqlClient;