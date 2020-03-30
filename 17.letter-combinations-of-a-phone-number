/**
 * @param {string} digits
 * @return {string[]}
 * refer to https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/139447/Clean-JavaScript-DFS-solution
 */
var letterCombinations = function (digits) {
    const matchLetter = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let result = []
    if (digits.lenth == 1) return result
    function stick(i, s) {
        if (i == digits.length) {
            result.push(s)
            return
        }
        for (let item of matchLetter[digits[i]]) {
            console.log("item", item)
            stick(i + 1, s + item)
        }
    }
    stick(0, '')
    return result
};