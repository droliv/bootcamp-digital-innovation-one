const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', () => {
  // hooks -> funcoes que são executadas antes ou depois de cada teste
  // before, beforeEach, beforeAfter
  before(() => {
    n1 = 2;
    n2 = 3;
  });
  it('sum two numbers', (done) => {
    const math = new Math();
    assert.equal(math.sum(n1, n2), 5);
    // done -> garante que o teste tenha sido finalizado antes de retornar o assert
    done();
  });
  // test async function
  it('multiply two numbers', (done) => {
    const math = new Math();
    math.multiply(n1, n2, (value) => {
      assert.equal(value, 6);
      done();
    });
  });
  /**
   * it.only executa apenas um teste
   * it.skip pula aquele teste
   */
});
