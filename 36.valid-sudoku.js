/**
/**
 * refer to https://leetcode.com/problems/valid-sudoku/discuss/124036/Readable-Javascript-Solution-w-Comments
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowSet = new Array(9).fill().map(() => new Set())
  const colSet = new Array(9).fill().map(() => new Set())
  const mixedSet = new Array(9).fill().map(() => new Set())
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const currentTarget = board[row][col]
      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)
      if (currentTarget === '.') continue

      const rowRule = rowSet[row].has(currentTarget)
      const colRule = colSet[col].has(currentTarget)
      const mixedRule = mixedSet[mixedIdx].has(currentTarget)
      if (rowRule || colRule || mixedRule) return false

      rowSet[row].add(currentTarget)
      colSet[col].add(currentTarget)
      mixedSet[mixedIdx].add(currentTarget)
    }
  }
  return true
}
