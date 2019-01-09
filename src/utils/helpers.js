export const kelvintoFarenheit = degrees => {
  return ((parseFloat(degrees) - 273.15) * (9 / 5) + 32).toFixed(1)
}
