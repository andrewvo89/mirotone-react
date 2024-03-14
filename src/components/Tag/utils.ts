import { Icons } from '..';

export function getIconClassName(icon?: Icons): string {
  return icon ? `icon icon-${icon}` : '';
}
