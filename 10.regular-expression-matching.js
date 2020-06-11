/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 refer to https://leetcode.com/problems/regular-expression-matching/discuss/359940/javascript-solution
 */
var isMatch = function(s, p) {
    let regex = new RegExp(p)
	return s.match(regex) ? s === s.match(regex)[0] : false
};