var h = require('hyperscript')

module.exports = function getValueTextOption(array) {
  var radio = []
  for (var i = 0; i < array.length; i++) {
    console.log("swagggg", array[i][1])
    var value = array[i][0]
    var text = array[i][1]
    radio.push(h('option', {type: 'radio'}, {name: 'q3'}, {value: value}, {id: 'q4_option'}), h('lable', {for: value}, {id: 'q3_lable'}, text), h('br')
    )
    }
    console.log(radio);
  return radio
}
