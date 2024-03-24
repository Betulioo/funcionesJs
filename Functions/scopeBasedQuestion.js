//Functions in JavaScript
//Q7 - Function Scope - O/P Based Question

//cual seria el output de este for loop?
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1 * 1000);
}
//al ser i declarada con let, crea un bloque que hace que en cada vuelta el setTimeout accede a un valor diferente, poruqe let crea un ambito de bloque, por lo que el output seria 0 1 2 3 4

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1 * 1000);
}

//al ser i declarada con var, y no crearse el ambito de bloque, cuando el setTimeout recoge el valor ya var es igual a 5, por lo que el output sería 5 5 5 5 5
