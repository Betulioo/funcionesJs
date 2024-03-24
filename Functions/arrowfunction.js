//Functions in JavaScript
//Q13 - Callback Function

const add = (firstNum, secondNum) => {
  return firstNum * secondNum;
};

// 1 - Sintaxis la funcion arrow se escribe diferente, se utiliza la palabra reservada const seguido del nombre de la funcion,

function circle(num) {
  return num * num;
}

const circleFn = (num) => {
  return num * num;
};

// 2 - return implicito

const circleArrow = (num) => num * num;

// 3 - argumentos

function fn() {
  console.log(arguments);
}
// fn(1, 2, 3, 4);

const fnArr = () => {
  console.log(arguments);
};
// fnArr(1, 2, 3, 4);

// 4 - "this" keyword
let user = {
  name: "Betulioo",
  rec1: () => {
    console.log("subscribite to " + this.name);
  },
  rec2() {
    console.log("subscribite to " + this.name);
  },
};

user.rec1();
user.rec2();
