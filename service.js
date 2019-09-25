const { URL } = require('url')

exports.sampleRequest = function (req, res) {
  const reqUrl = new URL(req.url, true)
  var name = 'your query does not provided a value for name variabel'
  if (reqUrl.query.name) {
    name = reqUrl.query.name
  }

  var response = {
    text: 'Hai, ' + name
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response))
}
