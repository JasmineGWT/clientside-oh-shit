module.exports = function getValueTextRadio(array) {
  var radio = []
  for (var i = 0; i < array.length; i++) {
    console.log("swagggg", array[i][1])
    var value = array[i][0]
    var text = array[i][1]
    radio.push(h('input', {type: 'radio'}, {name: 'q3'}, {value: value}, {id: 'q3_radio'}), h('lable', {for: value}, {id: 'q3_lable'}, text), h('br')
    )
    }
    console.log(radio);
  return radio
}
