const addTogether = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue);

function concatenateStringsWithSpaces(array) {
  array.reduce(
    (accumulator, currentValue) => accumulator + currentValue + " ",
    ""
  );
}
