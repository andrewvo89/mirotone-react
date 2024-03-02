import { describe, expect, test } from 'vitest';

import { getBorderLeftClassName, getBorderRightClassName, getFlexModifierClassName, getSizeClassName } from './utils';

describe('getSizeClassName', () => {
  test('returns "form-group-small" when size is "small"', () => {
    const size = 'small';
    const className = getSizeClassName(size);
    expect(className).toBe('input-small');
  });

  test('returns "form-group" when size is "medium"', () => {
    const size = 'medium';
    const className = getSizeClassName(size);
    expect(className).toBe('');
  });
});

describe('getBorderLeftClassName', () => {
  test('returns "border-left" when borderLeft is true', () => {
    const borderLeft = true;
    const className = getBorderLeftClassName(borderLeft);
    expect(className).toBe('border-left');
  });

  test('returns empty string when borderLeft is false', () => {
    const borderLeft = false;
    const className = getBorderLeftClassName(borderLeft);
    expect(className).toBe('');
  });
});

describe('getBorderRightClassName', () => {
  test('returns "border-right" when borderRight is true', () => {
    const borderRight = true;
    const className = getBorderRightClassName(borderRight);
    expect(className).toBe('border-right');
  });

  test('returns empty string when borderRight is false', () => {
    const borderRight = false;
    const className = getBorderRightClassName(borderRight);
    expect(className).toBe('');
  });
});

describe('getFlexModifierClassName', () => {
  test('returns "one-fourth" when flexModifier is "1/4"', () => {
    const flexModifier = '1/4';
    const className = getFlexModifierClassName(flexModifier);
    expect(className).toBe('one-fourth');
  });

  test('returns "two-fourth" when flexModifier is "2/4"', () => {
    const flexModifier = '2/4';
    const className = getFlexModifierClassName(flexModifier);
    expect(className).toBe('two-fourth');
  });

  test('returns "three-fourth" when flexModifier is "3/4"', () => {
    const flexModifier = '3/4';
    const className = getFlexModifierClassName(flexModifier);
    expect(className).toBe('three-fourth');
  });

  test('returns empty string when flexModifier is "4/4"', () => {
    const flexModifier = '4/4';
    const className = getFlexModifierClassName(flexModifier);
    expect(className).toBe('');
  });
});
