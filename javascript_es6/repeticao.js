
let arr = [3, 5, 7];
arr.foo = 'hello';

// for in retorna todos os indices
for (let i in arr) {
    console.log(i);
}

// for of retorna apenas as propriedades numeradas
for (let i of arr) {
    console.log(i);
}