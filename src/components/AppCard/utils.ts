import { ComponentProps } from 'react';

import { Colors } from '../../tokens/types';

export function getAppCardAttributes(accentColor?: Colors): ComponentProps<'div'> {
  const attributes: ComponentProps<'div'> = {
    style: {},
  };

  if (accentColor) {
    return {
      ...attributes,
      style: { ...attributes.style, '--accent-color': accentColor },
    };
  }

  return attributes;
}
