/**
 * @param {string} s
 * @return {number}
 * refered to https://leetcode.com/problems/longest-valid-parentheses/discuss/14173/JavaScript-solution-O(n)-with-comments
 */
var longestValidParentheses = function (s) {
  if (!s || !s.length) return 0

  const invalid = new Set()
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i)
    else {
      if (!stack.length) invalid.add(i)
      else stack.pop()
    }
  }

  while (stack.length) {
    invalid.add(stack.pop())
  }

  let max = 0,
    count = 0
  for (let i = 0; i <= s.length; i++) {
    if (i < s.length && !invalid.has(i)) count++
    else {
      max = Math.max(count, max)
      count = 0
    }
  }
  return max
}
