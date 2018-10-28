const assert = require('assert');
const sumOfOther = require('../../src/sumOfOther/index');

describe('sumOfOther', () => {
    it('sum', () => {
    const resultSum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(resultSum, [8, 7, 6, 9]);
  });

    it('sum', () => {
      const resultSum = sumOfOther([5, -3, 9, 1]);
      assert.deepEqual(resultSum, [7, 15, 3, 11]);
    });

    it('sum', () => {
      const resultSum = sumOfOther([5, -3, 9, 1, 10, 13, -8]);
      assert.deepEqual(resultSum, [22, 30, 18, 26, 17, 14, 35]);
    });

    it('sum', () => {
        const resultSum = sumOfOther([]);
        assert.deepEqual(resultSum, []);
    });
  });
