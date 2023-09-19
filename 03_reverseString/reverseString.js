const reverseString = function (inputString) {
  if (inputString === "") return "";

  // use a pointer to point to the last character
  // of the input string and concatenate each
  // letter individually

  let reversedString = "";
  const length = inputString.length;
  for (let i = length - 1; i >= 0; i--) {
    reversedString = reversedString + inputString.charAt(i);
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
