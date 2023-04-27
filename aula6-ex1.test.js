const calculate = require('./aula6-ex1');

test('Test Sum', () => {
  expect(calculate(2, 5, '+')).toBe(7);
  expect(calculate('1', 2, '+')).toBe(3);
});

test('Test Subtraction', () => {
  expect(calculate(2, 5, '-')).toBe(-3);
});

test('Test Multiplication', () => {
  expect(calculate(2, 5, '*')).toBe(10);
});

test('Test Division', () => {
  expect(calculate(2, 5, '/')).toBe(0.4);
});

test('Test Division by 0', () => {
  expect(calculate(5, 0, '/')).toBe(NaN);
});

test('Test Invalid parameters', () => {
  expect(calculate()).toBe(NaN);
  expect(calculate(1)).toBe(NaN);
  expect(calculate(1, 2)).toBe(NaN);
});