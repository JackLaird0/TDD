const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const mergeSort = require('./../lib/merge-sort');
const arrayGenerator = require('./../lib/array-generator');
const unsortedArray = arrayGenerator(10);

describe('Merge Sort', function() {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should return an array', () => {
    let sortedArray = mergeSort(unsortedArray);

    assert.equal(sortedArray.length, unsortedArray.length);
  });

  it('should sort an array of numbers from lowest to highest', () => {
    let sortedArray = mergeSort(unsortedArray);

    assert.deepEqual(sortedArray, unsortedArray.sort());
  });
});