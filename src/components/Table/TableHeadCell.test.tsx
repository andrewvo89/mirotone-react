import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { TableHeadCell } from '../../';

describe('TableHeadCell', () => {
  test('should render table head cell', () => {
    const { container } = render(<TableHeadCell />);
    const tableBody = container.querySelector('th');
    expect(tableBody).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<TableHeadCell className='custom-class' />);
    const tableBody = container.querySelector('th');
    expect(tableBody).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = createRef<HTMLTableCellElement>();
    const { container } = render(<TableHeadCell ref={ref} />);
    const tableBody = container.querySelector('th');
    expect(tableBody).toBe(ref.current);
  });
});
