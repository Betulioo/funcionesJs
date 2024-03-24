//Functions in JavaScript
//Q8 - Hoisting
functionName(); // betuliotech
console.log(x); //undefined

// El hoisting es un comportamiento en javaScript donde las declaraciones de variables y funciones son movidas al inicio de su ambito de ejecucion durante la fase de compilacion,por eso no da error, sin importar donde se hayan definido en el codigo fuente.Sin embargo con las variables var aunque la declaracion es movida arriba la igualacion no lo es, por eso muestra undefined.

//Cuando se declara uan variable con la palabra clave 'var' la declaracion de la variable se mueve al inicio de su ambito de ejecucion, pero la asignacion de valor permanece en su lugar.Esto significa que puedes usar la variable antes de declararla,pero su valor será 'undefined' hasta que se le asigne un valor real.

//Las declaraciones de funciones tambien se 'elevan'(hoisting) al inicio de su ambito.Esto significa que puedes llamar a una funcion antes de que se declare en el codigo.
function functionName() {
  console.log(y); //undefined

  var y = 0;
  console.log("betuliotech");
}

var x = 5;
