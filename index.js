var h = require('hyperscript')
var main = document.querySelector('main')
var {smokers, drinkers} = require('./arrays')
var makeForm = require('./makeForm')
var request = require('superagent')

console.log('Welcome to Oh Shit, Youre Dying!!!!!!')
var endpoint = 'http://api.population.io/1.0/countries'

function getCountries(){
  request.get(endpoint)
  .set('Accept', 'application/json')
  .end(function (err, data) {
    if (err) {
      console.error(err)
    }
    console.log("THIS IS THE MOTHERFUCKING DATA BRUH!!!!", Object.keys(data.body))
    console.log("THIS IS THE MOTHERFUCKING DATA BRUH!!!!", data.body.countries)
    const countries = data.body.countries
    return countries

  })
}
var title = h('div', {id: 'titleBack'}, h('h1', {}, "OH SHIT, YOU'RE DYING!"))
main.appendChild(title)

var form = makeForm(smokers, drinkers, getCountries())

main.appendChild(form)

console.log("This is the form!!!!!", document.getElementById('myForm'))
