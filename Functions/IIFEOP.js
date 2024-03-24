//Functions in JavaScript
//Q5 - IIFE - O/P Based Question?

// Tenemos una IIFE que pasado 1 se le asigna al parametro x, y esta retorna otra IIFE que se le pasa 2 y se guarda en el parametro y pero en esta funcion se hace un console.log() de x, en esta nueva IIFE x no esta declara, lo que hace Js es que busca dentro de esta función y en la función padre que será nuestra primera IIFE donde x es 1, por lo tanto el output que sale de console.log(x) es 1.
(function (x) {
  return (function (y) {
    console.log(x); // 1
  })(2);
})(1);

//clousure es la habilidad de una funcion de acceder variables y funciones que estan escritas fuera de su scope.
