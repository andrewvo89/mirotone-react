import { ChangeEventHandler, forwardRef } from 'react';

import styles from './RadioButton.module.css';
import { RadioButtonProps } from './types';

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const { label, value, onChange, className, ...rest } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => onChange?.(event.target.checked);

  return (
    <label className='radiobutton'>
      <input {...rest} ref={ref} className={className} type='radio' checked={value} onChange={onChangeHandler} />
      {label ? <span>{label}</span> : <span className={styles['empty-label']} />}
    </label>
  );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;
