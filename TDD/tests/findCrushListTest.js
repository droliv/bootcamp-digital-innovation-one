const should = require('should');
const findCrushes = require('../findCrushesList');

describe('find crushes', () => {
    it ('soma crushes', () => {
        findCrushes.somaCrush(3,3).should.be.equal(6);
    });
    it ('passar um nome que não existe e deve retornar uma mensagem de pessoa não encontrada', () => {
        findCrushes.findCrush('Marcos Paulo').should.be.equal('Pessoa não encontrada');
    });
    it ('nome obrigatório', () => {
        findCrushes.findCrush('').should.be.equal('Nome obrigatório');
    });
    it ('Não aceita números', () => {
        findCrushes.findCrush(123).should.be.equal('Este campo só aceita strings');
    });
    it ('Retornar nome da lista', () => {
        findCrushes.findCrush('Eric').should.be.equal('Eric');
    });
})