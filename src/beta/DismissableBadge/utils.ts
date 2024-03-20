import { tokens } from '../../tokens';
import { DismissableBadgeVariant } from './types';

export function getBadgeBorderRadiusStyle(rounded: boolean): string {
  return rounded ? tokens.borderRadius.xxlarge : tokens.borderRadius.medium;
}

export function getBadgeBackgroundColor(variant: DismissableBadgeVariant): string {
  switch (variant) {
    case 'primary':
      return tokens.color.white;
    case 'secondary':
      return tokens.color.indigo[50];
  }
}

export function getBadgeBorder(variant: DismissableBadgeVariant): string {
  switch (variant) {
    case 'primary':
      return `1.5px solid ${tokens.color.blue[600]}`;
    case 'secondary':
      return 'none';
  }
}

export function getBadgeColor(variant: DismissableBadgeVariant): string {
  switch (variant) {
    case 'primary':
      return tokens.color.primaryActionColor;
    case 'secondary':
      return tokens.color.primaryText;
  }
}

export function getButtonBorderRadiusStyle(rounded: boolean): string {
  return rounded ? tokens.borderRadius.xxlarge : tokens.borderRadius.medium;
}

export function getButtonHoverBackground(variant: DismissableBadgeVariant): string {
  switch (variant) {
    case 'primary':
      return tokens.color.blue[300];
    case 'secondary':
      return tokens.color.indigo[300];
  }
}

export function getButtonIconFilter(variant: DismissableBadgeVariant): string {
  switch (variant) {
    case 'primary':
      return 'brightness(0) saturate(100%) invert(47%) sepia(74%) saturate(5653%) hue-rotate(221deg) brightness(98%) contrast(106%)';
    case 'secondary':
      return 'brightness(0) saturate(100%) invert(38%) sepia(8%) saturate(1583%) hue-rotate(206deg) brightness(92%) contrast(88%)';
  }
}
