// // rest operator retorna argumentos em array
// let sum = (...args) => {
//     console.log(args)
// }
// console.log(sum(1,2,3));

// let sum2 = (a, b, ...args) => {
//     console.log(a, b, args)
// }
// console.log(sum2(1,2,3,4))

// spread operator 
let multiply = (...args) => args.reduce((count, value) => count * value, 1);

let sum = (...args) => {
    return multiply(...args);
}
console.log(sum(1,2,3));

// spread operator com strings
let str = "daniele reis oliveira"

function logArgs(...args) {
    console.log(args);
}

logArgs(...str)

// mandar um array sendo cada item um parametro da função

let arr = [1,2,3,4]

logArgs(...arr)

// spread operator object

const test = {
    test: 'teste'
}

const test1 = {
    ...test,
    test1: 'test1'
}
console.log(test1)

// spread operator clone object
const obj = {
    test: 123
}

const obj2 = {
    ...obj
}


