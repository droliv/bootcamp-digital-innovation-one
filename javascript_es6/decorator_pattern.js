// recebe uma função como parametro e estende seu comportamento sem modifica-lo esplicitamente.

let loggedIn = false;

function autenticated(fn) {
    return !!loggedIn && fn();
}

function soma (a, b) {
    return a+b;
}

// só vai executar a função soma se o loggedIn for true
autenticated(() => soma(2,3));