/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * refer to https://github.com/loatheb/leetcode-javascript/blob/master/006-zigzag-conversion/zigzag-conversion.js
 */
var convert = function (s, numRows) {
    if (numRows < 2) {
        return s;
    }

    //make a matrix as much as numRows
    let matrix = []
    for (let i = 0; i < numRows; i++) {
        matrix.push([])
    }
    // put string in a appropriate location
    let sLoc = 0
    let cursor = 0
    while (sLoc < s.length) {
        while (cursor < matrix.length && sLoc < s.length) {
            //down
            matrix[cursor].push(s[sLoc])
            cursor++
            sLoc++
        }
        cursor = cursor - 2
        while (cursor >= 0 && sLoc < s.length) {
            //up
            matrix[cursor].push(s[sLoc])
            cursor--
            sLoc++
        }
        cursor = cursor + 2
    }
    //make return string
    let str = ""
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[j].length; k++) {
            str += matrix[j][k]
        }
    }
    return str
};