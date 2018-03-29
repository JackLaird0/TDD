function arrayGenerator(length) {
  const newArray = [];
  
  for (let i = 0; i < length; i++) {
    newArray.push(Math.floor(Math.random() * 1000))
  }
  return newArray;
}

module.exports = arrayGenerator;