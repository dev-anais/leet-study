function reverse(x: number): number {
  const absoluteNumber = Math.abs(x);
  const multiplyForAbs = absoluteNumber !== x ? -1 : 1;
  return Number(absoluteNumber.toString().split('').reverse().join('')) * multiplyForAbs;
}

console.log(reverse(103));
console.log(reverse(100));
