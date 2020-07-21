/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 refered to https://leetcode.com/problems/next-permutation/discuss/669387/JavaScript-Clean-Solution
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i)
      swap(i, large)
      reverse(i + 1)
      return
    }
  }
  nums.sort((a, b) => a - b)

  function reverse(idx) {
    let start = idx,
      end = nums.length - 1
    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }

  function swap(i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  function nextLarge(idx) {
    for (let i = nums.length - 1; i > idx; i--) {
      if (nums[idx] < nums[i]) return i
    }
  }
}
