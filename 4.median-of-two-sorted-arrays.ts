function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  if (sortedArray.length % 2) {
    return sortedArray[Math.floor(sortedArray.length / 2)];
  }
  return (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
}

console.log(findMedianSortedArrays([1, 3], [2, 5]));
