import { SpinnerSize } from '.';

export function getSizeClassName(size: SpinnerSize): string {
  switch (size) {
    case 'small':
      return 'spinner-small';
    case 'medium':
      return 'spinner-medium';
    case 'large':
      return 'spinner-large';
  }
}
