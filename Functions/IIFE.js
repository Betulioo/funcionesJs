//Functions in JavaScript
//Q4 - What is IIFE? Inmidiatly invoque function expression/Expresión de Función Invocada Inmediatamente

//Es un patrón de diseño comúnmente utilizado en JavaScript. Este patrón permite definir una función anónima y ejecutarla inmediatamente después de su declaración

//normalmente una funcion se crea y se invoca de esta manera

function circle(num) {
  console.log(num * num);
}

circle(5);

//IIFE sería de esta manera

(function (num) {
  console.log(num * num);
})(5);
