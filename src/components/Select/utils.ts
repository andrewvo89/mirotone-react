import { SelectSize } from './types';

export function getSizeClassName(size: SelectSize): string {
  switch (size) {
    case 'small':
      return 'select-small';
    case 'medium':
      return '';
  }
}
