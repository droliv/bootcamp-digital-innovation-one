// // Usando prototype

// function Pessoa (name) {
//     this.name = name
// }

// const p = new Pessoa('Daniele');
// console.log(p);

// console.log(p.__proto__ === Pessoa.prototype);

// // function Animal (qtdPatas) {
// //     this.qtdPatas = qtdPatas;
// //     this.movimentar = function () {};
// // }

// function Animal (){}

// Animal.prototype.qtdPatas = 0;
// Animal.prototype.movimentar = function () {}

// // function Cachorro (morde) {
// //     Animal.call(this, 4);
// //     this.morde = morde;
// //     this.latir = function() {
// //         console.log('au au!');
// //     }
// // }

// function Cachorro (morde) {
//     this.qtdPatas = 4;
//     this.morde = morde;
// }

// Cachorro.prototype = Object.create(Animal);
// Cachorro.prototype.latir = function() {
//     console.log('au au!');
// }

// Usando classes es6

'use strict'

class Animal {
    constructor(qtdPatas) {
        this.qtdPatas = qtdPatas
    }
    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = morde
    }
    latir() {
        console.log('au au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);