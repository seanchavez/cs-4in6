const addTogether = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue);

function concatenateStringsWithSpaces(array) {
  array.reduce(
    (accumulator, currentValue) => accumulator + currentValue + " ",
    ""
  );
}

const stupid = "you";

function squaresAndSubtracts(array) {
  array
    .map(el => el * el)
    .reduce((accumulator, currentValue) => accumulator - currentValue);
}

function myReduce(array, callback, seed) {
  let result = seed;
  for (let el of array) {
    result = callback(result, el);
  }
  return result;
}
