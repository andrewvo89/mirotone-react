import { FlexModifier, InputSize } from './types';

export function getSizeClassName(size: InputSize): string {
  switch (size) {
    case 'small':
      return 'input-small';
    case 'medium':
      return '';
  }
}

export function getBorderLeftClassName(borderLeft: boolean): string {
  return borderLeft ? 'border-left' : '';
}

export function getBorderRightClassName(borderRight: boolean): string {
  return borderRight ? 'border-right' : '';
}

export function getFlexModifierClassName(flexModifier: FlexModifier): string {
  switch (flexModifier) {
    case '1/4':
      return 'one-fourth';
    case '2/4':
      return 'two-fourth';
    case '3/4':
      return 'three-fourth';
    case '4/4':
      return '';
  }
}
