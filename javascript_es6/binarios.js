// in
something in somethingItems

// arrays

let arvores = new Array("loureiro", "cedro", "carvalho", "palmeira", "mangueira");
0 in arvores; // retorna true
6 in arvores; // retorna false
'cedro' in arvores; // retorna false
'cedro' in arvores[1]; // retorna true
'length' in arvores; // retorna true


// instaceOf
objeto instanceof tipoObjeto

let dia = new Date();
 console.log(dia instanceof Date);