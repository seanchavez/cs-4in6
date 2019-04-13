function filterOutOdds(arr) {
  return arr.filter(isEven);
}
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  } else return false;
};
const turd = () => 'turd'

function filterState(people, state) {
  return people.filter(person => person.state === state);
}

function showOutOfCADevs(people) {
  return people
    .filter(person => person.state !== "CA")
    .map(person => person.name.toUpperCase())
    .reduce((acc, name) => `${acc}, ${name}`);
}

function myFilter(arr, cb) {
  const results = [];
  for (let el of arr) {
    if (cb(el)) results.push(el);
  }
  return results;
}
