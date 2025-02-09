function longestPalindrome(s: string): string {
  let maxString = '';

  for (let i = 0; i < s.length; i++) {
    const evenString = expand(s, i, i + 1);
    const oddString = expand(s, i, i);
    const currentLongestWord = evenString.length > oddString.length ? evenString : oddString;
    maxString = maxString.length > currentLongestWord.length ? maxString : currentLongestWord;
  }

  return maxString;
}

const expand = (s: string, start: number, end: number) => {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.substring(start + 1, end);
};

console.log(longestPalindrome('cbbd'));
