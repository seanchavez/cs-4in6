const addTogether = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue);

function concatenateStringsWithSpaces(array) {
  array.reduce(
    (accumulator, currentValue) => accumulator + currentValue + " ",
    ""
  );
}

function squaresAndSubtracts(array) {
  array
    .map(el => el * el)
    .reduce((accumulator, currentValue) => accumulator - currentValue);
}
