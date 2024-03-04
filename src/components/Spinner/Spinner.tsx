import { forwardRef } from 'react';

import styles from './Spinner.module.css';
import { SpinnerProps } from './types';
import { getSizeClassName } from './utils';

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>((props, ref) => {
  const { className, spinnerColor = 'var(--indigo700)', size = 'medium' } = props;

  const classNames = [styles['spinner'], styles[getSizeClassName(size)], className].filter(Boolean);

  return (
    <svg
      ref={ref}
      role='progressbar'
      className={classNames.join(' ')}
      viewBox='25 25 50 50'
      style={{ '--spinner-color': spinnerColor }}
    >
      <circle className={styles['circle']} cx='50' cy='50' r='20' />
    </svg>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
