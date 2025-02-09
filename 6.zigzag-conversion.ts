function convert(s: string, numRows: number): string {
  const resultArray: string[][] = Array.from({ length: numRows }, () => []);
  let direction: 'down' | 'up' = 'down';
  let currentIndex = -1;
  for (let i = 0; i < s.length; i++) {
    if (direction === 'up' && currentIndex === 0) {
      direction = 'down';
    }
    if (direction === 'down' && currentIndex === numRows - 1) {
      direction = 'up';
    }

    if (direction === 'up') {
      currentIndex--;
    } else {
      currentIndex++;
    }
    resultArray[currentIndex].push(s[i]);
  }
  return resultArray.flat().join('');
}
console.log(convert('A', 1));
