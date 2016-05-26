# getproxy

Get proxies.

### Install

```
npm install getproxy
```

### Usage

```javascript
const proxy = require('getproxy')

proxy()
// { http: 'proxy.example.com:8080', https: 'proxy.test.com:8080' }

proxy.for('http://example.com')
// 'proxy.example.com:8080'

proxy.for('https://example.com')
// 'proxy.test.com:8080'

proxy.for('example.com')
// 'proxy.example.com:8080'

proxy.for('ftp://example.com')
// null
```

### License

MIT
