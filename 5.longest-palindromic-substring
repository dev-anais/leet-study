/**
 * @param {string} s
 * @return {string}
 * refer to https://leetcode.com/problems/longest-palindromic-substring/discuss/291864/js-solution
 */
var longestPalindrome = function (s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i
            let right = left + j
            while (s[left] && s[left] == s[right]) {
                left--
                right++
            }
            if (right - left - 1 > res.length) {
                res = s.slice(left + 1, right)
            }
        }
    }
    return res
};