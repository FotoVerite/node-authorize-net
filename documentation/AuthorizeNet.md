Global
===





---

authCaptureTransaction(amount, cardNumber, expirationYear, expirationMonth, other) 
-----------------------------
<p> submit a transaction request type authCaptureTransaction. </p>
<ul>
 <li>will resolve with an json object representing the `transactionResponse` xml field of the web service response it the resultCode is "Ok"</li>
 <li>will reject with an instance of AuthorizationNetError whose properties will be json version of the xml field `createTransactionResponse` if the resultCode is not "Ok"</li>
 <li>will reject with an instance of HttpError if the http status code of the response is higher or equal to 400</li>
 <li>will reject with an instance of AssertionError if one of the mandatory field is falsy</li>
 <li>will reject with an instance of Error if any other error occurs (parsing, etc)</li>
</ul>

**Parameters**

**amount**: number, the amount of the transaction

**cardNumber**: string | number, the card number used for the transaction

**expirationYear**: number, a four digits number for the expiration year of the card

**expirationMonth**: one or two digit for the expiration month of the card

**other**: object, a json object you want to mix with the transactionRequest field before transformation into xml. Note it will override already assigned properties

**Returns**: Promise, 

authOnlyTransaction(amount, cardNumber, expirationYear, expirationMonth, other) 
-----------------------------
<p> submit a transaction request type authOnlyTransaction. </p>
<ul>
 <li>will resolve with an json object representing the `transactionResponse` xml field of the web service response it the resultCode is "Ok"</li>
 <li>will reject with an instance of AuthorizationNetError whose properties will be json version of the xml field `createTransactionResponse` if the resultCode is not "Ok"</li>
 <li>will reject with an instance of HttpError if the http status code of the response is higher or equal to 400</li>
 <li>will reject with an instance of AssertionError if one of the mandatory field is falsy</li>
 <li>will reject with an instance of Error if any other error occurs (parsing, etc)</li>
</ul>

**Parameters**

**amount**: number, the amount of the transaction

**cardNumber**: string | number, the card number used for the transaction

**expirationYear**: number, a four digits number for the expiration year of the card

**expirationMonth**: one or two digit for the expiration month of the card

**other**: object, a json object you want to mix with the transactionRequest field before transformation into xml. Note it will override already assigned properties

**Returns**: Promise, 

captureOnlyTransaction(refTransId, amount, other) 
-----------------------------
<p> submit a transaction request type priorAuthCaptureTransaction. </p>
<ul>
 <li>will resolve with an json object representing the `transactionResponse` xml field of the web service response it the resultCode is "Ok"</li>
 <li>will reject with an instance of AuthorizationNetError whose properties will be json version of the xml field `createTransactionResponse` if the resultCode is not "Ok"</li>
 <li>will reject with an instance of HttpError if the http status code of the response is higher or equal to 400</li>
 <li>will reject with an instance of AssertionError if one of the mandatory field is falsy</li>
 <li>will reject with an instance of Error if any other error occurs (parsing, etc)</li>
</ul>

**Parameters**

**refTransId**: String | number, the transaction reference id returned by the web service after the related authorize only transaction

**amount**: number, the amount of the transaction

**other**: object, a json object you want to mix with the transactionRequest field before transformation into xml. Note it will override already assigned properties

**Returns**: Promise, 


---







