// sempre que uma função retorna um objeto sem a necessidade de um 'new', ela é uma função factory.
function Pessoa () {
    return {
        name: 'Daniele',
        lastname: 'Oliveira'
    }
}

function Pessoa1 (name) {
    return {
        name,
        lastname: 'Oliveira'
    }
}

function Pessoa2 (props) {
    return {
        name: 'Daniele',
        lastname: 'Oliveira',
        ...props
    }
}

const p = Pessoa();
const p1 = Pessoa1('Daniele');
const p2 = Pessoa2({age: 33});

console.log(p, p1, p2);