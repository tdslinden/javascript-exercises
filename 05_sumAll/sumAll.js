const sumAll = function (min, max) {
  // returns the sum between two numbers (inclusive)
  // should consider what happens if max arg is < min arg

  if (max < 0 || min < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }

  if (max < min) {
    const temp = max;
    max = min;
    min = temp;
  }

  let sum = min;
  for (let i = min + 1; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
