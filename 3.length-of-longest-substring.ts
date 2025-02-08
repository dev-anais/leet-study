function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;

  let start = 0;
  let end = 0;
  let max = 0;
  let map = new Map();
  while (start <= end && end < s.length) {
    if (map.has(s[end])) {
      if (map.get(s[end]) < start) {
        max = Math.max(end - start + 1, max);
      } else {
        start = map.get(s[end]) + 1;
      }
      map.set(s[end], end);
    } else {
      map.set(s[end], end);
      max = Math.max(end - start + 1, max);
    }
    end++;
  }

  return max;
}

lengthOfLongestSubstring('pwwkew');
