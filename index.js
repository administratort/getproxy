const parseUrl = require('url').parse

module.exports = proxy

function proxy() {
  return {
    http: proxy.http,
    https: proxy.https
  }
}

Object.defineProperty(proxy, 'http', {
  get: function() {
    return process.env.HTTP_PROXY || process.env.http_proxy || null
  }
})

Object.defineProperty(proxy, 'https', {
  get: function() {
    return process.env.HTTPS_PROXY || process.env.https_proxy || null
  }
})

proxy.for = function(url) {
  if (!url) {
    return null
  }

  if (typeof url === 'string') {
    url = parseUrl(url)
  }

  var protocol = url.protocol || 'http:'

  if (protocol === 'http:') {
    return proxy.http
  }

  if (protocol === 'https:') {
    return proxy.https || proxy.http
  }

  return null
}
