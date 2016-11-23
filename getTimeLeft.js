var request = require('superagent')
var showResults = require('./views/showResults')

module.exports = function getTimeLeft(formData, callback){
  console.log(callback)
  var endpoint = `https://life-left.p.mashape.com/time-left?birth=${formData.age}&gender=${formData.sex}`
  request.get(endpoint)
  .set("X-Mashape-Key", "BV6MdPUSR5msh4kcqCg1SEl1lAYpp196iSojsnKb5X3o79TyCs")
  .set("Accept", "application/json")
  .end(function (err, result) {
    if (err) {
      console.error(err)
    }
    const deathData = result.body.data
    callback(deathData)
  })
}
