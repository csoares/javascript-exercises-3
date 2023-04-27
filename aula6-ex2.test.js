const calculateObject = require('./aula6-ex2');

test('Test Sum', () => {
  expect(calculateObject({
    number1: 2,
    number2: 5,
    operation: '+'
  }).result).toBe(7);

  expect(calculateObject({
    number1: '1',
    number2: 2,
    operation: '+'
  }).result).toBe(3);
});

test('Test Subtraction', () => {
  expect(calculateObject({
    number1: 2,
    number2: 5,
    operation: '-'
  }).result).toBe(-3);
});

test('Test Multiplication', () => {
  expect(calculateObject({
    number1: 2,
    number2: 5,
    operation: '*'
  }).result).toBe(10);
});

test('Test Division', () => {
  expect(calculateObject({
    number1: 2,
    number2: 5,
    operation: '/'
  }).result).toBe(0.4);
});

test('Test Division by 0', () => {
  expect(calculateObject({
    number1: 2,
    number2: 0,
    operation: '/'
  }).result).toBe(NaN);
});


test('Test Invalid parameters', () => {
  expect(calculateObject().result).toBe(NaN);
  // expect(calculateObject({}).result).toBe(NaN);
  expect(calculateObject({
    number1: 1
  }).result).toBe(NaN);
  expect(calculateObject({
    number1: 1,
    number2: 2
  }).result).toBe(NaN);
});

test('Test assures a new object as a result', () => {
  let operationToBeDone = {
    number1: 1,
    number2: 2,
    operation: '+'
  };
  calculateObject(operationToBeDone);
  expect(operationToBeDone.result).toBeUndefined();
});