function longestPalindrome(s: string): string {
  let longestWords = '';

  for (let i = 0; i < s.length; i++) {
    const oddLengthStr = expand(s, i, i);
    const evenLengthStr = expand(s, i, i + 1);
    const currentStr = oddLengthStr.length > evenLengthStr.length ? oddLengthStr : evenLengthStr;
    longestWords = longestWords.length > currentStr.length ? longestWords : currentStr;
  }

  return longestWords;
}

function expand(s: string, left: number, right: number) {
  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

console.log(longestPalindrome('cbbd'));
