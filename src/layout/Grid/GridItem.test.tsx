import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { GridItem } from '../..';
import { createRef } from 'react';

describe('GridItem', () => {
  test('should render correctly', () => {
    const { container } = render(<GridItem colStart={1} colEnd={12} />);
    const gridItem = container.querySelector('.cs1.ce12');
    expect(gridItem).not.toBeNull();
  });

  test('should apply custom class name', () => {
    const { container } = render(<GridItem colStart={1} colEnd={12} className='custom-grid-item' />);
    const gridItem = container.querySelector('.cs1.ce12');
    expect(gridItem).toHaveClass('custom-grid-item');
  });

  test('should pass down a ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<GridItem ref={ref} colStart={1} colEnd={12} />);
    const gridItem = container.querySelector('.cs1.ce12');
    expect(gridItem).toBe(ref.current);
  });
});
