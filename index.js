var h = require('hyperscript')
var getValueTextOption  = require('./getValueTextOption')
var doneLabels  = require('./doneLabels')
var doneRadios  = require('./doneRadio')
var getValueTextRadio  = require('./getValueTextRadio')
var main = document.querySelector('main')

console.log('Welcome to Oh Shit, Youre Dying!!!!!!')

var smokerArray = [
    ['nonSmoker', 'Not part of the #CancerCrew2K16'],
    ['smoker', '1-4'],
    ['smoker', '5-20'],
    ['posSmoker', 'Enough']
]

var drinkerArray = [
  ['drinker', '1 shot'], ['drinker', '3 shots'], ['drinker', 'Bottle of vodka'], ['drinker', 'Alcohol poisioning is where I draw the line'], ['drinker', "If I could remember how much, it obviously wasn't enough"], ['bullshit', "I don't drink"]
]

var title = h('div', {id: 'titleBack'}, h('h1', {}, "OH SHIT, YOU'RE DYING!"))
main.appendChild(title)

var form =
h('form', {action:"/results"},{method:"post"},
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
    getValueTextRadio(smokerArray),

  h('h3', {class: 'questionTitle'}, 'Cheeky Tuesday night drinks, how much do you drink?'),
    getValueTextRadio(drinkerArray),
      h('br'),

  h('input', {type:'submit'}, {value: 'Bruh, when am I dying?'}, {id: 'submit'})
])

main.appendChild(form)
