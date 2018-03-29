function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array.pop();
  let partOne = [];
  let partTwo = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      partOne.push(array[i]);
    } else {
      partTwo.push(array[i]);
    }
  }
  return (quickSort(partOne)).concat(pivot, quickSort(partTwo));
}

module.exports = quickSort;