var h = require('hyperscript')
var main = document.querySelector('main')
var {smokers, drinkers} = require('./arrays')
var makeForm = require('./views/makeForm')
var request = require('superagent')
var getTimeLeft = require('./getTimeLeft')
console.log('Welcome to Oh Shit, Youre Dying!!!!!!')


var endpoint = 'http://api.population.io/1.0/countries?format=json'

function getCountries(callback){
  request.get(endpoint)
  .set('Accept', 'application/json')
  .end(function (err, data) {
    if (err) {
      console.error(err)
    }
    const countries = data.body.countries
    callback(countries)
  })
}

var title = h('a', {href: "http://www.anomalies-unlimited.com/Death/Stages.html"}, h('div', {id: 'titleBack'}, h('h1', {}, "OH SHIT, YOU'RE DYING!")))
main.appendChild(title)

getCountries(function(countries) {
  var form = makeForm(smokers, drinkers, countries)
  main.appendChild(form)

})
