const { MongoClient, ObjectId } = require('mongodb');

class BookService {
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async connect() {
    if (!BookService.connection) {
      await this.client.connect();
      BookService.connection = this.client.db(this.dbName);
      return BookService.connection;
    }
    return BookService.connection;
  }

  async getAll(collection, query) {
    const db = await this.connect();
    return db.collection(collection).find(query).toArray();
  }

  async get(collection, id) {
    const db = await this.connect();
    return db.collection(collection).findOne({ _id: ObjectId(id) });
  }
}

module.exports = BookService;
