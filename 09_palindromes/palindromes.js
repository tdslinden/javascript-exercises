const palindromes = function (word) {
  // should remove the white space and punctuation
  // make the case consistent for all characters

  // solutions:
  // use two pointers one scans from front to back and another scans from back to front and compare
  // store word in stack and queue and compare them
  // the stack will return from back to front (FILO) and queue will return from front to back (FIFO)

  // for this case will use two pointers

  const punctuations = /[\.,?!]/g;
  word = word.replace(punctuations, "");
  word = word.replace(/\s/g, "");
  word = word.toLowerCase();

  // iterate through the text in both directions
  const length = word.length;
  for (let s = 0, r = length - 1; s < r; s++, r--) {
    if (word[s] !== word[r]) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
