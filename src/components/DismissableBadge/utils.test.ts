import { describe, expect, test } from 'vitest';

import { tokens } from '../..';
import {
  getBadgeBackgroundColor,
  getBadgeBorder,
  getBadgeBorderRadiusStyle,
  getBadgeColor,
  getButtonBorderRadiusStyle,
  getButtonHoverBackground,
  getButtonIconFilter,
} from './utils';

describe('getBadgeBorderRadiusStyle', () => {
  test('should return xxlarge when rounded is true', () => {
    const rounded = true;
    const expectedBorderRadius = tokens.borderRadius.xxlarge;

    const result = getBadgeBorderRadiusStyle(rounded);
    expect(result).toBe(expectedBorderRadius);
  });

  test('should return medium when rounded is false', () => {
    const rounded = false;
    const expectedBorderRadius = tokens.borderRadius.medium;

    const result = getBadgeBorderRadiusStyle(rounded);
    expect(result).toBe(expectedBorderRadius);
  });
});

describe('getBadgeBackgroundColor', () => {
  test('should return white when variant is primary', () => {
    const variant = 'primary';
    const expectedBackgroundColor = tokens.color.white;

    const result = getBadgeBackgroundColor(variant);
    expect(result).toBe(expectedBackgroundColor);
  });

  test('should return indigo[50] when variant is secondary', () => {
    const variant = 'secondary';
    const expectedBackgroundColor = tokens.color.indigo[50];

    const result = getBadgeBackgroundColor(variant);
    expect(result).toBe(expectedBackgroundColor);
  });
});

describe('getBadgeBorder', () => {
  test('should return the correct border for primary variant', () => {
    const variant = 'primary';
    const expectedBorder = `1.5px solid ${tokens.color.blue[600]}`;

    const result = getBadgeBorder(variant);
    expect(result).toBe(expectedBorder);
  });

  test('should return no border for secondary variant', () => {
    const variant = 'secondary';
    const expectedBorder = 'none';

    const result = getBadgeBorder(variant);
    expect(result).toBe(expectedBorder);
  });
});

describe('getBadgeColor', () => {
  test('should return primaryActionColor when variant is primary', () => {
    const variant = 'primary';
    const expectedColor = tokens.color.primaryActionColor;

    const result = getBadgeColor(variant);
    expect(result).toBe(expectedColor);
  });

  test('should return primaryText when variant is secondary', () => {
    const variant = 'secondary';
    const expectedColor = tokens.color.primaryText;

    const result = getBadgeColor(variant);
    expect(result).toBe(expectedColor);
  });
});

describe('getButtonBorderRadiusStyle', () => {
  test('should return xxlarge when rounded is true', () => {
    const rounded = true;
    const expectedBorderRadius = tokens.borderRadius.xxlarge;

    const result = getButtonBorderRadiusStyle(rounded);
    expect(result).toBe(expectedBorderRadius);
  });

  test('should return medium when rounded is false', () => {
    const rounded = false;
    const expectedBorderRadius = tokens.borderRadius.medium;

    const result = getButtonBorderRadiusStyle(rounded);
    expect(result).toBe(expectedBorderRadius);
  });
});

describe('getButtonHoverBackground', () => {
  test('should return blue[300] when variant is primary', () => {
    const variant = 'primary';
    const expectedHoverBackground = tokens.color.blue[300];

    const result = getButtonHoverBackground(variant);
    expect(result).toBe(expectedHoverBackground);
  });

  test('should return indigo[300] when variant is secondary', () => {
    const variant = 'secondary';
    const expectedHoverBackground = tokens.color.indigo[300];

    const result = getButtonHoverBackground(variant);
    expect(result).toBe(expectedHoverBackground);
  });
});

describe('getButtonIconFilter', () => {
  test('should return the correct filter for primary variant', () => {
    const variant = 'primary';
    const expectedFilter =
      'brightness(0) saturate(100%) invert(47%) sepia(74%) saturate(5653%) hue-rotate(221deg) brightness(98%) contrast(106%)';

    const result = getButtonIconFilter(variant);
    expect(result).toBe(expectedFilter);
  });

  test('should return the correct filter for secondary variant', () => {
    const variant = 'secondary';
    const expectedFilter =
      'brightness(0) saturate(100%) invert(38%) sepia(8%) saturate(1583%) hue-rotate(206deg) brightness(92%) contrast(88%)';

    const result = getButtonIconFilter(variant);
    expect(result).toBe(expectedFilter);
  });
});
