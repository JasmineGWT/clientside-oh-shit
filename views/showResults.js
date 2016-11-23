var h = require('hyperscript')
var however = require('./however')

module.exports = function showResults(deathData, formData) {
  console.log("This is the form data from showResults", formData)
  return h('div', {className: 'resultsOfQuiz'},
    h('h3.greeting', {}, `Hey ${formData.name}, you're dying!`),
    however(deathData.dateString, formData.drinkingStatus, formData.smokingStatus, deathData.date.years),
    h('a', {href:"http://exitmundi.nl/exitmundi.htm"}, h('h3', {id: 'howEnd'}, 'HOW WILL IT END??'))
  )
}
