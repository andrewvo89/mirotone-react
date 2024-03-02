import { describe, expect, test } from 'vitest';
import { isNonEmptyString } from './common';

describe('isString', () => {
  test('should return true for string', () => {
    expect(isNonEmptyString('string')).toBe(true);
  });

  test('should return false for number', () => {
    expect(isNonEmptyString(123)).toBe(false);
  });
});
