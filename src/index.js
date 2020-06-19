import validator from './validator.js';

const element = document.querySelector('form');
  element.addEventListener('submit', event => {
  event.preventDefault();
});

const donateButton = document.getElementsByClassName('donate-btn');

for (var i = 0; i < donateButton.length; i++) {
  donateButton[i].addEventListener('click', show);
}
const form = document.getElementById("form-box");
form.addEventListener("submit", getInfo);


function getInfo (){
  let creditCardNumber = document.getElementById('numberCreditCard').value;
  let numberIsvalid = validator.isValid(creditCardNumber);
  let numberMask = validator.maskify(creditCardNumber);

  if (numberIsvalid == true) {
      pass();
      document.getElementById("numberCreditCard-mask").innerHTML = numberMask;
    } else {
      document.getElementById('false').innerHTML = '*Su tarjeta no es válida';
      var btn1 = document.getElementById("back");
      var btn2 = document.getElementById("valid");
      btn1.style.display = 'block';
      btn2.style.display = 'none';
    }
}

//Muestra el formulario para donar
function show(){
  let div1 = document.getElementById('aboutUs');
  let div2 = document.getElementById('select-donate');
  let div3 = document.getElementById('donation-Form');
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'block';
}

//Muestra mensaje de donación si la tarjeta es valida
function pass(){
  let div1 = document.getElementById('form-box');
  let div2 = document.getElementById('pass');
  div1.style.display = 'none';
  div2.style.display = 'block';
}
