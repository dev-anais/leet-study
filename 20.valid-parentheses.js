/**
 * @param {string} s
 * @return {boolean}
 * refer to https://leetcode.com/problems/valid-parentheses/discuss/164324/javascript-solution
 */
var isValid = function (s) {
    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let arr = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
            arr.push(s[i])
        } else {
            if (arr[arr.length - 1] == map[s[i]]) arr.pop()
            else return false
        }
    }
    return arr.length == 0 ? true : false
};