import { CSSProperties } from 'react';

import styles from './Button.module.css';
import { ButtonSize, ButtonVariant } from './types';

export function getSizeClassName(size: ButtonSize): string {
  switch (size) {
    case 'small':
      return 'button-small';
    case 'medium':
      return 'button-medium';
    case 'large':
      return '';
  }
}

export function getVariantClassName(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return 'button-primary';
    case 'secondary':
      return 'button-secondary';
    case 'tertiary':
      return 'button-tertiary';
    case 'danger':
      return 'button-danger';
  }
}

export function getIsLoadingClassName(isLoading: boolean): string {
  return isLoading ? `button-loading ${styles['button-loading']}` : '';
}

export function getGapClassName(gap?: CSSProperties['gap']): string {
  return gap ? styles['gap'] : '';
}
