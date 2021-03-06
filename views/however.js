var h = require('hyperscript')

module.exports = function (dateString, drink, smoke, yearsLeft) {
  if (drink === 'drinker' && smoke === 'smoker') {
    return h('h3.yearsLeft', {}, `You would have ${dateString} left`,
    h('h2', {id: 'legit'}, `However since you both smoke and drink, not only are you fun but you've also only got ${yearsLeft - 30} years left!`),
    h('h3', {}, `You're doing really well! However if for some reason living long and being healthy is something you care about I'd suggest you stop drinking and smoking. If you didn't drink you have ${yearsLeft - 20} years left, if you didn't smoke you'd have ${yearsLeft - 10} years left!`))
  }
  else if (drink === 'drinker') {
    return h('h3.yearsLeft', {}, `You would have ${dateString} left`,
  h('h2', {id: 'legit'}, `However since you drink, even though you don't smoke you still only have ${yearsLeft - 10} years left!`),
  h('h3', {}, `To die quicker I'd suggest smoking too because if you smoked too you'd only have ${yearsLeft - 30} years left!`))
  }
  else if (smoke === 'smoker') {
    return h('h3.yearsLeft', {}, `You would have ${dateString} left`,
  h('h2', {id: 'legit'}, `However since you smoke, even though you don't drink you still only have ${yearsLeft - 20} years left!`),
  h('h3', {}, `To die quicker I'd suggest drinking too because if you drank too you'd have ${yearsLeft - 30} years left`))
  }
  else {
    return h('h3.yearsLeft', {id: 'legit'}, `You have ${dateString} left`,
    h('h3', {}, `To die quicker I'd suggest actually having fun in you're life because if you drank you'd have ${yearsLeft - 20} years left, if you smoked you'd have ${yearsLeft - 10} years left and if yoy did both you'd have ${yearsLeft - 30} left!`))
  }
}
