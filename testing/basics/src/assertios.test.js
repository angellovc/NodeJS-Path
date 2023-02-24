const sum = require('./sum');

test('add up two numbers', () => {
  // Assertion or matcher
  expect(sum(1, 2)).toBe(3);
});

test('booleans', () => {
  // Checking for true or false
  expect(false).toEqual(false);
  expect(true).toEqual(true);

  // Some non boolean expression might also be
  // treated as false, for this values we don't use toEqual
  // I.E:
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('Strings', () => {
  // You can use regex to check a string
  expect('My name').toMatch(/name/);
});

test('Arrays', () => {
  const numbers = [1, 2, 3, 4];
  // Checking for arrays
  expect(numbers).toContain(3);
});

test('Objects', () => {
  const object = { name: 'my name' };
  // To check objects we have to use toEqual
  expect(object).toEqual(object);
});

test('Null or undefined', () => {
  expect(null).toBeNull();
  expect({}).toBeDefined();
  expect({}).not.toBeUndefined();
});
