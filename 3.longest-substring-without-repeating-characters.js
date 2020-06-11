/**
 * @param {string} s
 * @return {number}
 * Refer to https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/173877/on-javascript-solution
 */
var lengthOfLongestSubstring = function (s) {
    const visited = new Set();
    let left = 0
    let right = 0
    let res = 0
    while (right < s.length) {
        let currentChar = s.charAt(right);
        if (!visited.has(currentChar)) {
            visited.add(currentChar)
            res = Math.max(res, right - left + 1)
            right++
        } else {
            visited.delete(s.charAt(left))
            left++
        }
    }
    return res
}
