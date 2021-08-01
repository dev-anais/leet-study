/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const targetIdx = nums.indexOf(target)
  if (targetIdx !== -1) {
    return targetIdx
  } else {
    const properLoc = nums.findIndex((item) => item > target)
    return properLoc === -1 ? nums.length : properLoc
  }
}
