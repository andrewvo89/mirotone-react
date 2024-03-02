import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { TagButtonProps } from './types';

const TagButton = forwardRef<HTMLButtonElement, TagButtonProps>((props, ref) => {
  const { icon, className, ...rest } = props;

  const classNames = ['icon', `icon-${icon}`, className].filter(isNonEmptyString);

  return <button {...rest} type='button' ref={ref} className={classNames.join(' ')} />;
});

TagButton.displayName = 'TagButton';

export default TagButton;
