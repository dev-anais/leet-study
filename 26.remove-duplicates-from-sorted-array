/**
 * @param {number[]} nums
 * @return {number}
 * refer to https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/139200/Javascript-simple-solution
 */
var removeDuplicates = function (nums) {
    var l = r = 0
    while (r < nums.length) {
        nums[l] = nums[r]
        l++, r++
        while (nums[r] == nums[r - 1]) {
            r++
        }
    }
    return l
};