/**
 * @param {number[]} height
 * @return {number}
 * refer to https://leetcode.com/problems/container-with-most-water/discuss/221643/javascript-solution-to-container-with-most-water-problem-by-evanrmurphy
 */
var maxArea = function (height) {
    let max = 0
    let i = 0
    let j = height.length - 1
    let temp = 0
    let first, second
    while (i < j) {
        first = height[i]
        second = height[j]
        temp = Math.min(first, second) * (j - i)
        if (max < temp) max = temp
        if (first > second) j--
        else i++
    }
    return max
};