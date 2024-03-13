import { forwardRef } from 'react';

import { isNonEmptyString } from '../../utils/common';
import { TagImageProps } from './types';

const TagImage = forwardRef<HTMLImageElement, TagImageProps>((props, ref) => {
  const { className, ...rest } = props;

  const classNames = ['tag-image', className].filter(isNonEmptyString);

  return <img {...rest} ref={ref} className={classNames.join(' ')} />;
});

TagImage.displayName = 'TagImage';

export default TagImage;
