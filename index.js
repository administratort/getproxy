const parseUrl = require('url').parse

module.exports = proxy

function proxy() {
  var http = process.env.HTTP_PROXY || process.env.http_proxy || null
  var https = process.env.HTTPS_PROXY || process.env.https_proxy || null

  return {
    http,
    https
  }
}

proxy.for = function(url) {
  if (!url) {
    return null
  }

  if (typeof url === 'string') {
    url = parseUrl(url)
  }

  var proxies = proxy()
  var protocol = url.protocol || 'http:'

  if (protocol === 'http:') {
    return proxies.http
  }

  if (protocol === 'https:') {
    return proxies.https || proxies.http
  }

  return null
}
