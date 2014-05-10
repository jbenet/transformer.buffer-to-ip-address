# transformer.buffer-to-ip-address

[Transformer](http://github.com/jbenet/transformer) conversion: buffer to ip-address

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tBufferToIpAddress = transformer('buffer', 'ip-address');
tBufferToIpAddress(new Buffer('7f000001', 'hex')); // '127.0.0.1'
```
