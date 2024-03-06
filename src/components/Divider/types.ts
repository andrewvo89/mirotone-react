import { ComponentProps } from 'react';

export type DividerProps = Omit<ComponentProps<'hr'>, 'children' | 'ref'>;
