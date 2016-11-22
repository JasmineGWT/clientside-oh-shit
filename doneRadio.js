var h = require('hyperscript')

module.exports = function doneRadios() {
  var count = []
  for (var i = 1; i <= 10; i++) {
    count.push(
    h('input', {type: 'radio'},{name: 'doneNess'},{value: i},{id: 'doneNess_radio'})
    )
  }
  return count
}
