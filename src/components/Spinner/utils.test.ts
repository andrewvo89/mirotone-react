import { describe, expect, test } from 'vitest';

import { SpinnerSize } from './';
import { getSizeClassName } from './utils';

describe('getSizeClassName', () => {
  test('should return "spinner-small" for size "small"', () => {
    const size: SpinnerSize = 'small';
    const result = getSizeClassName(size);
    expect(result).toBe('spinner-small');
  });

  test('should return "spinner-medium" for size "medium"', () => {
    const size: SpinnerSize = 'medium';
    const result = getSizeClassName(size);
    expect(result).toBe('spinner-medium');
  });

  test('should return "spinner-large" for size "large"', () => {
    const size: SpinnerSize = 'large';
    const result = getSizeClassName(size);
    expect(result).toBe('spinner-large');
  });
});
