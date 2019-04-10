function doubleEach(array) {
  return array.map(double);
}

const double = value => 2 * value;

function SquareEach(array) {
  return array.map(square);
}

const square = value => value * value;

function doubleAndSquareEach(arry) {
  return array.map(double).map(square);
}
