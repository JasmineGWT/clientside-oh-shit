var h = require('hyperscript')
var main = document.querySelector('main')
var {smokers, drinkers} = require('./arrays')
var makeForm = require('./makeForm')

console.log('Welcome to Oh Shit, Youre Dying!!!!!!')

var title = h('div', {id: 'titleBack'}, h('h1', {}, "OH SHIT, YOU'RE DYING!"))
main.appendChild(title)

var form = makeForm(smokers, drinkers)

main.appendChild(form)
