module.exports = function doneRadios() {
  var count = []
  for (var i = 1; i <= 10; i++) {
    count.push(
    h('input', {type: 'radio'},{name: 'q2'},{value: i},{id: 'q2_radio'})
    )
  }
  return count
}
