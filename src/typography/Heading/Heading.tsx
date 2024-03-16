import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { HeadingProps } from './types';
import styles from './Heading.module.css';

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { className, children, level = 1, fontColor = 'inherit', style = {}, ...rest } = props;

  const classNames = [`h${level}`, styles['heading'], className].filter(isNonEmptyString);

  switch (level) {
    case 1: {
      return (
        <h1 {...rest} ref={ref} className={classNames.join(' ')} style={{ ...style, '--font-color': fontColor }}>
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2 {...rest} ref={ref} className={classNames.join(' ')} style={{ ...style, '--font-color': fontColor }}>
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3 {...rest} ref={ref} className={classNames.join(' ')} style={{ ...style, '--font-color': fontColor }}>
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4 {...rest} ref={ref} className={classNames.join(' ')} style={{ ...style, '--font-color': fontColor }}>
          {children}
        </h4>
      );
    }
  }
});

Heading.displayName = 'Heading';

export default Heading;
