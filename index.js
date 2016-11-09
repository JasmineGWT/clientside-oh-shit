var h = require('hyperscript')
var main = document.querySelector('main')

console.log('welcome to oh-shit-youre-dying!!!!!!')

var title = h('h1', {}, "OH SHIT, YOU'RE DYING!")
main.appendChild(title)

var form = h('form', {action:"/results"},{method:"post"}, [
  h('h3', {class: 'questionTitle'}, 'How old are you?'),
  h('input', {type: 'text'},{name: 'q1'}),
  h('h3', {class: 'questionTitle'}, 'What is your gender?')

])

main.appendChild(form)
