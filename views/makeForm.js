var h = require('hyperscript')
var getValueTextOption  = require('./getValueTextOption')
var doneLabels  = require('./doneLabels')
var doneRadios  = require('./doneRadio')
var getValueTextRadio  = require('./getValueTextRadio')
var getFormData = require('get-form-data')
var getTimeLeft = require('../getTimeLeft')
var showResults = require('./showResults')
var main = document.querySelector('main')
var morph = require('morphdom')

module.exports = function makeForm(smokers, drinkers) {


  return h('form',{id: "myForm", onsubmit: function(e) {
    e.preventDefault()
    var formData = getFormData(e.target)
    formData.age = formData.age.split(' ').join('+')
    getTimeLeft(formData, function(deathData) {
      var results = showResults(deathData, formData)
      main.appendChild(results)
      document.getElementById('myForm').remove()
    })
  }},


  [
    h('h3', {className: 'questionTitle'}, 'What is your name?'),
      h('input', {type: 'text'},{name: 'name'}, {id:'bruh'}),

    h('h3', {className: 'questionTitle'}, 'What is your D.O.B? (eg. 23 September 1977)'),
      h('input', {type: 'text'},{name: 'age'}, {id: 'bruh'}),

    h('h3', {className: 'questionTitle'}, 'Are you male or female?'),
      h('select.sex', {name: 'sex'},
        h('option', {value: 'female'}, 'Female'),
        h('option', {value: 'male'}, 'Male')),

    h('h3', {className: 'questionTitle'}, 'On a scale of 1 to 10 how done are you?'),
      doneLabels(),
        h('br'),
      doneRadios(),

    h('h3', {className: 'questionTitle'}, 'How many durries do you smoke a day?'),
      getValueTextRadio(smokers),

    h('h3', {className: 'questionTitle'}, 'Cheeky Tuesday night drinks, how much do you drink?'),
      getValueTextRadio(drinkers),
        h('br'),

    h('input', {type:'submit'}, {value: 'Bruh, when am I dying?'}, {id: 'submit'})
  ])
}
