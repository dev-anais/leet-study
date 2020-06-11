/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const limitNum = Math.pow(2,31)
    let res =  Math.trunc(dividend/divisor)
    if(res > limitNum -1) return limitNum -1
    else if (res < -limitNum) return -limitNum
    else return res   
};