import { describe, test, expect } from 'vitest';
import { stringToInteger } from './8.string-to-integer-atoi';

describe('formatKoreanCurrency', () => {
  test('0-1', () => {
    expect(stringToInteger('0-1')).toBe(0);
  });

  test('words and 987', () => {
    expect(stringToInteger('words and 987')).toBe(0);
  });

  test('1337c0d3', () => {
    expect(stringToInteger('1337c0d3')).toBe(1337);
  });

  test(' -042', () => {
    expect(stringToInteger(' -042')).toBe(-42);
  });

  test('1337c0d3', () => {
    expect(stringToInteger('1337c0d3')).toBe(1337);
  });
  test('   +0 123', () => {
    expect(stringToInteger('   +0 123')).toBe(0);
  });
});
test('+  413', () => {
  expect(stringToInteger('+  413')).toBe(0);
});
