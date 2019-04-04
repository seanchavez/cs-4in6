function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  sortedLeft = quickSort(left);
  sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}
