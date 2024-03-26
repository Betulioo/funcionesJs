//Polifill for filter

Array.prototype.betoFillter = function (funcion) {
  let nuevoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (funcion(this[i], i, this)) {
      nuevoArray.push(this[i]);
    }
  }
  return nuevoArray;
};

const numeros = [1, 2, 3, 4];

//escrita con funcion normal
const mayoresQueDos = numeros.betoFillter(function (numero, i, arr) {
  console.log(numero > 2);
  console.log(i);
  console.log(arr);

  return numero > 2;
});

console.log(mayoresQueDos);
