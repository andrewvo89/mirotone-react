import { ComponentProps, forwardRef } from 'react';

import { Arrow, Content, Portal, Root, TooltipProvider, Trigger } from '@radix-ui/react-tooltip';

import { isNonEmptyString } from '../../utils/common';
import styles from './Tooltip.module.css';
import { TooltipProps } from './types';

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    delayDuration = 500,
    disableCloseOnOutside = false,
    trigger,
    open,
    onOpenChange,
    size = 'medium',
    children,
    className,
    ...rest
  } = props;

  const classNames = [styles['content'], `p-${size}`, className].filter(isNonEmptyString);

  const onPointerDownOutsideHandler: ComponentProps<typeof Content>['onPointerDownOutside'] = (event) => {
    if (disableCloseOnOutside) {
      event.preventDefault();
    }
  };

  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Root onOpenChange={onOpenChange} open={open}>
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <Content
            {...rest}
            className={classNames.join(' ')}
            ref={ref}
            onPointerDownOutside={onPointerDownOutsideHandler}
          >
            {children}
            <Arrow />
          </Content>
        </Portal>
      </Root>
    </TooltipProvider>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
