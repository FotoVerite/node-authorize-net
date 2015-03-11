'use strict';

var assert = require('assert');
var toJson = require('xml2json').toJson;
var builder = require('xmlbuilder');
var request = require('request');
var Promise = require('bluebird');
var xml2js = require('xml2js');
var post = Promise.promisify(request.post);
var transactionRequest = require('./transactionRequest');

function AuthorizeNetGateway(options) {


  assert(options.API_LOGIN_ID, 'API_LOGIN_ID must be provided');
  assert(options.TRANSACTION_KEY, 'TRANSACTION_KEY must be provided');

  options.endpoint = options.testMode === true ? 'https://apitest.authorize.net/xml/v1/request.api' : 'https://api.authorize.net/xml/v1/request.api';

  return new Gateway(options);

}

function Gateway(options) {
  var gateway = {};

  gateway.login = options.API_LOGIN_ID;
  gateway.key = options.TRANSACTION_KEY;
  gateway.endpoint = options.endpoint;

  function sendTransactionRequest(payload) {
    var xml = baseRequest();
    xml = transactionRequest(xml, payload);
    return sendRequest(xml)
  }

  return ({
    transactionRequest: sendTransactionRequest
  });


  function baseRequest(baseRequest) {

    var root = builder.create(baseRequest || 'createTransactionRequest');

    root.att({
      'xmlns': 'AnetApi/xml/v1/schema/AnetApiSchema.xsd'
    });

    root.ele({
      merchantAuthentication: {
        name: gateway.login,
        transactionKey: gateway.key
      }
    });
    return root;

  }

  function sendRequest(xml) {
    var jsonResponse;
    return post(gateway.endpoint, {
        headers: {
          'Content-Type': 'application/xml',
          'Content-Length': xml.length
        },
        body: xml
      })
      .then(function(result) {
        xml2js.parseString(result[0].body, function(err, json) {
          jsonResponse = json;
        })
        return jsonResponse;
      })
      .error(function(e) {
        return e.message;
      });
  }

  function createJsonCallback(cb) {

    return function(res, body) {
      var json = JSON.parse(toJson(body));

      if (json.ErrorResponse) {
        throw new GatewayError(json.ErrorResponse.messages.message.text, json.ErrorResponse);
      }

      return cb(json);
    };

  }

}

module.exports = AuthorizeNetGateway;