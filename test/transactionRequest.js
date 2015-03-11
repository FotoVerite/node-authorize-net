'use strict';

var chai = require('chai');
var expect = chai.expect;
var conf = require('../config.js');
var assert = require('assert');
var AuthorizeGateway = require('../index.js');
var fixtures = require('./fixtures');

describe('Transaction Request', function() {

  var service = AuthorizeGateway(conf);
  //to avoid duplicate transaction we change the amount
  function randomAmount() {
    return Math.ceil(Math.random() * 300);
  }
  describe('authorizationCapture', function() {
    this.timeout(10000);

    it('should submit transaction request', function(done) {

      var person1 = fixtures.person1;
      person1.amount = randomAmount();


      service.transactionRequest(person1)
        .then(function(result) {
          expect(result.createTransactionResponse.messages[0].resultCode[0]).eq('Ok');
          done();
        }).catch(function(err) {
          console.log(err);
        });
    });

  });

});