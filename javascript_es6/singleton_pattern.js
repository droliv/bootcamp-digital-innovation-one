// cria uma única instancia da função construtora e retorna toda vez que for necessário utilizá-la.
// jquery

function Pessoa () {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Daniele'});

const p2 = Pessoa.call({name: 'Luiza'});

console.log(p, p2);
