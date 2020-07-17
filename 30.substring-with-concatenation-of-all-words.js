/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * refered to https://leetcode.com/problems/substring-with-concatenation-of-all-words/discuss/181494/Share-my-concise-JavaScript-solution
 */
const findSubstring = (s, words) => {
  if (!words || words.length === 0) return
  const wordLen = words[0].length,
    count = words.length,
    leng = wordLen * count,
    res = []
  const map = {}
  for (word of words) {
    // ~~는 false를 0으로 true를 1으로 1.333를 1으로 바꿔주는 역할을 함
    map[word] = ~~map[word] + 1
  }
  for (let i = 0; i <= s.length - leng; i++) {
    const tmp = Object.assign({}, map)
    for (let j = i; j < i + leng; j += wordLen) {
      const str = s.substr(j, wordLen)
      if (!(str in tmp)) break
      if (--tmp[str] === 0) delete tmp[str]
    }
    if (Object.keys(tmp).length == 0) res.push(i)
  }
  return res
}
