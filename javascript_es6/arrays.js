const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}
const persons = [
    {
        name: 'Daniele',
        age: 33,
        gender: gender.WOMAN
    }
]

// retornar a quantidade de itens de um array
console.log(persons.length);

// verificar se é array
console.log(Array.isArray(persons));

// iterar os itens
persons.forEach(person => {
    console.log(person.name);
})

// filtrar itens do array
console.log(persons.filter(person => person.gender === gender.WOMAN))

// criar um novo array modificado
console.log(persons.map(person => {
    person.lastName = 'Oliveira';
    return person;
}))

// transformar array em outro tipo
 const totalAge = persons.reduce((age, person) => {
     age += person.age;
     return age;
 }, 0);
 console.log(totalAge);

 // juntando operações

 const totalEvenAges = persons.filter(person => person.age % 2 === 0)
                       .reduce((age, person) => {
                           age += person.age;
                           return age;
                       }, 0);
console.log(totalEvenAges);