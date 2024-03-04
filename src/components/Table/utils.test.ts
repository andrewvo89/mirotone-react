import { describe, expect, test } from 'vitest';

import { getHeadStickyClassName } from './utils';

describe('getHeadStickyClassName', () => {
  test('should return an empty string when headIsSticky is true', () => {
    const result = getHeadStickyClassName(true);
    expect(result).toBe('');
  });

  test('should return "table__no-sticky-headers" when headIsSticky is false', () => {
    const result = getHeadStickyClassName(false);
    expect(result).toBe('table__no-sticky-headers');
  });
});
