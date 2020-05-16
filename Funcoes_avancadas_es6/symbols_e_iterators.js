// symbol gera um id unico
const uniqId = Symbol();
console.log(uniqId);

// usar symbol para gerar propriedades privadas no objeto
let obj = {
  [uniqId]: 'Hello',
  name: 'Daniele',
};
console.log(obj);

// iterar array com symbol.itarator
let arr = [1, 2, 3, 4, 5];
console.log(arr[Symbol.iterator]().next());
