'use strict';

var xmlElements = require('./xmlElements');

function transactionRequest(xml, payload) {
  var request = {
    refId: 10,
    transactionRequest: {
      transactionType: 'authCaptureTransaction',
      amount: payload.amount
    }
  }
  xmlElements.constructPayment(request.transactionRequest, payload.card)
  xmlElements.constructAddress(request.transactionRequest, 'billTo', payload.billing)
  xmlElements.constructAddress(request.transactionRequest, 'shipTo', payload.shipping)
  xml.ele(request);
  var finishedXml = xml.end();
  return finishedXml
};

module.exports = transactionRequest;