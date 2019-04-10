function filterOutOdds(arr) {
  return arr.filter(isEven);
}
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  } else return false;
};
