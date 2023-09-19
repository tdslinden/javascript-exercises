const removeFromArray = function (arr, ...args) {
  // filter the values in the array with the provided args

  const result = arr.filter((num) => !args.includes(num));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
