var h = require('hyperscript')
var however = require('./however')

module.exports = function showResults(deathData, formData) {
  console.log("This is the form data from showResults", formData)
  return h('div', {className: 'resultsOfQuiz'},
    h('h3.yearsLeft', {}, `You have ${deathData.dateString} left!!` ),
    however(formData.drinkingStatus, formData.smokingStatus, deathData.date.years)
  )
}
