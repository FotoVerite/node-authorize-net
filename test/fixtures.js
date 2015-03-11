var cc = {
  creditCard: 'visa',
  cardNumber: '4012888818888',
  expirationDate: '12/25',
  cardCode: '666'
};

var address1 = {
  address: '14 Main Street',
  city: 'Pecan Springs',
  zip: '44628',
  state: 'TX',
  country: 'USA'
}

var person1 = {
  card: cc,
  billing: address1,
  shipping: address1
}

module.exports = {
  person1: person1
};