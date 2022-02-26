const { createProxyMiddleware } = require('http-proxy-middleware')

/*
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, Time-Zone
Access-Control-Allow-Credentials: true
*/

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      headers: {
        'Access-Control-Allow-Origin': 'https://ackee.4lch4.cloud',
        'Access-Control-Allow-Methods': ['GET', 'POST', 'PATCH', 'OPTIONS'],
        'Access-Control-Allow-Headers': [
          'Content-Type',
          'Authorization',
          'Time-Zone'
        ],
        'Access-Control-Allow-Credentials': 'true'
      }
    })
  )
}
