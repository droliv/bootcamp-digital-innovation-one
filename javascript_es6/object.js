let user = {
    name: 'Daniele'
}

user.name = 'Daniele Oliveira';
user['name'] = 'Daniele Oliveira';

const prop = 'name';
user[prop] = 'Daniele'

// criar uma propriedade
user.lastname = 'Oliveira'

// deletar uma propriedade
delete user.lastname;

// retornar as chaves de um objeto
Object.keys(user);

// retornar os valores
Object.values(user);

// retorna array de arrays com chave e valor dos objetos
Object.entries(user);

// Merge das propriedades de um objeto
Object.assign({}, user, {fullName: 'Daniele Oliveira'});

// previne alterações em um objeto
Object.freeze(user);

// permite apenas a alteração de propriedades do objeto
Object.seal(user);

