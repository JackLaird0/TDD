function mergeSort(array) {
  let split = Math.floor(array.length / 2);
  let partOne =  array.slice(0, split);
  let partTwo = array.slice(split, array.length);
  
  if (array.length <= 1) {
    return array;
  }
  
  return merge(mergeSort(partOne), mergeSort(partTwo));
}

function merge(partOne, partTwo) {
  let finalMerge = [];
  
  while (partOne.length && partTwo.length) {
    if (partOne[0] >= partTwo[0]) {
      finalMerge.push(partTwo.shift());
    } else {
      finalMerge.push(partOne.shift());
    }
  }
  
  while (partOne.length) {
    finalMerge.push(partOne.shift());
  }
  
  while (partTwo.length) {
    finalMerge.push(partTwo.shift());
  }
  
  return finalMerge;
}

module.exports = mergeSort;

