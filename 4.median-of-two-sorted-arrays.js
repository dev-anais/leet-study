/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = nums1.concat(nums2);
    nums = nums.sort(function (a, b) { return a - b });
    let middleIdx = nums.length / 2
    let result
    if (Number.isInteger(middleIdx)) {
        //In case of even
        result = (nums[middleIdx - 1] + nums[middleIdx]) / 2
    } else {
        //In case of odd number
        middleIdx = Math.floor(middleIdx)
        result = nums[middleIdx]
    }
    return result
};