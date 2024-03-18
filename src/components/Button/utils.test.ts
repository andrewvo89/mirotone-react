import { describe, expect, test } from 'vitest';

import styles from './Button.module.css';
import { getGapClassName, getIsLoadingClassName, getSizeClassName, getVariantClassName } from './utils';

describe('getSizeClassName', () => {
  test('should return small button class name', () => {
    expect(getSizeClassName('small')).toBe('button-small');
  });

  test('should return medium button class name', () => {
    expect(getSizeClassName('medium')).toBe('button-medium');
  });

  test('should return empty string', () => {
    expect(getSizeClassName('large')).toBe('');
  });
});

describe('getVariantClassName', () => {
  test('should return primary button class name', () => {
    expect(getVariantClassName('primary')).toBe('button-primary');
  });

  test('should return secondary button class name', () => {
    expect(getVariantClassName('secondary')).toBe('button-secondary');
  });

  test('should return tertiary button class name', () => {
    expect(getVariantClassName('tertiary')).toBe('button-tertiary');
  });

  test('should return danger button class name', () => {
    expect(getVariantClassName('danger')).toBe('button-danger');
  });
});

describe('getIsLoadingClassName', () => {
  test('should return loading button class name', () => {
    expect(getIsLoadingClassName(true)).toBe(`button-loading ${styles['button-loading']}`);
  });

  test('should return empty string', () => {
    expect(getIsLoadingClassName(false)).toBe('');
  });
});

describe('getGapClassName', () => {
  test('should return empty string', () => {
    expect(getGapClassName(undefined)).toBe('');
  });

  test('should return gap class name', () => {
    expect(getGapClassName('small')).toBe(styles['gap']);
  });
});
