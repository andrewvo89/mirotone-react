import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { createRef } from 'react';
import { Grid } from '../..';

describe('Grid', () => {
  test('should render correctly', () => {
    const { container } = render(<Grid />);
    const grid = container.querySelector('.grid');
    expect(grid).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { container } = render(<Grid className='custom-grid' />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('custom-grid');
  });

  test('should pass down a ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Grid ref={ref} />);
    const grid = container.querySelector('.grid');
    expect(grid).toBe(ref.current);
  });
});
