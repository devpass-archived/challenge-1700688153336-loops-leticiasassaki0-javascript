const { calculateSum, findMax } = require('./loopUtils');

test('Calculate sum of array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(calculateSum(numbers)).toBe(15);
});

test('Find maximum value in array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(findMax(numbers)).toBe(5);
});