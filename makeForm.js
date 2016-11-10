var h = require('hyperscript')
var getValueTextOption  = require('./getValueTextOption')
var doneLabels  = require('./doneLabels')
var doneRadios  = require('./doneRadio')
var getValueTextRadio  = require('./getValueTextRadio')

module.exports = function makeForm(smokers, drinkers) {
  return h('form', {action:"/results"},{method:"post"},
  [
    h('h3', {class: 'questionTitle'}, 'What is your name?'),
      h('input', {type: 'text'},{name: 'name'}),

    h('h3', {class: 'questionTitle'}, 'How old are you?'),
      h('input', {type: 'text'},{name: 'q1'}),

    h('h3', {class: 'questionTitle'}, 'On a scale of 1 to 10 how done are you?'),
      doneLabels(),
        h('br'),
      doneRadios(),

    h('h3', {class: 'questionTitle'}, 'How many durries do you smoke a day?'),
      getValueTextRadio(smokers),

    h('h3', {class: 'questionTitle'}, 'Cheeky Tuesday night drinks, how much do you drink?'),
      getValueTextRadio(drinkers),
        h('br'),

    h('input', {type:'submit'}, {value: 'Bruh, when am I dying?'}, {id: 'submit'})
  ])
}
