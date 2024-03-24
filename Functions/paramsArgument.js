//Functions in JavaScript
//Q10 - Params vs Arguments

function circle(num1, num2) {
  //Params values recibidos
  console.log(num1 * num2);
}

circle(5, 6); //Arguments values pasados

//Spread Operators vs Rest Operators

function circle(...nums) {
  //Rest Operators
  console.log(nums[0] * nums[1]);
}
var arr = [5, 6];
circle(...arr); //Spread Operators

//spread operators se utiliza para "descomponer" o "expandir" un iterable(como un array o un objeto iterable) en sus elementos individuales. Se usa para copiar elementos de un array u objeto en otro array u objeto, o para pasar elementos de un array como argumentos a una funcion.

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // copiar elementos de array1 y agregar 4 y 5
console.log(array2); // Output: [1, 2, 3, 4, 5]

const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 }; // copiar propiedades de objeto1 y agregar c: 3
console.log(objeto2); // Output: {a: 1, b: 2, c: 3}

//rest operators se utiliza para agrupar elementos restantes en un array.Se utiliza en la definicion de funciones para capturar un numero indefinido de argumentos en una sola variable.

function sumar(...numeros) {
  //rest operators
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // Output: 15
