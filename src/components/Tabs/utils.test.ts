import { describe, expect, test } from 'vitest';

import { getActiveClassName } from './utils';

describe('getActiveClassName', () => {
  test('should return "tab-active" when value is true', () => {
    expect(getActiveClassName(true)).toBe('tab-active');
  });

  test('should return an empty string when value is false', () => {
    expect(getActiveClassName(false)).toBe('');
  });
});
