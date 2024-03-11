import { ChangeEventHandler, forwardRef } from 'react';

import styles from './Checkbox.module.css';
import { CheckboxProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, value, onChange, className, ...rest } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => onChange?.(event.target.checked);

  return (
    <label className={['checkbox', styles['container']].join(' ')}>
      <input {...rest} ref={ref} className={className} type='checkbox' checked={value} onChange={onChangeHandler} />
      {label ? <span>{label}</span> : <span className={styles['empty-label']} />}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
