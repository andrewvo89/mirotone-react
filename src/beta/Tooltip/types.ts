import {
  TooltipProps as RadixTooltipProps,
  TooltipProviderProps as RadixTooltipProviderProps,
  TooltipContentProps as RadixTooltipContentProps,
} from '@radix-ui/react-tooltip';
import { ComponentProps, ReactNode } from 'react';

export type TooltipSize = 'small' | 'medium' | 'large';

export type TooltipProps = Omit<ComponentProps<'div'>, 'ref'> & {
  delayDuration?: RadixTooltipProviderProps['delayDuration'];
  open?: RadixTooltipProps['open'];
  onOpenChange?: RadixTooltipProps['onOpenChange'];
  side?: RadixTooltipContentProps['side'];
  size?: TooltipSize;
  disableCloseOnOutside?: boolean;
  trigger: ReactNode;
};
