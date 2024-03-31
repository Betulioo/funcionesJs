// private counter with clousure

function counter() {
  var _counter = 0;

  function add(aumentar) {
    _counter += aumentar;
  }

  function mostrar() {
    return `el valor del contador es = ${_counter}`;
  }

  return { add, mostrar };
}

const c = counter();

c.add(10);
c.add(20);
console.log(c.mostrar());
