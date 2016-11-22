var h = require('hyperscript')

module.exports = function doneLabels() {
  var count = []
  for (var i = 1; i <= 10; i++) {
    count.push(
    h('lable', {for: i}, {id: 'doneNess_lable'}, i)
    )
  }
  return count
}
