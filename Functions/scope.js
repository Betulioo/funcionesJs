//Functions in JavaScript
//Q6 - Function Scope

let num1 = 20,
  num2 = 3,
  name = "Scoper";

// la funcion multiply() accede a las variables globales
function multiply() {
  return num1 * num2;
}

multiply(); // return 60

// una funcion anidada que declara nuevamente las variables num1 y num2 sustituyendolas dentro de ellas, por lo que la funcion add() al utilizar num1 + num2 accede a las variables creadas en su padre, y la variable name si la coge de la varible global.

function optenerScope() {
  let num1 = 2,
    num2 = 3;
  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(optenerScope()); // "Scoper scored 5"

// otro ejemplo de scope
function exampleFunction() {
  var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
  console.log("funcion interna");
  console.log(x);
}

console.log(x); // error

// la variable al estar creada dentro del scope de la funcion, no puede ser accedida desde fuera.

var x = "función externa declarada";

exampleFunction();

function exampleFunction() {
  console.log("funcion interna");
  console.log(x);
}

console.log("funcion externa");
console.log(x);
