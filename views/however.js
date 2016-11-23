var h = require('hyperscript')

module.exports = function (drink, smoke, yearsLeft) {
  if (drink === 'drinker' && smoke === 'smoker') {
    return h('p', {}, `Don't worry I'm just kidding, since you both smoke and drink you've actually got ${yearsLeft - 10} years left!`)

  }
}
