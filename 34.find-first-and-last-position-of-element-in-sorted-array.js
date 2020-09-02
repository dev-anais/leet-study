/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [-1, -1]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break
    } else if (nums[i] == target) {
      if (result.indexOf(-1) != -1) {
        result = []
        if (nums[i + 1] != target) {
          result = [i, i]
          break
        } else {
          result.push(i)
          continue
        }
      } else {
        if (nums[i + 1] != target) {
          result.push(i)
          break
        } else continue
      }
    } else {
      continue
    }
  }
  return result
}
