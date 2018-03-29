const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const quickSort = require('./../lib/quick-sort');
const arrayGenerator = require('./../lib/array-generator');
const unsortedArray = arrayGenerator(10);

describe('Merge Sort', function() {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it('should return an array', () => {
    let sortedArray = quickSort(unsortedArray);

    assert.equal(sortedArray.length, unsortedArray.length);
  });

  it('should sort an array of numbers from lowest to highest', () => {
    let sortedArray = quickSort(unsortedArray);

    assert.deepEqual(sortedArray, unsortedArray.sort());
  });
});