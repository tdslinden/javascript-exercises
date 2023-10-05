const findTheOldest = function (people) {
  // for each person
  // find their age by subtracting the death year and birth year, if no death year get current year
  const CURRENT_YEAR = new Date().getFullYear();

  const oldestPerson = people.reduce((oldestPerson, currentPerson) => {
    const oldDeathYear = oldestPerson.hasOwnProperty("yearOfDeath")
      ? oldestPerson.yearOfDeath
      : CURRENT_YEAR;
    const oldestPersonAge = oldDeathYear - oldestPerson.yearOfBirth;

    const currentDeathYear = currentPerson.hasOwnProperty("yearOfDeath")
      ? currentPerson.yearOfDeath
      : CURRENT_YEAR;

    const currentPersonAge = currentDeathYear - currentPerson.yearOfBirth;

    return oldestPersonAge > currentPersonAge ? oldestPerson : currentPerson;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
