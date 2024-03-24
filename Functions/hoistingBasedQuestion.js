//Functions in JavaScript
//Q9 - Hoisting - O/P Based Question

var x = 21;
//Al estar declarada con var la declaracion se eleva(hoisting) dentro de la funcion fun que pero no la igualación a 20, y no se toma encuenta la variable global porque se resuelve primero lo local.
var fun = function () {
  console.log(x);
  var x = 20;
};

fun(); // undefined
