
// return implicito
let sum = (a, b) => a + b;

// ocultar parenteses caso tenha apenas um parametro
let sum2 = a => a + 2;

// return de objetos literais
let createObj = () => ({id: 1});

// Gerar objeto a partir de uma função construtora
function Car() {
    this.marca = 'Gol'
}
let c = new Car();


