/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {

    let limitNum = Math.pow(2, 31)
    let res = parseInt(str)
    if (Number.isNaN(res)) res = 0
    if (res >= limitNum || res < limitNum * -1) {
        if (Math.sign(res) == 1) {
            res = limitNum - 1
        } else {
            res = limitNum * -1
        }
    }
    return res
};