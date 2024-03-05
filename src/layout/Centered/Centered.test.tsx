import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { createRef } from 'react';
import { Centered } from '../..';

describe('Centered', () => {
  test('should render correctly', () => {
    const { container } = render(<Centered />);
    const centered = container.querySelector('.centered');
    expect(centered).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { container } = render(<Centered className='custom-centered' />);
    const centered = container.querySelector('.centered');
    expect(centered).toHaveClass('custom-centered');
  });

  test('should pass down a ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Centered ref={ref} />);
    const centered = container.querySelector('.centered');
    expect(centered).toBe(ref.current);
  });
});
