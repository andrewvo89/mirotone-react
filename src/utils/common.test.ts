import { describe, expect, test } from 'vitest';
import { isString } from './common';

describe('isString', () => {
  test('should return true for string', () => {
    expect(isString('string')).toBe(true);
  });

  test('should return false for number', () => {
    expect(isString(123)).toBe(false);
  });
});
