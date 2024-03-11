import { ChangeEventHandler, forwardRef } from 'react';

import styles from './Toggle.module.css';
import { ToggleProps } from './types';

const Toggle = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  const { label, value, onChange, className, ...rest } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => onChange?.(event.target.checked);

  return (
    <label className={['toggle', styles['container']].join(' ')}>
      <input {...rest} ref={ref} className={className} type='checkbox' checked={value} onChange={onChangeHandler} />
      {label ? <span>{label}</span> : <span className={styles['empty-label']} />}
    </label>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle;
