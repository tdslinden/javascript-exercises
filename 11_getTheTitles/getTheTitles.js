const getTheTitles = function (books) {
  // loop through the books array and append the titles to another array
  // then return that array

  let titles = [];

  for (const book of books) {
    titles.push(book.title);
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
