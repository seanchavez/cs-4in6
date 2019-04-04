function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (arr1, arr2) => {
  const merged = []
  
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      merged.push(arr1.shift())
    } else {
      merged.push(arr2.shift())
    }
  }
  return merged.concat(arr1, arr2)
};
