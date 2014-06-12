var Conversion = require('transformer-conversion');
var tBuffer = require('transformer.buffer');
var tIpAddress = require('transformer.ip-address');
// require any other modules you may need here.
var ip = require('ip');

module.exports = Conversion(tBuffer, tIpAddress, convert);

// this is a synchronous conversion.
function convert(input) {
  return ip.toString(input);
}
