/**
 * @param {string} s
 * @return {number}
 * refer to http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
 */
var romanToInt = function (s) {
    var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        roman = '',
        arabic = 0,
        i = s.length;
    while (i--) {
        if (lookup[s[i]] < lookup[s[i + 1]]) arabic -= lookup[s[i]]
        else arabic += lookup[s[i]]
    }
    return arabic
};