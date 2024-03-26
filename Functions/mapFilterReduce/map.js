// What is map()¿?

//crea un nuevo array desde uno existente, aplicando una funcion a cada uno de los elementos iterados.
// La función map() no modifica el arreglo original, sino que devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento.

const numeros = [1, 2, 3, 4];
//escrita con una funcion normal
const multiplicaPorTres = numeros.map(function (numero, index, arr) {
  console.log(numero);
  console.log(index);
  console.log(arr);
});
//escrita con arrow function
const numerosMapeados = numeros.map((numero, index, arr) => {
  console.log(numero);
  console.log(index);
  console.log(arr);
});
