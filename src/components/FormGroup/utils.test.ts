import { describe, expect, test } from 'vitest';

import { getIsDisabledClassName, getSizeClassName } from './utils';

describe('getSizeClassName', () => {
  test('returns "form-group-small" when size is "small"', () => {
    const size = 'small';
    const className = getSizeClassName(size);
    expect(className).toBe('form-group-small');
  });

  test('returns "form-group" when size is "medium"', () => {
    const size = 'medium';
    const className = getSizeClassName(size);
    expect(className).toBe('form-group');
  });
});

describe('getIsDisabledClassName', () => {
  test('returns "form-group__disabled" when isDisabled is true', () => {
    const isDisabled = true;
    const className = getIsDisabledClassName(isDisabled);
    expect(className).toBe('form-group__disabled');
  });

  test('returns empty string when isDisabled is false', () => {
    const isDisabled = false;
    const className = getIsDisabledClassName(isDisabled);
    expect(className).toBe('');
  });
});
