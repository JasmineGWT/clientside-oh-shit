var h = require('hyperscript')
var main = document.querySelector('main')

console.log('welcome to oh-shit-youre-dying!!!!!!')

var title = h('h1', {}, "OH SHIT, YOU'RE DYING!")
main.appendChild(title)

function doneLabels() {
  var count = []
  for (var i = 1; i <= 10; i++) {
    count.push(
    h('lable', {for: i}, {id: 'q2_lable'}, i)
    )
  }
  return count
}

function doneRadios() {
  var count = []
  for (var i = 1; i <= 10; i++) {
    count.push(
    h('input', {type: 'radio'},{name: 'q2'},{value: i},{id: 'q2_radio'})
    )
  }
  return count
}

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
  h('h3', {class: 'questionTitle'}, 'How many durries do you smoke a day?')
])

main.appendChild(form)
