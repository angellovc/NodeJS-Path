const { MongoClient, ObjectId } = require('mongodb');
const BookService = require('./book-service');
const { book } = require('./book-service.fixtures');

const mockMongoDb = {
  // By adding mockReturnThis to every element
  // in the object. You allow jest to chain functions
  // I.E: collection().findOne()...
  collection: jest.fn().mockReturnThis(),
  findOne: jest.fn().mockReturnValue(book),
};
// jest.fn works as a spy
// spies allows you to check how arguments are passed through
const mockMongoClient = {
  connect: jest.fn().mockResolvedValue(true),
  db: jest.fn().mockResolvedValue(mockMongoDb),
};

// Mocking Classes and libraries
jest.mock('mongodb');
MongoClient.mockImplementation(() => mockMongoClient);
ObjectId.mockImplementation(() => '120312083h1082h3');
describe('Book-Service tests', () => {
  let bookService;
  beforeEach(async () => {
    bookService = new BookService();
  });
  describe('Get method', () => {
    test('Retrieve one element', async () => {
      const retrievedBook = await bookService.get('book', '120312083h1082h3');
      expect(retrievedBook).toEqual(book);
      // Checking whether the method is called
      expect(mockMongoClient.db).toBeCalled();
      // how many times its called
      expect(mockMongoDb.collection).toHaveBeenCalledTimes(1);
      // Which parameters are passed through
      expect(mockMongoDb.collection).toHaveBeenCalledWith('book');
      expect(mockMongoDb.findOne).toHaveBeenCalledWith({ _id: '120312083h1082h3' });
    });
  });
});
