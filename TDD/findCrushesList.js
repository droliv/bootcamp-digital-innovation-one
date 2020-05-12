const somaCrush = (n1, n2) => n1 + n2;

const crushes = [
  'Mauricio', 'Eric'
]
const findCrush = (nome) => {
    if (nome) {
        if (typeof nome !== 'string') {
            return "Este campo só aceita strings"
        } else{
            let crush = crushes.find(crush => crush === nome);
            return crush ? crush : 'Pessoa não encontrada'
        }
    } else {
        return "Nome obrigatório"
    }
};


module.exports = {
    somaCrush,
    findCrush
}