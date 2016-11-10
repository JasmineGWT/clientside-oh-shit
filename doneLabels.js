module.exports = function doneLabels() {
  var count = []
  for (var i = 1; i <= 10; i++) {
    count.push(
    h('lable', {for: i}, {id: 'q2_lable'}, i)
    )
  }
  return count
}
