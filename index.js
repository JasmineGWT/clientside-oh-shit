var h = require('hyperscript')
var main = document.querySelector('main')

console.log('welcome to oh-shit-youre-dying!!!!!!')

var smokerArray = [['nonSmoker', 'Not part of the #CancerCrew2K16'], ['smoker', '1-4'], ['smoker', '5-20'], ['posSmoker', 'Enough']]

var title = h('div', {id: 'titleBack'}, h('h1', {}, "OH SHIT, YOU'RE DYING!"))
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

function getValueText(array) {
  var radio = []
  for (var i = 0; i <= 4; i++) {
    console.log("swagggg", array[i][1])
    var value = array[i][0]
    var text = array[i][1]
    radio.push(h('input', {type: 'radio'}, {name: 'q3'}, {value: value}, {id: 'q3_radio'}), h('lable', {for: value}, {id: 'q3_lable'}, text)
    )
    }
    console.log(radio);
  return radio
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
  h('h3', {class: 'questionTitle'}, 'How many durries do you smoke a day?'),
  getValueText(smokerArray),
    h('br'),
  h('input', {type:'submit'}, {value: 'Bruh, when am I dying?'}, {id: 'submit'})
])

main.appendChild(form)
