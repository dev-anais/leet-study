/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * refer to https://leetcode.com/problems/3sum-closest/discuss/481580/JavaScript-Solution
 */
var threeSumClosest = function (nums, target) {
    let result = Infinity
    nums.sort(function (a, b) { return a - b })

    for (let i = 0; i < nums.length - 2; i++) {

        for (var j = i + 1, k = nums.length - 1; j < k;) {
            let sum = nums[i] + nums[j] + nums[k]
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            }
            if (sum > target) {
                k--
            } else {
                j++
            }
        }
    }
    return result
};