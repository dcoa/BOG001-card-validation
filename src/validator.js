const validator = {
    isValid: function isValid(cardCreditNumber){
      let cardNumber = Array.from(cardCreditNumber);
      let reverseNumber = cardNumber.reverse();
      let sumNumber = [];

      reverseNumber.forEach((a, i) => {
      if (a, i % 2 !== 0) {
        a = parseInt(a * 2);
          if (a > 9) {
          a = sumaDigit(a);
        }
      }
       sumNumber.push(parseInt(a));
    });
      return validate(sumNumber);
    },

    maskify: function maskify(cardCreditNumber){
      if(cardCreditNumber.length > 4){
        let cutNumber = cardCreditNumber.substr(0,cardCreditNumber.length-4);
        let changeString = cutNumber.replace(/[a-z0-9]/g, '#');
        let lastNumber = cardCreditNumber.substr(-4);
        let fullNumber = changeString.concat(lastNumber);
        return fullNumber;
      } else {
        return cardCreditNumber;
      }
  },
};

function sumaDigit(a) {
       let numstring = a.toString();
       let c = parseInt(numstring.charAt(0));
       let b = parseInt(numstring.charAt(1));
       a = c + b;
     return a;
}

function validate(sumNumber) {
 let total = sumNumber.reduce((a, b) => a + b, 0);
 if (total % 10 === 0) {
   return true;
 } else {
   return false;
 }
}



export default validator;
