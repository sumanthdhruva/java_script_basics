const getRatio = require('../ratio/index')
const getFactorial = require('../factorial/index')
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = getRatio(num1, num2)
  const factorial = getFactorial(num3)
  return {ratio, factorial}
}
module.exports = ratioAndFactorial
