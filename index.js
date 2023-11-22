const { calculateSum, findMax } = require('./loopUtils');

const numbers = [1, 2, 3, 4, 5];

const sum = calculateSum(numbers);
console.log('Sum:', sum);

const max = findMax(numbers);
console.log('Max:', max);