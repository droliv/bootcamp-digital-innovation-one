const assert = require('assert');
const Math = require('../src/math-chai');
const expect = require('chai').expect;
// sinon -> usada para mocar dados de testes
const sinon = require('sinon');

describe('Math class test with chai', () => {
  before(() => {
    n1 = 5;
    n2 = 3;
  });
  it('Sum two numbers', (done) => {
    const math = new Math();
    expect(math.sum(n1, n2)).to.equal(8);
    done();
  });
  it.only('Calls req with sum and index values', (done) => {
    const req = {};
    const res = {
      load: sinon.spy(),
    };
    const math = new Math();
    math.printSum(req, res, 5, 5);
    expect(res.load.calledOnce).to.be.true;
    done();
  });
});
