import { describe, expect, test } from 'vitest';

import { getIconClassName } from './utils';

describe('getIconClassName', () => {
  test('should return the correct class name when an icon is provided', () => {
    const result = getIconClassName('activity');
    expect(result).toBe('icon icon-activity');
  });

  test('should return an empty string when no icon is provided', () => {
    const result = getIconClassName();
    expect(result).toBe('');
  });
});
