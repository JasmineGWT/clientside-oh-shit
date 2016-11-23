var h = require('hyperscript')
var however = require('./however')

module.exports = function showResults(deathData, formData) {
  console.log("This is the form data from showResults", formData)
  return h('div', {className: 'resultsOfQuiz'},
    h('h3.greeting', {}, `Hey ${formData.name}, you're dying!`),
    however(deathData.dateString, formData.drinkingStatus, formData.smokingStatus, deathData.date.years),
    h('h3', {}, 'Have a good day, since you never know, I might be wrong and today is your last')
  )
}
