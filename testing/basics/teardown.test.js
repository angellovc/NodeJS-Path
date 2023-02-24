/*
    Teardown and Setup

    The setup is the process of setting the environment
    to be able to run the tests; for example, setting the
    db access or preparing http requests.

    The teardown is the process of cleaning the testing
    environment to not affect the other tests; for example,
    deleting objects created into the DB, etc.
*/

describe('', () => {
  let state = null;

  beforeAll(() => {
    // setting environment up
    state = 1;
  });

  beforeEach(() => {
    // Teardown process: state is restored
    state = 1;
  });

  test('case 1', () => {
    state = 2;
    expect(state).toBe(2);
  });

  test('case 2', () => {
    expect(state).toBe(1);
  });
});
