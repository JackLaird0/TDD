const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const insertionSort = require('./../lib/insertion-sort');
const arrayGenerator = require('./../lib/array-generator');
const unsortedArray = arrayGenerator(10);

describe ('Insertion Sort', function() {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should return an array', () => {
    let sortedArray = insertionSort(unsortedArray);

    assert.deepEqual(sortedArray, unsortedArray);
  });

  it('should sort an array of numbers from lowest to highest', () => {
    let sortedArray = insertionSort(unsortedArray);

    assert.deepEqual(sortedArray, unsortedArray.sort());
  });

  it('should sort letters alphabetically', () => {
    let newArray = ['b', 'e', 'a', 'h'];
    let sortedArray = insertionSort(newArray);

    assert.equal(sortedArray, newArray.sort());
  });
});