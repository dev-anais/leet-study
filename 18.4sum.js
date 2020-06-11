/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * refer to https://leetcode.com/problems/4sum/discuss/165059/my-javascript-solution-(beats-88)
 */
var fourSum = function (nums, target) {
    let result = []
    if (nums.length < 4) return result

    nums.sort((a, b) => a - b)
    for (var first = 0; first < nums.length - 3; first++) {
        if (first > 0 && nums[first] == nums[first - 1]) continue
        for (var second = first + 1; second < nums.length - 2; second++) {
            if (second > first + 1 && nums[second] == nums[second - 1]) continue
            for (var third = second + 1, fourth = nums.length - 1; third < fourth;) {
                let sum = nums[first] + nums[second] + nums[third] + nums[fourth]
                if (sum == target) {
                    result.push([nums[first], nums[second], nums[third], nums[fourth]])
                    while (third < fourth && nums[third] == nums[third + 1]) third++
                    while (third < fourth && nums[fourth] == nums[fourth - 1]) fourth--
                    third++
                    fourth--
                }
                else if (sum < target) third++
                else fourth--
            }
        }
    }
    return result
};