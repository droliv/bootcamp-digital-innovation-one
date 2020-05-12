'use strict'

function Person(initialName) {
    let name = initialName;

    this.getName = function () {
        return name;
    }

    this.setName = function (newName) {
        name = newName;
    }
}

const p = new Person('Daniele');

console.log(p);
console.log(p.getName());
console.log(p.name);

p.setName('Daniele Oliveira');
console.log(p.getName());
