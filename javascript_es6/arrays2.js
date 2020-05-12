const arr = Array.of(1,2,3);

console.log(arr);

// array com 3 posições vazias
const arr1 = Array(3);

// // criar array a partir de itens iteráveis
// const divs = document.querySelectorAll('div');
// const divsArray = Array.from(divs);

const arrFruit = ["laranja", "maçã"];
const arrPush = arrFruit.push('uva');

// retorna o tamanho do array
console.log(arrPush);

console.log(arrFruit);

const arrPop = arrFruit.pop();

// retorna o item removido
console.log(arrPop);

console.log(arrFruit);

// add no inicio do array
const arrUnShift = arrFruit.unshift("banana");

// retorna tamanho do array
console.log(arrUnShift);

console.log(arrFruit);

// remove no inicio do array
const arrShift = arrFruit.shift();

// retorna o item removido
console.log(arrShift);

console.log(arrFruit);

const arrFuit2 = ["limão", "umbu"];

const concatArr = arrFruit.concat(arrFuit2);

console.log(concatArr);

// flat retorna um array com todos elementos de um sub array concatenados de forma recursiva

const idades = [10, 20, 21, 25, [31, 50, [42, 60]]];


console.log(idades.flat(2));

// find retorna o primeiro item que satisfaz a condição
const arrNum = [1,2,3,4];

const findNum = arrNum.find(value => value > 2);

console.log(findNum);

console.log(arrNum.includes(5));

// verificar se algum item do array atende a uma condição
const hasPar = arrNum.some(value => value % 2 === 0);
console.log(hasPar);

// verificar se todos os itens atendem a uma condição
const saoPar = arrNum.every(value => value % 2 === 0);
console.log(saoPar);

// sort ordena os elementos de um array
console.log(arrNum.sort((current, next) => next - current));

// inverte a ordem do array
console.log(arrNum.reverse());



