export const kelvinToFahrenheit = (degrees) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  ((parseFloat(degrees) - 273.15) * (9 / 5) + 32).toFixed(1);

export const square = (amount) => amount * amount;
