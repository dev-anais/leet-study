/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let revVal = 0
    let comVal = x
    let res = false
    if (x < 0) return res
    while (comVal > 0) {
        revVal = revVal * 10
        revVal += comVal % 10
        comVal = Math.floor(comVal / 10)
    }
    if (x == revVal) res = true
    return res
};