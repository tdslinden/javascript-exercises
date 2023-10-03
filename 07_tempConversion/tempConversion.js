const convertToCelsius = function (F) {
  let celsius = 0;
  celsius = (5 * (F - 32)) / 9;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function (C) {
  let fahrenheit = 0;
  fahrenheit = (9 / 5) * C + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
