function createLineItems(xml, items) {

}

function constructAddress(xmlObj, root, hash) {
  if (hash === undefined) {
    return xmlObj
  }
  xmlObj[root] = {
    firstName: hash.firstName,
    lastName: hash.lastName,
    company: hash.company,
    address: hash.address,
    city: hash.city,
    state: hash.state,
    zip: hash.zip,
    country: hash.country
  }
  return xmlObj
}

function constructPayment(xmlObj, hash) {
  if (hash === undefined) {
    return xmlObj
  }
  xmlObj['payment'] = {
    creditCard: {
      cardNumber: hash.cardNumber,
      expirationDate: hash.expirationDate,
      cardCode: hash.cardCode
    }
  }

  return xmlObj
}

module.exports = {
  constructAddress: constructAddress,
  constructPayment: constructPayment
};