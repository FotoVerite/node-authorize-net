'use strict';

var AuthorizeGateway = require('./lib/authNetGateway.js');

module.exports = function authorizeNet(conf) {
  return new AuthorizeGateway(conf);
};