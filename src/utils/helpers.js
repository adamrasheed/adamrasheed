import { WEBSITE } from 'src/constants/contact';

export const kelvinToFahrenheit = (degrees) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  ((parseFloat(degrees) - 273.15) * (9 / 5) + 32).toFixed(1);


export const kebabCase = str => str.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
  .filter(Boolean)
  .map(x => x.toLowerCase())
  .join('-')

export const updateInternalLinks = (content) => {
  const originalLink = `http://adamrasheedwp.com/`
  const newLink = WEBSITE
  const newContent = content.replace(originalLink, newLink)
  debugger
  return newContent
}
