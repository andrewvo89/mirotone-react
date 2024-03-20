import { forwardRef } from 'react';

import { Button, ButtonProps, Icon } from '../../components';
import styles from './DropdownButton.module.css';

const DropdownButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Button ref={ref} {...rest}>
      {children}
      <Icon name='arrow-down' className={styles['icon']} />
    </Button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
