#!/usr/bin/env node
var tTest = require('transformer-test');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = tTest.conversion(conv, [
  [new Buffer('7f000001', 'hex'), '127.0.0.1']
])
