/**
 * @param {number} x
 * @return {number}
 * refer to https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
 */
var reverse = function (x) {
    var reverValue = parseFloat(x.toString().split('').reverse().join(''))
    if (reverValue > Math.pow(2, 31)) {
        return 0;
    }
    return reverValue * Math.sign(x);
}

