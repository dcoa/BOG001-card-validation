import validator from './validator.js';

function enviar () {
  let cardCreditCard =  "1234567890987654";
  validator.isValid(cardCreditCard);
}


console.log(validator);
