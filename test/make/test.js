const assert = require('assert');
const sumOfOther = require('../../src/make/make');

describe('make', () => {
  it('make', () => {
    const resultMake = make(15)(34, 21, 666)(41)((a,b)=>a+b);
    assert.deepEqual(resultMake, 777);
  });

  it('make', () => {
    const resultMake = make(10)(2, 1, 5)(8)(10)((a, b)=>a*b);
    assert.deepEqual(resultMake, 8000);
  });

  it('make', () => {
    const resultMake = make(17, -3, 12)(9, 0)(12, 11, 10)(11)((a,b)=>a-b);
    assert.deepEqual(resultMake, -45);
  });
});
