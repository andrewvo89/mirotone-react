import { TextAreaSize } from './types';

export function getSizeClassName(size: TextAreaSize): string {
  switch (size) {
    case 'small':
      return 'textarea-small';
    case 'medium':
      return '';
  }
}
