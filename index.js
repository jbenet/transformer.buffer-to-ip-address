var transformer = require('dat-transformer');
var tBuffer = transformer('buffer');
var tIpAddress = transformer('ip-address');
// require any other modules you may need here.
var ip = require('ip');

module.exports = transformer.Conversion(tBuffer, tIpAddress, convert);

// this is a synchronous conversion.
function convert(input) {
  return ip.toString(input);
}
