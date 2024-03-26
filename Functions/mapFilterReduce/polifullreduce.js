//Pollifill for Reduce

//arr.reduce((acumulador,elementoActual, index, array)=>{}, valorInicial).

// Array.prototype.betoReduce = function (funcion, valorInicial) {
//   let acumulador = valorInicial;
//   for (let i = 0; i < this.length; i++) {
//     acumulador = acumulador ? funcion(acumulador, this[i], i, this) : this[i];
//   }
//   return acumulador;
// };
Array.prototype.betoReduce = function (funcion, valorInicial) {
  let acumulador = valorInicial;
  for (let i = 0; i < this.length; i++) {
    if (acumulador !== undefined) {
      acumulador = funcion(acumulador, this[i], i, this);
    } else {
      acumulador = this[i];
    }
  }
  return acumulador;
};
const numeros = [1, 2, 3, 4];

//escrita con funcion normal
const suma = numeros.betoReduce(function (
  acumulador,
  elementoActual,
  i,
  array
) {
  console.log(acumulador);
  console.log(elementoActual);
  console.log(i);
  console.log(array);
  return acumulador + elementoActual;
},
0);

console.log(suma);
