var h = require('hyperscript')
module.exports = function whereAreYouFrom(countries) {
  var allTheCountries = []
  countries.map((countrey) => {
    allTheCountries.push(h('option', {value: countrey}, countrey),)
  })
  return allTheCountries
}
