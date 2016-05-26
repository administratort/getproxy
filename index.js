const url = require('url')

module.exports = proxy

function proxy() {
  var http = process.env.HTTP_PROXY || process.env.http_proxy || null
  var https = process.env.HTTPS_PROXY || process.env.https_proxy || null

  return {
    http,
    https
  }
}

proxy.for = function(uri) {
  if (typeof uri === 'string') {
    uri = url.parse(uri)
  }

  var proxies = proxy()

  if (uri.protocol === 'http:') {
    return proxies.http
  }

  if (uri.protocol === 'https:') {
    return proxies.https || proxies.http
  }

  return null
}
