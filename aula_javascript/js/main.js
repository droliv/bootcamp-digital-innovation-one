// var name = "Daniele Reis";
// console.log("Bem vindo " + name.replace("Reis", "Oliveira").toUpperCase());

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
// console.log(lista.toString());
console.log(lista.join(" - "));

var frutas = [
    {
        nome: "uva",
        cor: "roxo"
    }
]
console.log(frutas[0].nome)

// var idade = prompt("Qual a sua idade?");

// if (idade >=18){
//     alert("Maior de idade")
// } else {
//     alert("Menor de idade")
// }

// function soma(a,b) {
//     return a+b;
// }

// console.log(soma(3,8));

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function trocaTexto(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}