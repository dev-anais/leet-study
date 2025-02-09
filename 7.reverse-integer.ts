function reverse(x: number): number {
  const isNegative = x < 0;
  let result = 0;
  x = Math.abs(x);
  while (x > 0) {
    const remain = x % 10;
    result = result * 10 + remain;
    x = Math.floor(x / 10);
  }
  console.log(result);
  return isNegative ? result * -1 : result;
}

console.log(reverse(-103));
console.log(reverse(401));
