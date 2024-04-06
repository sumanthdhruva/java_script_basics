const addDays = require('date-fns/addDays')
function addDaysToGivenDate(days) {
  const nextDay = addDays(new Date(2020, 7, 22), days)
  const date = nextDay.getDate()
  const month = nextDay.getMonth() + 1
  const year = nextDay.getFullYear()
  return `${date}-${month}-${year}`
}
module.exports = addDaysToGivenDate
