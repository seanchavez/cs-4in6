const insertionSort = () => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let removed = nums.splice(i, 1);
        nums.splice(j, 0, removed[0]);
      }
    }
  }
};

// function insertionSort(nums) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[i]) {
//         const temp = nums[j];
//         nums[j] = nums[i];
//         nums[i] = temp;
//       }
//     }
//   }
// }
