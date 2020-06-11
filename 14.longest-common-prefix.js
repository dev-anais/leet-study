/**
 * @param {string[]} strs
 * @return {string}
 * find a better answer https://codereview.stackexchange.com/questions/182217/longest-common-prefix 
 * it is easier to read.
 */
var longestCommonPrefix = function (strs) {
    let temp = "", i = 0, j = 2
    if (strs.length < 2) {
        temp = strs.length == 0 ? "" : strs[0]
        return temp
    }

    while (i < strs[0].length && strs[0][i] == strs[1][i]) {
        temp += strs[0][i]
        i++
    }

    while (j < strs.length && temp != "") {
        for (var k = 0; k < temp.length; k++) {
            if (strs[j][k] != temp[k]) {
                temp = temp.slice(0, k);
                break
            }
        }
        j++
    }
    return temp

};