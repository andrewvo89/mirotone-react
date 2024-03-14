import { describe, expect, test } from 'vitest';
import {
  getAlignContentClassName,
  getAlignItemsClassName,
  getColumnGapClassName,
  getFlexDirectionClassName,
  getFlexFlowClassName,
  getFlexWrapClassName,
  getGapClassName,
  getJustifyContentClassName,
  getRowGapClassName,
} from './utils';

describe('getAlignContentClassName', () => {
  test('should return an empty string when alignContent is undefined', () => {
    const result = getAlignContentClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when alignContent is defined', () => {
    const result = getAlignContentClassName('center');
    expect(result).toBe('align-content');
  });
});

describe('getAlignItemsClassName', () => {
  test('should return an empty string when alignItems is undefined', () => {
    const result = getAlignItemsClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when alignItems is defined', () => {
    const result = getAlignItemsClassName('center');
    expect(result).toBe('align-items');
  });
});

describe('getColumnGapClassName', () => {
  test('should return an empty string when columnGap is undefined', () => {
    const result = getColumnGapClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when columnGap is defined', () => {
    const result = getColumnGapClassName('10px');
    expect(result).toBe('column-gap');
  });
});

describe('getFlexDirectionClassName', () => {
  test('should return an empty string when flexDirection is undefined', () => {
    const result = getFlexDirectionClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when flexDirection is defined', () => {
    const result = getFlexDirectionClassName('row');
    expect(result).toBe('flex-direction');
  });
});

describe('getFlexFlowClassName', () => {
  test('should return an empty string when flexFlow is undefined', () => {
    const result = getFlexFlowClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when flexFlow is defined', () => {
    const result = getFlexFlowClassName('row nowrap');
    expect(result).toBe('flex-flow');
  });
});

describe('getFlexWrapClassName', () => {
  test('should return an empty string when flexWrap is undefined', () => {
    const result = getFlexWrapClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when flexWrap is defined', () => {
    const result = getFlexWrapClassName('wrap');
    expect(result).toBe('flex-wrap');
  });
});

describe('getGapClassName', () => {
  test('should return an empty string when gap is undefined', () => {
    const result = getGapClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when gap is defined', () => {
    const result = getGapClassName('10px');
    expect(result).toBe('gap');
  });
});

describe('getJustifyContentClassName', () => {
  test('should return an empty string when justifyContent is undefined', () => {
    const result = getJustifyContentClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when justifyContent is defined', () => {
    const result = getJustifyContentClassName('center');
    expect(result).toBe('justify-content');
  });
});

describe('getRowGapClassName', () => {
  test('should return an empty string when rowGap is undefined', () => {
    const result = getRowGapClassName();
    expect(result).toBe('');
  });

  test('should return the correct class name when rowGap is defined', () => {
    const result = getRowGapClassName('10px');
    expect(result).toBe('row-gap');
  });
});
