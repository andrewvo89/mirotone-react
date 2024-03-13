import { forwardRef } from 'react';

import { Icon } from '../..';
import { isNonEmptyString } from '../../utils/common';
import styles from './DismissableBadge.module.css';
import { DismissableBadgeProps } from './types';
import {
  getBadgeBackgroundColor,
  getBadgeBorder,
  getBadgeBorderRadiusStyle,
  getBadgeColor,
  getButtonBorderRadiusStyle,
  getButtonHoverBackground,
  getButtonIconFilter,
} from './utils';

const DismissableBadge = forwardRef<HTMLDivElement, DismissableBadgeProps>((props, ref) => {
  const { className, children, rounded = false, variant = 'primary', onClose, ...rest } = props;

  const classNames = [styles['badge'], 'p-medium', className].filter(isNonEmptyString);

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames.join(' ')}
      style={{
        '--border-radius': getBadgeBorderRadiusStyle(rounded),
        '--background-color': getBadgeBackgroundColor(variant),
        '--border': getBadgeBorder(variant),
        '--color': getBadgeColor(variant),
      }}
    >
      {children}
      <button
        className={styles['close-button']}
        style={{
          '--border-radius': getButtonBorderRadiusStyle(rounded),
          '--hover-background-color': getButtonHoverBackground(variant),
          '--icon-filter': getButtonIconFilter(variant),
        }}
        onClick={onClose}
      >
        <Icon name='close' />
      </button>
    </div>
  );
});

DismissableBadge.displayName = 'DismissableBadge';

export default DismissableBadge;
