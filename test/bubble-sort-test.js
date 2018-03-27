const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const bubbleSort = require('./../lib/bubble-sort');
const arrayGenerator = require('./../lib/array-generator');
const unsortedArray = arrayGenerator(10)

describe ('Bubble Sort', function() {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should return an array', () => {
    let sortedArray = bubbleSort(unsortedArray);

    assert.deepEqual(sortedArray, unsortedArray);
  });

  it('should sort an array of numbers from lowest to highest', () => {
    let sortedArray = bubbleSort(unsortedArray);

    assert.deepEqual(sortedArray, unsortedArray.sort());
  });

  it('should sort letters alphabetically', () => {
    let newArray = ['b', 'e', 'a', 'h'];
    let sortedArray = bubbleSort(newArray);

    assert.equal(sortedArray, newArray.sort());
  });
});
