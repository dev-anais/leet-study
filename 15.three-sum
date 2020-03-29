/**
 * @param {number[]} nums
 * @return {number[][]}
 * refer to https://leetcode.com/problems/3sum/discuss/7407/JavaScript-Beat-94.29
 */
var threeSum = function (nums) {
    let result = []

    if (nums.length < 3) {
        return result;
    }

    nums.sort(function (a, b) { return a - b })

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return result

        if (i > 0 && nums[i] == nums[i - 1]) continue

        for (var j = i + 1, k = nums.length - 1; j < k;) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum == 0) {
                result.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] == nums[j - 1]) j++
                while (j < k && nums[k] == nums[k + 1]) k--
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return result
}

