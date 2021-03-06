const assert = require('assert')
const proxy = require('./index')

const httpProxy = 'proxy.example.com:8080'
const httpsProxy = 'proxy.test.com:8080'

process.env.HTTP_PROXY = httpProxy
process.env.HTTPS_PROXY = httpsProxy

describe('getproxy', function() {
  it('proxy()', function() {
    var proxies = proxy()
    assert.deepEqual(proxies, {
      http: httpProxy,
      https: httpsProxy
    })
  })

  it('proxy.http', function() {
    assert.equal(proxy.http, httpProxy)
  })

  it('proxy.https', function() {
    assert.equal(proxy.https, httpsProxy)
  })

  it('proxy.for(url)', function() {
    assert.equal(proxy.for('http://example.com'), httpProxy)
    assert.equal(proxy.for('https://example.com'), httpsProxy)
    assert.equal(proxy.for('example.com'), httpProxy)
    assert.ok(proxy.for('ftp://example.com') === null)
    assert.ok(proxy.for(null) === null)
  })
})
