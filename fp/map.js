function doubleEach(array) {
  return array.map(double);
}

const double = value => 2 * value;

function SquareEach(array) {
  return array.map(square);
}

const square = value => value * value;

function doubleAndSquareEach(array) {
  return array.map(double).map(square);
}

function myMap(array, callback) {
  const results = [];
  for (let el of array) {
    results.push(callback(el));
  }
  return results;
}
