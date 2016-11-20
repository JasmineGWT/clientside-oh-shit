var h = require('hyperscript')

module.exports = function getValueTextRadio(array) {
  var radio = []
  for (var i = 0; i < array.length; i++) {
    console.log("swagggg", array[i][1])
    var value = array[i][0]
    var text = array[i][1]
    var nameId = array[i][2]
    radio.push(h('input', {type: 'radio'}, {name: nameId}, {value: value}, {id: nameId}), h('lable', {for: value}, {id: nameId}, text), h('br')
    )
    }
    console.log(radio);
  return radio
}
