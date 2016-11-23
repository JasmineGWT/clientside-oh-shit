var h = require('hyperscript')

module.exports = function (dateString, drink, smoke, yearsLeft) {
  if (drink === 'drinker' && smoke === 'smoker') {
    return h('h3.yearsLeft', {}, `You would have ${dateString} left`,
    h('h2', {}, `However since you both smoke and drink, not only are you fun but you've also only got ${yearsLeft - 10} years left!`))

  }
}


// h('h3.yearsLeft', {}, `You have ${deathData.dateString} left!!` ),
