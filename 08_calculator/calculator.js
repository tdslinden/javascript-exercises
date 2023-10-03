const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numArr) {
  let total = 0;

  for (let num of numArr) {
    total += num;
  }

  return total;
};

const multiply = function (numArr) {
  let total = 1;

  for (let num of numArr) {
    total *= num;
  }

  total = numArr ? total : 0;
  return total;
};

const power = function (num, exponent) {
  return num ** exponent;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
