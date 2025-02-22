export function stringToInteger(s: string): number {
  let result: string = '';
  let signed = 1;

  for (let i = 0; i < s.length; i++) {
    // 빈칸일때는 다 넘기기
    if (s[i] === ' ') {
      if (result === '') {
        continue;
      }
      break;
    }

    // 기호 오는지 체크하기
    if (result === '' && ['-', '+'].includes(s[i])) {
      if (!Number.isInteger(Number(s[i + 1]))) {
        return 0;
      }
      signed = s[i] === '+' ? 1 : -1;
      continue;
    }
    // 숫자가 아닌 값이 올 경우에 break
    if (!Number.isInteger(Number(s[i]))) {
      break;
    }

    result = result.concat(s[i]);
  }
  return signed === -1 ? Math.max(-(2 ** 31), -1 * Number(result)) : Math.min(2 ** 31 - 1, Number(result));
}

console.log(stringToInteger('   +0 123'));
