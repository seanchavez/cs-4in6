function insertionSort(nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
}
