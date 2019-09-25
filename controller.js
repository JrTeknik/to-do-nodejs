const http = require('http')
const { URL } = require('url')

module.exports = http.createServer((req, res) => {
  var service = require('./service.js')
  const reqUrl = new URL(req.url, true)

  // GET endpoint
  if (reqUrl.pathname === '/sample' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + reqUrl.pathname)
    service.sampleRequest(req, res)
  }
})
