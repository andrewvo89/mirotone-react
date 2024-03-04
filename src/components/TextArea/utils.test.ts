import { getSizeClassName } from './utils';
import { describe, expect, test } from 'vitest';

describe('getSizeClassName', () => {
  test('should return correct class name for size "small"', () => {
    const size = 'small';
    const className = getSizeClassName(size);
    expect(className).toBe('textarea-small');
  });

  test('should return empty string for size "medium"', () => {
    const size = 'medium';
    const className = getSizeClassName(size);
    expect(className).toBe('');
  });
});
