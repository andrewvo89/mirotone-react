import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { TagImage } from '../../';

describe('TagImage', () => {
  afterEach(cleanup);

  test('should render an image by alt name', () => {
    const altText = 'Sample Image';
    const { getByAltText } = render(<TagImage alt={altText} />);
    const image = getByAltText(altText);
    expect(image).toBeInTheDocument();
  });

  test('should render an image by src', () => {
    const src = 'https://www.mirotone.xyz/profile.png';
    const { getByRole } = render(<TagImage alt='Sample Image' src={src} />);
    const image = getByRole('img');
    expect(image).toHaveAttribute('src', src);
  });

  test('should apply custom class name', () => {
    const customClassName = 'custom-class';
    const { getByAltText } = render(<TagImage alt='Sample Image' className={customClassName} />);
    const image = getByAltText('Sample Image');
    expect(image).toHaveClass(customClassName);
  });

  test('should pass down ref to the TagImage component', () => {
    const ref = createRef<HTMLImageElement>();
    const { getByAltText } = render(<TagImage alt='Sample Image' ref={ref} />);
    const image = getByAltText('Sample Image');
    expect(image).toBe(ref.current);
  });
});
