var request = require('superagent')

module.exports = function getTimeLeft(formData){
  var endpoint = `https://life-left.p.mashape.com/time-left?birth=${formData.age}&gender=${formData.sex}`
  request.get(endpoint)
  .set("X-Mashape-Key", "BV6MdPUSR5msh4kcqCg1SEl1lAYpp196iSojsnKb5X3o79TyCs")
  .set("Accept", "application/json")
  .end(function (err, result) {
    console.log(result.body.data)
  })
}
