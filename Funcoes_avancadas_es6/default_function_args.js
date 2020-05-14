
// lazy evaluation
let randomNumber = () => {
    return Math.random() * 10;
}

// parametro default caso não seja passado um parametro
let multiply = (a, b = randomNumber()) => a * b;
console.log(multiply(5, 2))