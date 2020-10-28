const parseNumber = (number) => {
  return typeof number === 'number' ? number : parseInt(number, 10)
}
const percentRatio = (height, width) => {
  return `${((Math.round(height) / Math.round(width)) * 100).toFixed(2)}%`
}
export { parseNumber, percentRatio }
