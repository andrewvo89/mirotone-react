import { FormGroupSize } from './types';

export function getSizeClassName(size: FormGroupSize): string {
  switch (size) {
    case 'small':
      return 'form-group-small';
    case 'medium':
      return 'form-group';
  }
}

export function getIsDisabledClassName(isDisabled?: boolean): string {
  return isDisabled ? 'form-group__disabled' : '';
}
